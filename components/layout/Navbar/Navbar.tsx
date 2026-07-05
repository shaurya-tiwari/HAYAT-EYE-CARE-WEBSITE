"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import NavCtaButton from "./NavCtaButton";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled ? "navbar-scrolled py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container-custom flex items-center justify-between px-6">
          <Logo />
          <NavLinks className="hidden md:flex" />
          <div className="hidden md:flex items-center gap-3">
            <NavCtaButton />
          </div>
          <button
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-xl text-[--text-secondary] hover:bg-[--bg-soft] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={cn("block w-5 h-0.5 bg-current mb-1.5 transition-all origin-center", mobileOpen && "rotate-45 translate-y-2")} />
            <span className={cn("block w-5 h-0.5 bg-current mb-1.5 transition-all", mobileOpen && "opacity-0")} />
            <span className={cn("block w-5 h-0.5 bg-current transition-all origin-center", mobileOpen && "-rotate-45 -translate-y-2")} />
          </button>
        </div>
      </nav>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
