import Image from "next/image";

/**
 * Global loading screen — shown automatically by Next.js on initial page load.
 * Lightweight: Uses a white background with the main Hayat Logo and a soft pulse.
 */
export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center gap-8 bg-white"
      role="status"
      aria-label="Loading Hayat Eye Care"
    >
      <div className="relative w-80 h-32 md:w-[500px] md:h-[180px] animate-pulse">
        <Image 
          src="/HAYAT LOGO.svg" 
          alt="Hayat Eye Care" 
          fill 
          className="object-contain"
          priority
        />
      </div>

      <div
        className="w-10 h-10 rounded-full border-4 border-gray-100 border-t-[--primary] animate-spin"
        aria-hidden="true"
      />
    </div>
  );
}
