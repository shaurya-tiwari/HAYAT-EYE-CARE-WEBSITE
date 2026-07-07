"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavCtaButton from "./NavCtaButton";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Only the homepage has a dark hero section at the top. 
  // Other pages (like /products) have a light background.
  const isDarkBgAtTop = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount in case we start scrolled
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Since the scrolled navbar is now a premium light-silver glass, we want DARK text when scrolled.
  // We only want light text when at the top of the homepage (dark hero background) and NOT scrolled.
  const useLightText = !scrolled && isDarkBgAtTop;

  return (
    <>
      <nav
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center",
          scrolled ? "top-2 px-2 md:top-4 md:px-6" : "top-0 px-0"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            scrolled
              ? "navbar-scrolled rounded-2xl py-2 px-3 md:py-3 md:px-6 w-full max-w-7xl"
              : "bg-transparent py-3 px-3 md:py-5 md:px-8 w-full max-w-7xl"
          )}
        >
          {/* Logo receives scrolled=true when it should use dark text */}
          <Logo scrolled={scrolled || !isDarkBgAtTop} />

          <NavLinks className="flex" dark={useLightText} />
          <div className="hidden md:flex items-center gap-3">
            <NavCtaButton />
          </div>
        </div>
      </nav>
    </>
  );
}
