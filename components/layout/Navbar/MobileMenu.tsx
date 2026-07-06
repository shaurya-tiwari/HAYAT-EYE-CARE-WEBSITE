"use client";

import { useEffect } from "react";
import NavLinks from "./NavLinks";
import NavCtaButton from "./NavCtaButton";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/** Full-screen glass panel for mobile navigation */
export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) onClose();
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Full Screen Glass Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          "bg-[--dark-section-from]/95 backdrop-blur-2xl",
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full p-8 pt-28">
          {/* Nav links — vertical, premium typography */}
          <div className={cn("transition-all duration-500 delay-100", isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
            <NavLinks
              className="flex-col items-center gap-5"
              onLinkClick={onClose}
              dark={true}
            />
          </div>

          <div className={cn("mt-auto flex justify-center pb-10 transition-all duration-500 delay-200", isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
            <NavCtaButton />
          </div>
        </div>
      </div>
    </>
  );
}
