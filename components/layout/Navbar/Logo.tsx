import { SITE_NAME, SITE_TAGLINE } from "@/constants/site";

/** Brand logo — text-based until real SVG logo is provided */
export default function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2 group" aria-label="Hayat Eye Care home">
      {/* Icon placeholder */}
      <div className="w-9 h-9 rounded-full bg-[--primary] flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
        H
      </div>
      <div>
        <span className="block font-bold text-lg leading-tight text-[--text-primary]">
          {SITE_NAME}
        </span>
        <span className="block text-xs text-[--text-muted] leading-tight">
          {SITE_TAGLINE}
        </span>
      </div>
    </a>
  );
}
