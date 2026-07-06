import { SITE_NAME } from "@/constants/site";

export default function HeroHeading() {
  return (
    <div className="animate-fade-in-up">
      <p className="text-white/50 font-semibold text-[9px] md:text-[11px] lg:text-xs uppercase tracking-[0.2em] mb-2 md:mb-5">
        {SITE_NAME} — Premium Eye Care & Optical
      </p>
      <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] md:leading-[1.05] tracking-tight md:tracking-tighter">
        The Art of
        <br />
        <span className="text-white">Precision &</span>
        <br />
        Clarity
      </h1>
    </div>
  );
}
