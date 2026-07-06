import { Award, ShieldCheck, Clock3, Users } from "lucide-react";

const ITEMS = [
  { icon: Award, label: "Award-Winning", sub: "Regional eye care awards 2022–2024" },
  { icon: ShieldCheck, label: "NABL Certified", sub: "Highest quality standards" },
  { icon: Clock3, label: "10+ Years", sub: "Serving families since 2014" },
  { icon: Users, label: "Expert Team", sub: "3 certified optometrists" },
];

export default function AboutHighlightStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-10">
      {ITEMS.map(({ icon: Icon, label, sub }) => (
        <div key={label} className="glass p-4 md:p-5 flex flex-col items-center text-center gap-2.5">
          <div className="w-11 h-11 rounded-xl bg-[--primary-muted] flex items-center justify-center">
            <Icon size={20} className="text-[--primary]" />
          </div>
          <div>
            <p className="font-bold text-[--text-primary] text-sm">{label}</p>
            <p className="text-[--text-muted] text-xs mt-0.5 leading-snug">{sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
