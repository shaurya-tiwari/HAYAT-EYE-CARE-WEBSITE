/**
 * Direct Cloudinary SDK fetcher — Server Components ONLY.
 *
 * Strategy:
 *  1. List all root folders ONCE (cached for 10 min)
 *  2. Case-insensitively match the requested folder name
 *  3. Fetch resources from the EXACT matching folder path
 *  4. If no folder found, fall back to filename prefix matching
 *
 * This eliminates the "blind guessing" that burned 500 API calls.
 * NEVER import this in Client Components.
 */

import cloudinary from "@/lib/cloudinaryConfig";
import { unstable_cache } from "next/cache";

export interface CloudinaryImageDirect {
  public_id: string;
  secure_url: string;
  display_name?: string;
}

// ── FALLBACK PREFIX MAP ────────────────────────────────────────────────────
// If images were uploaded to Cloudinary root (not in a folder),
// we match by filename prefix as a last resort.

const FILENAME_PREFIX_MAP: Record<string, string[]> = {
  "HERO SECTION": ["hero_", "hero-"],
  FRAMES:         ["frame_", "frame-", "frames_"],
  LENSES:         ["lens_", "lens-", "lense_", "contact_"],
  DOCTORS:        ["dr_", "dr-", "doctor_", "mr_shakeel", "abdul_mannan", "abdul_manan", "jishan_ahmad", "tabinda_akhtar", "owais_hayat", "shakeel_ahmad", "mr_"],
  GALLERY:        ["gallery_", "gallery-", "gallry_", "gallry-"],
  "MAIN HOSPITAL":["hospital_", "hospital-", "main_"],
};

// ── CORE FETCH ─────────────────────────────────────────────────────────────

async function fetchFromFolder(folderPath: string): Promise<CloudinaryImageDirect[]> {
  // Use the advanced Search API to support Cloudinary's new "Dynamic Asset Folders" feature.
  // This ensures that even if public_id doesn't include the folder path, it still finds images 
  // visually placed inside the folder using the UI's drag-and-drop.
  const safePath = folderPath.replace(/[^a-zA-Z0-9_ -]/g, '');
  const result = await cloudinary.search
    .expression(`folder:"${safePath}"`)
    .sort_by('created_at', 'desc')
    .max_results(80)
    .execute();
  return result.resources ?? [];
}

async function fetchByFilenamePrefixes(prefixes: string[]): Promise<CloudinaryImageDirect[]> {
  const all: CloudinaryImageDirect[] = [];
  for (const prefix of prefixes) {
    try {
      const result = await cloudinary.api.resources({
        type: "upload",
        prefix,
        max_results: 50,
        timeout: 10000
      });
      if (result.resources?.length > 0) {
        all.push(...result.resources);
        break; // Found results with this prefix — stop searching
      }
    } catch (error) {
      console.error(`[Cloudinary] Failed to fetch prefix "${prefix}":`, error);
    }
  }
  const unique = new Map<string, CloudinaryImageDirect>();
  all.forEach(r => unique.set(r.public_id, r));
  return Array.from(unique.values());
}

// ── PUBLIC API ─────────────────────────────────────────────────────────────

/**
 * Fetch all images from a Cloudinary folder (or matching root prefix).
 * Safe to call from any Server Component — no HTTP round-trip on cache hit.
 */
export const fetchCloudinaryImages = unstable_cache(
  async (folder: string): Promise<CloudinaryImageDirect[]> => {
    const normalizedKey = folder.trim().toUpperCase();
    let results: CloudinaryImageDirect[] = [];

    try {
      // 1. Discover available folders
      const rootFoldersResult = await cloudinary.api.root_folders();
      const availableFolders = (rootFoldersResult.folders ?? []).map((f: { name: string }) => f.name);
      
      const exactFolder = availableFolders.find(
        (f: string) => f.toUpperCase() === normalizedKey
      );

      if (exactFolder) {
        // Found the exact folder — fetch directly with one API call
        results = await fetchFromFolder(exactFolder);
      }

      // 2. Fallback: match by filename prefix (images dumped in root)
      // Run this if folder wasn't found OR if folder was empty (Cloudinary UI move bug)
      if (results.length === 0) {
        const fallbackPrefixes =
          FILENAME_PREFIX_MAP[normalizedKey] ??
          [folder.toLowerCase() + "_", folder.toLowerCase() + "-"];
        results = await fetchByFilenamePrefixes(fallbackPrefixes);
      }
    } catch (error) {
      console.error(`[Cloudinary] Critical failure fetching images for folder "${folder}":`, error);
      results = [];
    }

    return results;
  }, ['cloudinary-images'], { revalidate: 3600 }
);

/**
 * Convert a Cloudinary public_id into a human-readable display name.
 * e.g. "FRAMES/frame_2_zxkrks" → "Frame 2"
 */
export function formatPublicIdDirect(publicId: string): string {
  const base = publicId.split("/").pop() ?? publicId;
  return base
    .replace(/_[a-z0-9]{6}$/i, "") // strip 6-char random suffix (e.g. _zxkrks)
    .replace(/[-_]/g, " ")          // underscores/hyphens → spaces
    .replace(/\b\w/g, c => c.toUpperCase()); // Title Case
}
