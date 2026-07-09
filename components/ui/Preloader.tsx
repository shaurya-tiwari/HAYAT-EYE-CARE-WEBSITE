"use client";

import { useEffect, useState } from "react";
import LoaderUI from "@/components/ui/LoaderUI";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let innerTimer: NodeJS.Timeout;
    
    // Waiting for the full 'load' event kills LCP on slow networks because it waits for all images.
    // Instead, we just show the loader briefly while React hydrates, then fade it out.
    const timer = setTimeout(() => {
      setIsFading(true);
      innerTimer = setTimeout(() => setIsLoading(false), 500);
    }, 250);

    return () => {
      clearTimeout(timer);
      if (innerTimer) clearTimeout(innerTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center gap-8 bg-white transition-opacity duration-500 ease-in-out ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-label="Loading Hayat Eye Care"
    >
      <LoaderUI />
    </div>
  );
}
