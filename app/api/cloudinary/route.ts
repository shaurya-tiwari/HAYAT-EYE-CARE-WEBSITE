import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

type CloudinaryResource = {
  public_id: string;
  secure_url: string;
  display_name?: string;
};

/**
 * Smart folder fetcher:
 * 1. Try exact folder path (e.g. FRAMES/)
 * 2. If empty, try root-level resources matching the folder's common prefix
 *    (FRAMES → frame_, DOCTORS → dr_, LENSES → lens_, GALLERY → gallery_)
 */
async function fetchResources(folder: string): Promise<CloudinaryResource[]> {
  // ── Step 1: Try folder path ──────────────────────────────────────────────
  try {
    const folderResult = await cloudinary.api.resources({
      type: "upload",
      prefix: folder + "/",
      max_results: 50,
    });
    if (folderResult.resources?.length > 0) {
      return folderResult.resources;
    }
  } catch {
    // folder path not found — fall through
  }

  // ── Step 2: Try root-level with matching name prefix ─────────────────────
  // Map folder names to the root naming convention used by Cloudinary
  const rootPrefixMap: Record<string, string[]> = {
    FRAMES: ["frame_", "frame-", "frames_"],
    LENSES: ["lens_", "lens-", "lense_", "contact_"],
    DOCTORS: ["dr_", "dr-", "doctor_"],
    GALLERY: ["gallery_", "gallery-"],
    "MAIN HOSPITAL": ["hospital_", "hospital-", "main_"],
  };

  const prefixes =
    rootPrefixMap[folder.toUpperCase()] ??
    [folder.toLowerCase() + "_", folder.toLowerCase() + "-"];

  const allResults: CloudinaryResource[] = [];

  for (const prefix of prefixes) {
    try {
      const result = await cloudinary.api.resources({
        type: "upload",
        prefix,
        max_results: 50,
      });
      if (result.resources?.length > 0) {
        allResults.push(...result.resources);
        break; // found results — no need to try other prefixes
      }
    } catch {
      // prefix not found — try next
    }
  }

  return allResults;
}

export async function GET(req: NextRequest) {
  const folder = req.nextUrl.searchParams.get("folder");
  if (!folder) {
    return NextResponse.json({ error: "folder param required" }, { status: 400 });
  }

  const resources = await fetchResources(folder);

  const images = resources.map((r) => ({
    public_id: r.public_id,
    secure_url: r.secure_url,
    display_name: r.display_name,
  }));

  return NextResponse.json({ images }, {
    headers: {
      // Cache for 1 hour — CDN & Next.js Data Cache both benefit
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=300",
    },
  });
}
