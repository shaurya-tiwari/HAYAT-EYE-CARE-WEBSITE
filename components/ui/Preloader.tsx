"use client";

import { useEffect, useState } from "react";
import LoaderUI from "@/components/ui/LoaderUI";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const hideLoader = () => {
      setIsFading(true);
      setTimeout(() => setIsLoading(false), 500);
    };

    if (document.readyState === "complete") {
      const timer = setTimeout(hideLoader, 300);
      return () => clearTimeout(timer);
    } else {
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
      <LoaderUI />
    </div>
  );
}
