"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import NavCtaButton from "./NavCtaButton";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  const useLightText = !scrolled && isDarkBgAtTop;

  return (
    <>
      <nav
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center",
          scrolled ? "top-4 px-4 md:px-6" : "top-0 px-0"
        )}
      >
        <div 
          className={cn(
            "flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            scrolled 
              ? "navbar-scrolled py-2 px-3 md:py-3 md:px-6 rounded-full w-full max-w-4xl" 
              : "bg-transparent py-3 px-3 md:py-5 md:px-8 w-full max-w-7xl"
          )}
        >
          {/* Logo handles its own coloring, but we pass whether it should look "scrolled" (dark text) */}
          <Logo scrolled={scrolled || !isDarkBgAtTop} />
          
          <NavLinks className="hidden md:flex" dark={useLightText} />
          <div className="hidden md:flex items-center gap-3">
            <NavCtaButton />
          </div>
          <button
            id="mobile-menu-toggle"
            className={cn(
              "md:hidden p-2.5 rounded-xl transition-all duration-300",
              useLightText ? "text-white hover:bg-white/10" : "text-slate-600 hover:bg-slate-100"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={cn("block w-5 h-[2px] bg-current mb-1.5 transition-all origin-center duration-300", mobileOpen && "rotate-45 translate-y-[8px]")} />
            <span className={cn("block w-5 h-[2px] bg-current mb-1.5 transition-all duration-300", mobileOpen && "opacity-0")} />
            <span className={cn("block w-5 h-[2px] bg-current transition-all origin-center duration-300", mobileOpen && "-rotate-45 -translate-y-[8px]")} />
          </button>
        </div>
      </nav>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
