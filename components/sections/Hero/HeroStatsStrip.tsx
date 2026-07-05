import { STATS } from "@/constants/site";

export default function HeroStatsStrip() {
  return (
    <div
      className="flex flex-wrap gap-6 pt-2 animate-fade-in-up"
      style={{ animationDelay: "0.45s" }}
    >
      {STATS.map((stat, i) => (
        <div key={stat.label} className="flex items-center gap-3">
          {i > 0 && <div className="w-px h-8 bg-[--glass-border]" />}
          <div>
            <p className="text-2xl font-bold text-[--text-primary]">{stat.value}</p>
            <p className="text-xs text-[--text-muted]">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
