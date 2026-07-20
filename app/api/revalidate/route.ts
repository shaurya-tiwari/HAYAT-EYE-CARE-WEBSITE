import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Cloudinary Webhook Endpoint (SECURED)
 * 
 * Cloudinary hits this endpoint whenever an upload, delete, or rename occurs.
 * This function instantly clears the permanent Next.js cache so new images 
 * appear on the website immediately without waiting for a timer.
 * 
 * SECURITY: Requires a valid webhook secret to prevent unauthorized cache purging.
 * Set REVALIDATION_SECRET in your .env.local and Vercel environment variables.
 * Configure Cloudinary webhook to send this secret in the x-webhook-secret header,
 * OR as a query parameter: /api/revalidate?secret=YOUR_SECRET
 */
export async function POST(req: NextRequest) {
  try {
    // ── Authentication Check ──────────────────────────────────────────────
    const expectedSecret = process.env.REVALIDATION_SECRET;

    if (!expectedSecret) {
      console.error('[Webhook Error] REVALIDATION_SECRET environment variable is not set.');
      return NextResponse.json(
        { revalidated: false, message: 'Server misconfiguration — secret not set.' },
        { status: 500 }
      );
    }

    // Accept secret from header (preferred) or query parameter (Cloudinary notification URL)
    const headerSecret = req.headers.get('x-webhook-secret');
    const { searchParams } = new URL(req.url);
    const querySecret = searchParams.get('secret');
    const providedSecret = headerSecret || querySecret;

    if (providedSecret !== expectedSecret) {
      return NextResponse.json(
        { revalidated: false, message: 'Unauthorized — invalid or missing webhook secret.' },
        { status: 401 }
      );
    }

    // ── Cache Revalidation ────────────────────────────────────────────────
    // We revalidate the "cloudinary" tag which is attached to our fetchCloudinaryImages function
    // @ts-ignore - Some Next.js versions have a glitch in their type definition for this function
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
