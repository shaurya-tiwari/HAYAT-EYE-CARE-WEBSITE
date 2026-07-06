import { SITE_NAME, SITE_TAGLINE } from "@/constants/site";

interface LogoProps {
  scrolled?: boolean;
}

/** Brand logo with eye/lens-inspired icon */
export default function Logo({ scrolled = true }: LogoProps) {
  return (
    <a href="/#home" className="flex items-center gap-2.5 group" aria-label="Hayat Eye Care home">
      {/* Lens-inspired concentric circle icon */}
      <div className="relative w-7 h-7 md:w-9 md:h-9 shrink-0 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-[2px] md:inset-[3px] rounded-full border-2 border-[--primary]/30" />
        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[--primary]" />
      </div>
      <div>
        <span className={`block font-extrabold text-sm md:text-[17px] leading-none tracking-tight transition-colors duration-300 ${scrolled ? "text-[--text-primary]" : "text-white"}`}>
          {SITE_NAME}
        </span>
        <span className={`block text-[7px] md:text-[9px] uppercase font-semibold tracking-[0.18em] mt-1 transition-colors duration-300 ${scrolled ? "text-[--text-muted]" : "text-white/60"}`}>
          {SITE_TAGLINE}
        </span>
      </div>
    </a>
  );
}
