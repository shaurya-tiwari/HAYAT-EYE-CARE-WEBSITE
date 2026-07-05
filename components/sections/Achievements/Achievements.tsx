"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  suffix: string;
  duration?: number;
}

function AnimatedCounter({ target, suffix, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const ACHIEVEMENTS = [
  { value: 12000, suffix: "+", label: "Eye Tests Done", sub: "Accurate prescriptions delivered" },
  { value: 5000, suffix: "+", label: "Happy Families", sub: "Trusted across the city" },
  { value: 500, suffix: "+", label: "Frame Styles", sub: "Premium brands in stock" },
  { value: 10, suffix: "+", label: "Years of Excellence", sub: "Serving since 2014" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding section-primary-muted">
      <div className="container-custom px-6">
        <div className="text-center mb-14">
          <p className="text-[--primary] font-semibold text-sm uppercase tracking-widest mb-3">Our Numbers</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[--text-primary]">Built on Results</h2>
          <p className="text-[--text-secondary] mt-4 max-w-xl mx-auto">A decade of eye care, measured in smiles and clarity.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, i) => (
            <div key={item.label}
              className="glass p-8 text-center flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="text-5xl md:text-6xl font-bold gradient-text-blue">
                <AnimatedCounter target={item.value} suffix={item.suffix} />
              </span>
              <p className="font-bold text-[--text-primary] mt-1">{item.label}</p>
              <p className="text-xs text-[--text-muted]">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
