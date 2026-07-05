import { CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
  "State-of-the-art diagnostic equipment",
  "Certified optometrists with 5+ years experience",
  "500+ premium frame brands in stock",
  "Complete family eye care — kids to seniors",
  "Same-day prescription service available",
  "Trusted by 5,000+ satisfied patients",
];

export default function AboutContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-10">
      {/* Text */}
      <div className="space-y-5">
        <p className="text-[--text-secondary] leading-relaxed text-base">
          Hayat Eye Care was founded with a simple mission: bring premium eye care to every family, 
          regardless of budget. Over the past decade, we have served thousands of patients with 
          comprehensive vision testing, expert frame fitting, and advanced contact lens solutions.
        </p>
        <p className="text-[--text-secondary] leading-relaxed text-base">
          Our team of certified optometrists uses the latest diagnostic technology to ensure 
          the most accurate prescriptions, while our curated collection of frames from over 
          20 premium brands ensures you always find the perfect style.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {HIGHLIGHTS.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-[--text-secondary]">
              <CheckCircle2 size={17} className="text-[--accent] shrink-0 mt-0.5" />
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Visual card */}
      <div className="relative">
        <div className="glass p-8 space-y-6">
          {[
            { label: "Eye Tests Done", value: "12,000+", color: "--primary" },
            { label: "Frames in Collection", value: "500+", color: "--accent" },
            { label: "Years of Service", value: "10+", color: "--primary" },
            { label: "Happy Families", value: "5,000+", color: "--accent" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <span className="text-[--text-secondary] text-sm">{item.label}</span>
              <span className="font-bold text-xl" style={{ color: `var(${item.color})` }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
        {/* Decorative glow */}
        <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 rounded-full bg-[--primary-muted] blur-2xl opacity-70" />
      </div>
    </div>
  );
}
