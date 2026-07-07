import Image from "next/image";

/**
 * Global loading screen — shown automatically by Next.js on initial page load.
 * Lightweight: Uses a white background with the main Hayat Logo and a soft pulse.
 */
export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 bg-white"
      role="status"
      aria-label="Loading Hayat Eye Care"
    >
      {/* Main Logo with subtle pulse animation to indicate loading */}
      <div className="relative w-48 h-20 animate-pulse">
        <Image 
          src="/HAYAT LOGO.svg" 
          alt="Hayat Eye Care" 
          fill 
          className="object-contain"
          priority
        />
      </div>

      {/* Modern, subtle CSS spinner */}
      <div
        className="w-8 h-8 rounded-full border-4 border-gray-100 border-t-[--primary] animate-spin"
        aria-hidden="true"
      />
    </div>
  );
}
