import Image from "next/image";

// Simple inline SVG components for the logos
const GoogleLogo = () => (
  <svg viewBox="0 0 300 100" className="h-full w-auto fill-current">
    <text x="0" y="70" fontFamily="sans-serif" fontWeight="800" fontSize="70" letterSpacing="-2">Google</text>
  </svg>
);



const PractoLogo = () => (
  <svg viewBox="0 0 300 100" className="h-full w-auto fill-current">
    <text x="0" y="70" fontFamily="sans-serif" fontWeight="800" fontSize="70" letterSpacing="-2">practo</text>
  </svg>
);

const JustdialLogo = () => (
  <svg viewBox="0 0 300 100" className="h-full w-auto fill-current">
    <text x="0" y="70" fontFamily="sans-serif" fontWeight="800" fontSize="65" letterSpacing="-1">Justdial</text>
  </svg>
);

const TRUST_LOGOS = [
  { name: "Google Reviews", component: GoogleLogo },
  { name: "Practo", component: PractoLogo },
  { name: "JustDial", component: JustdialLogo },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-[--glass-border] py-6 md:py-8">
      <div className="container-custom px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-shrink-0">
          <p className="text-xs font-semibold text-[--text-muted] uppercase tracking-wider">
            Trusted by top platforms
          </p>
        </div>

        <div className="flex-1 overflow-hidden">
          <div className="flex items-center gap-6 md:gap-16 justify-center md:justify-start opacity-50 grayscale">
            {TRUST_LOGOS.map((logo, i) => {
              const LogoIcon = logo.component;
              return (
                <div key={i} className="h-5 md:h-7 text-slate-800 flex items-center justify-center">
                  <LogoIcon />
                </div>
              );
            })}
            <div className="font-bold text-sm md:text-lg text-[--text-primary] tracking-tight">
              4.9/5 <span className="text-[10px] md:text-xs font-medium text-[--text-muted]">Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
