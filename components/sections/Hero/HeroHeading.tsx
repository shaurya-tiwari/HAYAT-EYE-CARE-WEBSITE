import { SITE_NAME } from "@/constants/site";

export default function HeroHeading() {
  return (
    <div className="animate-fade-in-up">
      <p className="text-[--primary] font-semibold text-sm uppercase tracking-widest mb-4">
        {SITE_NAME} — Premium Eye Care
      </p>
      <h1 className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold text-[--text-primary] leading-[1.1] tracking-tight">
        See the World
        <br />
        <span className="gradient-text-blue">Clearly &</span>
        <br />
        Beautifully
      </h1>
    </div>
  );
}
