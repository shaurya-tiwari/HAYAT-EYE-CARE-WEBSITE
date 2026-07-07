import { Award, ShieldCheck, Clock3, Users } from "lucide-react";

const ITEMS = [
  { icon: Award, label: "Award-Winning", sub: "Regional eye care awards 2022–2024" },
  { icon: ShieldCheck, label: "NABL Certified", sub: "Highest quality standards" },
  { icon: Clock3, label: "10+ Years", sub: "Serving families since 2014" },
  { icon: Users, label: "Expert Team", sub: "3 certified optometrists" },
];

export default function AboutHighlightStrip() {
  return (
    <div className="grid grid-cols-4 gap-1 sm:gap-2 md:gap-4 mt-10">
      {ITEMS.map(({ icon: Icon, label, sub }) => (
        <div key={label} className="glass p-1.5 sm:p-3 md:p-5 flex flex-col items-center text-center gap-1.5 md:gap-2.5">
          <div className="w-7 h-7 md:w-11 md:h-11 rounded-md md:rounded-xl bg-[--primary-muted] flex items-center justify-center">
            <Icon className="w-4 h-4 md:w-5 md:h-5 text-[--primary]" />
          </div>
          <div>
            <p className="font-bold text-[--text-primary] text-[8.5px] sm:text-[10px] md:text-sm leading-[1.1]">{label}</p>
            <p className="text-[--text-muted] text-[7px] sm:text-[8px] md:text-xs mt-1 leading-[1.15]">{sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
