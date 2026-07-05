import Image from "next/image";

const TRUST_LOGOS = [
  { name: "Google Reviews", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Practo", src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Practo_logo.svg" },
  { name: "JustDial", src: "https://upload.wikimedia.org/wikipedia/en/b/b3/Justdial_logo.svg" },
  // In a real scenario, you would upload grayscale logos to Cloudinary and fetch them
];

export default function TrustStrip() {
  return (
    <section className="border-y border-[--glass-border] bg-white py-8">
      <div className="container-custom px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-shrink-0">
          <p className="text-sm font-semibold text-[--text-secondary] uppercase tracking-wider">
            Trusted by top platforms
          </p>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center gap-12 md:gap-20 justify-center md:justify-start opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
            {TRUST_LOGOS.map((logo, i) => (
              <div key={i} className="relative h-8 w-24">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
            <div className="font-bold text-xl text-[--text-secondary] tracking-tight">
              4.9/5 <span className="text-sm font-normal">Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
