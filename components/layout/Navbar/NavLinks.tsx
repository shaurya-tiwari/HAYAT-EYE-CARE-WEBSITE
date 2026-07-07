"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants/site";

interface NavLinksProps {
  className?: string;
  onLinkClick?: () => void;
  dark?: boolean;
}

/**
 * Smart nav links:
 * - Page routes (e.g. /products) → Next.js <Link> for instant SPA navigation
 * - Hash links (e.g. #about) → scrolls to section; if on a sub-page, goes to /#about first
 */
export default function NavLinks({ className, onLinkClick, dark }: NavLinksProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleHashClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    onLinkClick?.();

    if (pathname === "/") {
      // Already on homepage — just smooth scroll
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // On a sub-page — navigate to homepage then scroll
      router.push("/" + href);
    }
  }

  const linkClass = cn(
    "px-2.5 md:px-3 lg:px-4 py-1.5 md:py-2 rounded-full text-[12px] sm:text-[13px] md:text-[13px] lg:text-[14px] font-semibold tracking-tight transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer inline-flex items-center justify-center",
    dark
      ? "text-white/85 hover:text-white hover:bg-white/15"
      : "text-slate-700 hover:text-[--text-primary] hover:bg-slate-100/90"
  );

  return (
    <ul className={cn("items-center gap-0.5 list-none", className)}>
      {NAV_LINKS.map((link) => {
        const isPageRoute = !link.href.startsWith("#");
        const isAbout = link.label === "About";
        const liClass = isAbout ? "hidden md:block" : "";

        if (isPageRoute) {
          return (
            <li key={link.href} className={liClass}>
              <Link
                href={link.href}
                onClick={onLinkClick}
                className={linkClass}
              >
                {link.label}
              </Link>
            </li>
          );
        }

        return (
          <li key={link.href} className={liClass}>
            <a
              href={link.href}
              onClick={(e) => handleHashClick(e, link.href)}
              className={linkClass}
            >
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
