import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

export default function VisionMission() {
  return (
    <SectionWrapper id="vision" bgVariant="dark">
      <SectionHeading
        title="Vision & Mission"
        subtitle="The values that guide every pair of eyes we care for."
        light
      />

      <div className="max-w-5xl mx-auto px-2 sm:px-0">
        <div className="relative group rounded-2xl md:rounded-3xl p-4 md:p-12 lg:p-16 overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
          }}>
          {/* Subtle Glow Backgrounds inside the card */}
          <div className="absolute top-0 left-0 w-[50%] h-full bg-[--primary]/10 blur-[100px] opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
          <div className="absolute top-0 right-0 w-[50%] h-full bg-[--accent]/10 blur-[100px] opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
          
          <div className="relative z-10 grid grid-cols-2 gap-4 sm:gap-6 md:gap-16">
            
            {/* Vision */}
            <div className="flex flex-col gap-2 md:gap-5">
              <div>
                <h3 className="text-[11px] sm:text-sm md:text-2xl lg:text-3xl font-light text-white tracking-widest mb-1.5 md:mb-4 uppercase text-[--primary-light]">Our Vision</h3>
                <p className="text-white/75 leading-relaxed text-[10px] sm:text-xs md:text-base lg:text-lg font-light">
                  To be the most trusted name in eye care — a center where every patient feels heard, 
                  valued, and leaves seeing the world more beautifully. We envision a future where 
                  quality eye care is accessible to every family, regardless of budget.
                </p>
              </div>
              <ul className="space-y-1.5 md:space-y-3 mt-1 md:mt-2">
                {["Accessible premium eye care", "Community eye health programs", "Technology-first diagnostics"].map(item => (
                  <li key={item} className="flex items-center gap-1.5 md:gap-3 text-[9px] sm:text-[11px] md:text-sm lg:text-base text-white/50 font-light tracking-wide">
                    <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[--primary-light] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="absolute left-1/2 top-[5%] bottom-[5%] md:top-[10%] md:bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent -translate-x-1/2" />

            {/* Mission */}
            <div className="flex flex-col gap-2 md:gap-5">
              <div>
                <h3 className="text-[11px] sm:text-sm md:text-2xl lg:text-3xl font-light text-white tracking-widest mb-1.5 md:mb-4 uppercase text-[--accent-light]">Our Mission</h3>
                <p className="text-white/75 leading-relaxed text-[10px] sm:text-xs md:text-base lg:text-lg font-light">
                  To deliver comprehensive, compassionate, and clinically excellent eye care through 
                  state-of-the-art technology, a skilled team of certified optometrists, and a curated 
                  collection of premium eyewear that suits every lifestyle and budget.
                </p>
              </div>
              <ul className="space-y-1.5 md:space-y-3 mt-1 md:mt-2">
                {["Certified & expert optometrists", "500+ premium frame brands", "Complete family eye health"].map(item => (
                  <li key={item} className="flex items-center gap-1.5 md:gap-3 text-[9px] sm:text-[11px] md:text-sm lg:text-base text-white/50 font-light tracking-wide">
                    <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[--accent-light] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
