import { SITE_NAME } from "@/constants/site";

/**
 * Global loading screen — shown automatically by Next.js on initial page load.
 * Lightweight: logo + CSS spinner only, no JS animation library.
 */
export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5"
      style={{
        background: "linear-gradient(160deg, #0f172a 0%, #020617 100%)",
      }}
      role="status"
      aria-label="Loading Hayat Eye Care"
    >
      {/* Lens-inspired logo */}
      <div className="relative w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
        <div className="absolute inset-[4px] rounded-full border-2 border-white/20" />
        <div className="w-4 h-4 rounded-full bg-[--primary]" />
      </div>

      <p className="text-white/80 font-semibold text-base tracking-wide">{SITE_NAME}</p>

      {/* CSS spinner */}
      <div
        className="w-7 h-7 rounded-full border-2 border-white/10 border-t-[--primary] animate-spin-slow"
        aria-hidden="true"
      />
    </div>
  );
}
