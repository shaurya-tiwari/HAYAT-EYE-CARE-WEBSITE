"use client";

import { useEffect } from "react";
import NavLinks from "./NavLinks";
import NavCtaButton from "./NavCtaButton";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/** Slide-in glass panel for mobile navigation */
export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Close on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) onClose();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Slide-in panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-40 h-full w-72 glass-flat shadow-2xl md:hidden",
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="self-end p-2 rounded-lg hover:bg-white/10 transition-colors mb-6"
            aria-label="Close menu"
          >
            <span className="block w-5 h-0.5 bg-[--text-primary] rotate-45 translate-y-0.5" />
            <span className="block w-5 h-0.5 bg-[--text-primary] -rotate-45" />
          </button>

          {/* Nav links — vertical on mobile */}
          <NavLinks
            className="flex-col items-start gap-1"
            onLinkClick={onClose}
          />

          <div className="mt-auto">
            <NavCtaButton />
          </div>
        </div>
      </div>
    </>
  );
}
