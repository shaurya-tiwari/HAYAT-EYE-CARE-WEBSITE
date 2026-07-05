import { NAV_LINKS } from "@/constants/site";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  className?: string;
  onLinkClick?: () => void;
  dark?: boolean;
}

export default function NavLinks({ className, onLinkClick, dark }: NavLinksProps) {
  return (
    <ul className={cn("items-center gap-1 list-none", className)}>
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            onClick={onLinkClick}
            className={cn(
              "px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              dark
                ? "text-white/80 hover:text-white hover:bg-white/10"
                : "text-[--text-secondary] hover:text-[--primary] hover:bg-[--primary-muted]"
            )}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
