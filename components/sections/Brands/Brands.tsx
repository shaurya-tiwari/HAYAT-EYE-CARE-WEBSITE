import { BRANDS } from "./brands.data";

export default function Brands() {
  return (
    <section id="brands" className="py-10 md:py-14 bg-[--bg-base] border-b border-[--glass-border] overflow-hidden">
      <div className="container-custom px-4 md:px-8 text-center mb-8">
        <p className="text-[10px] md:text-[11px] font-bold text-[--text-muted] uppercase tracking-[0.25em]">
          Curated Global Partners
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex overflow-hidden group">
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[--bg-base] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track - First Set */}
        <div className="flex animate-marquee items-center gap-8 pr-8">
          {BRANDS.map((brand, i) => (
            <div
              key={`first-${brand.id}-${i}`}
              className="flex items-center justify-center h-14 md:h-16 px-8 md:px-10 rounded-2xl glass-flat grayscale opacity-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white whitespace-nowrap"
            >
              <span className="font-extrabold text-xl md:text-2xl text-[--text-primary] tracking-tighter">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Scrolling Track - Second Set (Duplicate) */}
        <div className="flex animate-marquee items-center gap-8 pr-8" aria-hidden="true">
          {BRANDS.map((brand, i) => (
            <div
              key={`second-${brand.id}-${i}`}
              className="flex items-center justify-center h-14 md:h-16 px-8 md:px-10 rounded-2xl glass-flat grayscale opacity-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white whitespace-nowrap"
            >
              <span className="font-extrabold text-xl md:text-2xl text-[--text-primary] tracking-tighter">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right fade mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[--bg-base] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
