import Image from "next/image";
import { SITE_NAME, SITE_TAGLINE } from "@/constants/site";

interface LogoProps {
  scrolled?: boolean;
}

/** Brand logo with custom SVG icon */
export default function Logo({ scrolled = true }: LogoProps) {
  return (
    <a href="/#home" className={`flex items-center gap-1.5 md:gap-3 group ${scrolled ? 'whitespace-normal' : 'whitespace-nowrap'}`} aria-label="Hayat Eye Care home">
      {/* Brand Logo Image */}
      <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden group-hover:scale-105 transition-transform duration-300">
        <Image
          src="/HAYAT LOGO.svg"
          alt="HAYAT EYE CARE Logo"
          width={40}
          height={40}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className="hidden md:flex flex-col justify-center">
        <span className={`block font-extrabold text-[17px] leading-tight tracking-tight transition-colors duration-300 ${scrolled ? "text-[--text-primary]" : "text-white"}`}>
          {SITE_NAME}
        </span>
        <span className={`block text-[9px] uppercase font-semibold tracking-[0.18em] mt-[2px] transition-colors duration-300 ${scrolled ? "text-[--text-muted]" : "text-white/60"}`}>
          {SITE_TAGLINE}
        </span>
      </div>
    </a>
  );
}
