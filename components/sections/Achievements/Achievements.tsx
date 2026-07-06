

import AnimatedCounter from "@/components/ui/AnimatedCounter";

const ACHIEVEMENTS = [
  { value: 12000, suffix: "+", label: "Eye Tests Done", sub: "Accurate prescriptions delivered" },
  { value: 5000, suffix: "+", label: "Happy Families", sub: "Trusted across the city" },
  { value: 500, suffix: "+", label: "Frame Styles", sub: "Premium brands in stock" },
  { value: 10, suffix: "+", label: "Years of Excellence", sub: "Serving since 2014" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-[--primary-muted]">
      <div className="container-custom px-5 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] mb-5 bg-white text-[--primary] border border-[--primary]/10">
            Our Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[--text-primary] tracking-tight">Built on Results</h2>
          <p className="text-[--text-muted] mt-3 max-w-lg mx-auto text-base">A decade of eye care, measured in smiles and clarity.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-4xl mx-auto">
          {ACHIEVEMENTS.map((item, i) => (
            <div key={item.label}
              className="glass p-5 md:p-7 text-center flex flex-col items-center gap-1.5 hover:-translate-y-1 transition-transform duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}>
              <span className="text-4xl md:text-5xl font-extrabold gradient-text-blue">
                <AnimatedCounter target={item.value} suffix={item.suffix} />
              </span>
              <p className="font-bold text-[--text-primary] text-sm mt-1">{item.label}</p>
              <p className="text-xs text-[--text-muted] leading-snug">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
