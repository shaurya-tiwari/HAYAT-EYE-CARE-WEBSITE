import Image from "next/image";

// Simple inline SVG components for the logos
const GoogleLogo = () => (
  <svg viewBox="0 0 512 165" className="h-full w-auto fill-current" fill="currentColor">
    <path d="M125.7 75.8c0-5.4-.5-10.6-1.3-15.6H64v29.5h34.6c-1.5 9.5-7.1 17.6-15.4 23.2v19.3h24.9c14.6-13.4 23.1-33.2 23.1-56.4z" />
    <path d="M64 138.5c17.3 0 31.9-5.7 42.5-15.5l-24.9-19.3c-5.7 3.8-13 6.1-21.2 6.1-16.3 0-30.1-11-35-25.8H.2v19.9C11.6 126.7 35.8 138.5 64 138.5z" />
    <path d="M29 84.1c-1.3-3.8-2-7.9-2-12.1s.7-8.3 2-12.1V40H.2C-3.4 47.6-5.5 56.1-5.5 65s2.1 17.4 5.7 25l28.8-5.9z" />
    <path d="M64 31.5c9.4 0 17.9 3.2 24.5 9.5l18.4-18.4C95.9 11.9 81.3 6.1 64 6.1 35.8 6.1 11.6 17.9.2 40l28.8 19.9c4.9-14.8 18.7-25.8 35-25.8z" />
    <text x="140" y="110" fontFamily="sans-serif" fontWeight="bold" fontSize="90" fill="currentColor">Google</text>
  </svg>
);



const JustdialLogo = () => (
  <svg viewBox="0 0 300 100" className="h-full w-auto fill-current">
    <text x="0" y="70" fontFamily="sans-serif" fontWeight="800" fontSize="65" letterSpacing="-1">Justdial</text>
  </svg>
);

const TRUST_LOGOS = [
  { name: "Google Reviews", component: GoogleLogo },
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
