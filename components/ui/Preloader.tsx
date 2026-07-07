"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const hideLoader = () => {
      // Start fade out animation
      setIsFading(true);
      // Remove from DOM after fade out completes (500ms)
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    if (document.readyState === "complete") {
      // If already loaded when component mounts, add a small delay to ensure React hydration is fully painted
      const timer = setTimeout(hideLoader, 300);
      return () => clearTimeout(timer);
    } else {
      // Wait for all assets (images, stylesheets, etc) to finish loading
      window.addEventListener("load", hideLoader);
      return () => window.removeEventListener("load", hideLoader);
    }
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
