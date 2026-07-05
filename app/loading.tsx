import { SITE_NAME } from "@/constants/site";

/**
 * Global loading screen — shown automatically by Next.js on initial page load.
 * Lightweight: logo + CSS spinner only, no JS animation library.
 */
export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6"
      style={{
        background: "linear-gradient(135deg, #0a5c60 0%, #0d7377 50%, #1a1a2e 100%)",
      }}
      role="status"
      aria-label="Loading Hayat Eye Care"
    >
      {/* Logo monogram */}
      <div className="w-16 h-16 rounded-full bg-[--accent] flex items-center justify-center text-white font-bold text-2xl shadow-2xl">
        H
      </div>

      <p className="text-white font-semibold text-lg tracking-wide">{SITE_NAME}</p>

      {/* CSS spinner */}
      <div
        className="w-8 h-8 rounded-full border-2 border-white/20 border-t-[--accent] animate-spin-slow"
        aria-hidden="true"
      />
    </div>
  );
}
