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
    "px-3.5 py-2 rounded-full text-[13px] font-medium tracking-tight transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer inline-flex items-center justify-center",
    dark
      ? "text-white/75 hover:text-white hover:bg-white/10"
      : "text-slate-500 hover:text-[--text-primary] hover:bg-slate-100/80"
  );

  return (
    <ul className={cn("items-center gap-0.5 list-none", className)}>
      {NAV_LINKS.map((link) => {
        const isPageRoute = !link.href.startsWith("#");

        if (isPageRoute) {
          return (
            <li key={link.href}>
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
          <li key={link.href}>
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
