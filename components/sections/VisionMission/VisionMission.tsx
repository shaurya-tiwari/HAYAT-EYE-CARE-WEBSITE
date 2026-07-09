import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

export default function VisionMission() {
  return (
    <SectionWrapper id="vision" bgVariant="default" className="!pt-6 !pb-8 md:!py-20">
      <SectionHeading
        title="Vision & Mission"
        subtitle="The values that guide every pair of eyes we care for."
        className="mb-10 md:mb-20"
      />

      <div className="max-w-5xl mx-auto px-3 sm:px-6 md:px-0">
        {/* Premium Shadow Card */}
        <div className="relative overflow-hidden bg-white shadow-2xl shadow-black/15 rounded-2xl md:rounded-[2.5rem] p-3.5 sm:p-6 md:p-16 border border-slate-200">
          
          {/* Background Logo Watermark */}
          <div 
            className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none bg-no-repeat bg-center bg-[length:60%] md:bg-[length:30%]"
            style={{ backgroundImage: 'url("/HAYAT%20LOGO.svg")' }}
          />

          <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-6 md:gap-20">
          
          {/* Vision */}
          <div className="flex-1">
            <h3 className="text-[9.5px] sm:text-[11px] md:text-3xl font-medium md:font-light text-[--primary] tracking-widest mb-1.5 md:mb-8 uppercase">Our Vision</h3>
            <p className="text-[--text-muted] leading-relaxed text-[7px] sm:text-[9px] md:text-lg font-light mb-2.5 md:mb-8">
              To be the most trusted name in eye care — a center where every patient feels heard, 
              valued, and leaves seeing the world more beautifully. We envision a future where 
              quality eye care is accessible to every family, regardless of budget.
            </p>
            <ul className="space-y-1 md:space-y-4">
              {["Accessible premium eye care", "Community eye health programs", "Technology-first diagnostics"].map(item => (
                <li key={item} className="flex items-center gap-1.5 md:gap-4 text-[6.5px] sm:text-[8px] md:text-base text-[--text-muted] font-light tracking-wide">
                  <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[--primary] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Divider line for desktop */}
          <div className="absolute left-1/2 top-[5%] bottom-[5%] md:top-[10%] md:bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-[--primary]/15 to-transparent -translate-x-1/2" />

          {/* Mission */}
          <div className="flex-1">
            <h3 className="text-[9.5px] sm:text-[11px] md:text-3xl font-medium md:font-light text-[--accent] tracking-widest mb-1.5 md:mb-8 uppercase">Our Mission</h3>
            <p className="text-[--text-muted] leading-relaxed text-[7px] sm:text-[9px] md:text-lg font-light mb-2.5 md:mb-8">
              To deliver comprehensive, compassionate, and clinically excellent eye care through 
              state-of-the-art technology, a skilled team of certified optometrists, and a curated 
              collection of premium eyewear that suits every lifestyle and budget.
            </p>
            <ul className="space-y-1 md:space-y-4">
              {["Certified & expert optometrists", "500+ premium frame brands", "Complete family eye health"].map(item => (
                <li key={item} className="flex items-center gap-1.5 md:gap-4 text-[6.5px] sm:text-[8px] md:text-base text-[--text-muted] font-light tracking-wide">
                  <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[--accent] shrink-0" />
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
