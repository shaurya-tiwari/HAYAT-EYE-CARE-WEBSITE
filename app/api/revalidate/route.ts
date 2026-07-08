import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Cloudinary Webhook Endpoint
 * 
 * Cloudinary hits this endpoint whenever an upload, delete, or rename occurs.
 * This function instantly clears the permanent Next.js cache so new images 
 * appear on the website immediately without waiting for a timer.
 */
export async function POST(req: NextRequest) {
  try {
    // We revalidate the "cloudinary" tag which is attached to our fetchCloudinaryImages function
    revalidateTag('cloudinary');

    return NextResponse.json(
      { revalidated: true, now: Date.now(), message: 'Cloudinary cache wiped successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Webhook Error] Failed to revalidate cache:', error);
    return NextResponse.json(
      { revalidated: false, message: 'Error revalidating cache' },
      { status: 500 }
    );
  }
}
