import Image from "next/image";

const TRUST_LOGOS = [
  { name: "Google Reviews", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Practo", src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Practo_logo.svg" },
  { name: "JustDial", src: "https://upload.wikimedia.org/wikipedia/en/b/b3/Justdial_logo.svg" },
  // In a real scenario, you would upload grayscale logos to Cloudinary and fetch them
];

export default function TrustStrip() {
  return (
    <section className="border-y border-[--glass-border] bg-white py-6 md:py-8">
      <div className="container-custom px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-shrink-0">
          <p className="text-xs font-semibold text-[--text-muted] uppercase tracking-wider">
            Trusted by top platforms
          </p>
        </div>

        <div className="flex-1 overflow-hidden">
          <div className="flex items-center gap-6 md:gap-16 justify-center md:justify-start opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-500">
            {TRUST_LOGOS.map((logo, i) => (
              <div key={i} className="relative h-5 w-14 md:h-7 md:w-20">
                {/* next/image blocks remote SVGs by default. Standard img tag is safer and doesn't need optimization for SVGs */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
            <div className="font-bold text-sm md:text-lg text-[--text-primary] tracking-tight">
              4.9/5 <span className="text-[10px] md:text-xs font-medium text-[--text-muted]">Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
