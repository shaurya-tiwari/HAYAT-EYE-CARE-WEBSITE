import LoaderUI from "@/components/ui/LoaderUI";

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
      <LoaderUI />
    </div>
  );
}
