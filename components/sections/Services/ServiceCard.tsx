import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
}

export default function ServiceCard({ title, icon: Icon }: ServiceCardProps) {
  return (
    <div className="group p-2.5 md:p-5 flex flex-col items-center justify-center text-center gap-2 md:gap-3 relative overflow-hidden rounded-xl md:rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/50 hover:bg-white hover:border-[--primary]/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-slate-50 flex items-center justify-center text-[--primary] border border-slate-100 group-hover:bg-[--primary] group-hover:text-white group-hover:border-[--primary] transition-all duration-300 shadow-sm shrink-0">
        {Icon && <Icon strokeWidth={1.5} className="w-4 h-4 md:w-5 md:h-5" />}
      </div>
      <h3 className="text-[10px] sm:text-[11px] md:text-[15px] lg:text-base font-medium text-[--text-primary] group-hover:text-[--primary] transition-colors leading-tight line-clamp-3">
        {title}
      </h3>
    </div>
  );
}
