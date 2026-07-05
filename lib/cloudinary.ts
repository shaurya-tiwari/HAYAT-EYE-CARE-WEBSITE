/**
 * Cloudinary folder image fetcher.
 * Uses our own API route (/api/cloudinary) to avoid Node.js-only SDK
 * being bundled into the browser.
 *
 * This runs as a Server Component fetch — zero client JS, full CDN speed.
 */

export interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  display_name?: string;
}

/**
 * Convert a Cloudinary public_id into a human-readable display name.
 * Strips folder prefix, version suffixes, underscores/hyphens.
 * e.g. "frame_2_zxkrks" → "Frame 2"
 */
export function formatPublicId(publicId: string): string {
  const base = publicId.split("/").pop() ?? publicId;
  return base
    .replace(/_[a-z0-9]{6}$/, "")   // remove Cloudinary 6-char random suffix
    .replace(/[-_]/g, " ")           // underscores/hyphens → spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()); // Title Case
}

/** Fetch all images from a Cloudinary folder via our secure API route. */
export async function listFolderImages(folder: string): Promise<CloudinaryImage[]> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  try {
    const res = await fetch(`${baseUrl}/api/cloudinary?folder=${encodeURIComponent(folder)}`, {
      // Cache for 1 hour — matches ISR revalidation on pages using this
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return (data.images ?? []) as CloudinaryImage[];
  } catch (err) {
    console.error(`[cloudinary] Failed to fetch folder "${folder}":`, err);
    return [];
  }
}

/** Convenience: get just the first image's public_id from a folder. */
export async function getFirstImage(folder: string): Promise<string | null> {
  const images = await listFolderImages(folder);
  return images.length > 0 ? images[0].public_id : null;
}
