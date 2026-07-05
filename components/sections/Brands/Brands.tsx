import { BRANDS } from "./brands.data";

export default function Brands() {
  return (
    <section className="py-12 bg-[--bg-base] border-b border-[--glass-border] overflow-hidden">
      <div className="container-custom px-6 text-center mb-8">
        <p className="text-sm font-semibold text-[--text-secondary] uppercase tracking-wider">
          Partnering with World-Class Brands
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex overflow-x-hidden group">
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[--bg-base] to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling Track */}
        <div className="animate-marquee marquee-track items-center">
          {/* We duplicate the list to make the infinite scroll seamless */}
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div
              key={`${brand.id}-${i}`}
              className="flex items-center justify-center h-16 px-8 rounded-2xl glass-flat grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              {/* If you have logo images in Cloudinary later, use CldImage here instead of text */}
              <span className="font-bold text-xl text-[--text-primary] tracking-tight whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right fade mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[--bg-base] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
