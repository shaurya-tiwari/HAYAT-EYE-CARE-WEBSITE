import HeroBackground from "./HeroBackground";
import HeroHeading from "./HeroHeading";
import HeroSubtext from "./HeroSubtext";
import HeroCtaButtons from "./HeroCtaButtons";
import HeroStatsStrip from "./HeroStatsStrip";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden section-hero-bg"
    >
      <HeroBackground />

      <div className="relative z-10 container-custom px-6 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text content */}
          <div className="flex flex-col gap-7">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium w-fit"
              style={{ background: "rgba(16,185,129,0.10)", border: "1px solid rgba(16,185,129,0.25)", color: "var(--accent-dark)" }}>
              <span className="w-2 h-2 rounded-full bg-[--accent] animate-pulse" />
              Trusted by 5,000+ Happy Patients
            </div>

            <HeroHeading />
            <HeroSubtext />
            <HeroCtaButtons />
            <HeroStatsStrip />
          </div>

          {/* Right — Hospital image */}
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
