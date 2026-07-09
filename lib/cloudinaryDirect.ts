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
async function fetchCloudinaryImagesLogic(folder: string): Promise<CloudinaryImageDirect[]> {
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
    if (results.length === 0) {
      const fallbackPrefixes =
        FILENAME_PREFIX_MAP[normalizedKey] ??
        [folder.toLowerCase() + "_", folder.toLowerCase() + "-"];
      results = await fetchByFilenamePrefixes(fallbackPrefixes);
    }
  } catch (error: any) {
    console.error(`[Cloudinary] Critical failure fetching images for folder "${folder}":`, 
      error?.message || error?.error?.message || JSON.stringify(error) || error
    );
    results = [];
  }

  return results;
}

const fetchCloudinaryImagesCached = unstable_cache(
  fetchCloudinaryImagesLogic,
  ['cloudinary-images'],
  { tags: ['cloudinary'] } // Permanent cache, invalidated on-demand via Webhook
);

import fs from "fs";
import path from "path";

export const fetchCloudinaryImages = async (folder: string): Promise<CloudinaryImageDirect[]> => {
  if (process.env.NODE_ENV === 'development') {
    // Smart Local Cache: Prevents hitting the 500 API limit during hot-reloads
    // Automatically refreshes every 5 minutes so you never have to manually delete the file.
    const CACHE_FILE = path.join(process.cwd(), '.cloudinary-cache.json');
    const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
    
    // Structure: { "FOLDER_NAME": { timestamp: number, data: [] } }
    let devCache: Record<string, { timestamp: number; data: CloudinaryImageDirect[] }> = {};
    
    try {
      if (fs.existsSync(CACHE_FILE)) {
        devCache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
      }
    } catch (e) {
      console.warn("Could not read local Cloudinary cache, resetting.");
    }

    const cachedEntry = devCache[folder];
    const now = Date.now();

    // If cache exists and is less than 5 minutes old, return it instantly!
    if (cachedEntry && cachedEntry.data.length > 0 && (now - cachedEntry.timestamp < CACHE_TTL_MS)) {
      return cachedEntry.data;
    }

    // Otherwise, fetch fresh data from Cloudinary
    const results = await fetchCloudinaryImagesLogic(folder);
    
    // Only save to cache if we actually got results (prevents caching rate-limit errors)
    if (results.length > 0) {
      devCache[folder] = { timestamp: now, data: results };
      try {
        fs.writeFileSync(CACHE_FILE, JSON.stringify(devCache, null, 2));
      } catch (e) {
        console.error("Failed to write to local Cloudinary cache", e);
      }
    }
    
    // If we got rate-limited but have an old cache, serve the stale cache as a fallback!
    if (results.length === 0 && cachedEntry?.data) {
      return cachedEntry.data;
    }
    
    return results;
  }
  
  // Use permanent cache in production (revalidated via Webhooks)
  return fetchCloudinaryImagesCached(folder);
};

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
