import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <SectionWrapper id="vision" bgVariant="dark">
      <SectionHeading
        title="Vision & Mission"
        subtitle="The values that guide every pair of eyes we care for."
        light
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Vision Card */}
        <div className="relative group rounded-[24px] p-8 overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}>
          {/* Glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[--primary]/20 rounded-full blur-3xl group-hover:opacity-80 opacity-50 transition-opacity duration-500" />
          
          <div className="relative z-10 flex flex-col gap-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(14,165,233,0.2)", border: "1px solid rgba(14,165,233,0.3)" }}>
              <Eye size={26} className="text-[--primary-light]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-white/65 leading-relaxed">
                To be the most trusted name in eye care — a center where every patient feels heard, 
                valued, and leaves seeing the world more beautifully. We envision a future where 
                quality eye care is accessible to every family, regardless of budget.
              </p>
            </div>
            <ul className="space-y-2 mt-2">
              {["Accessible premium eye care", "Community eye health programs", "Technology-first diagnostics"].map(item => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[--primary-light] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mission Card */}
        <div className="relative group rounded-[24px] p-8 overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}>
          {/* Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[--accent]/20 rounded-full blur-3xl group-hover:opacity-80 opacity-50 transition-opacity duration-500" />
          
          <div className="relative z-10 flex flex-col gap-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(16,185,129,0.2)", border: "1px solid rgba(16,185,129,0.3)" }}>
              <Target size={26} className="text-[--accent-light]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-white/65 leading-relaxed">
                To deliver comprehensive, compassionate, and clinically excellent eye care through 
                state-of-the-art technology, a skilled team of certified optometrists, and a curated 
                collection of premium eyewear that suits every lifestyle and budget.
              </p>
            </div>
            <ul className="space-y-2 mt-2">
              {["Certified & expert optometrists", "500+ premium frame brands", "Complete family eye health"].map(item => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[--accent-light] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
