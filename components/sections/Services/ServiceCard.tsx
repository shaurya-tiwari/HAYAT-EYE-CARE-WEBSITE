import { type LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="group p-2 md:p-7 flex flex-col items-start gap-1.5 md:gap-4 relative overflow-hidden rounded-xl md:rounded-2xl bg-slate-50 border border-slate-200">
      {/* Background decoration */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-[--primary-muted] rounded-full opacity-50" />
      
      <div className="w-5 h-5 md:w-12 md:h-12 rounded-[6px] md:rounded-xl bg-white flex items-center justify-center text-[--primary] border border-slate-200 relative z-10 shrink-0">
        <Icon strokeWidth={1.5} className="w-3 h-3 md:w-5 md:h-5" />
      </div>
      
      <div className="relative z-10">
        <h3 className="text-[10px] sm:text-xs md:text-lg font-bold text-[--text-primary] mb-0.5 md:mb-1.5 tracking-tight leading-tight">{title}</h3>
        <p className="text-[--text-muted] leading-relaxed text-[8px] sm:text-[10px] md:text-sm line-clamp-2 md:line-clamp-3">
          {description}
        </p>
      </div>

      <div className="mt-auto pt-1 md:pt-2 relative z-10 flex items-center gap-0.5 md:gap-1.5 text-[7px] sm:text-[9px] md:text-xs font-semibold text-[--primary] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Learn more <ArrowRight className="w-2 h-2 md:w-3.5 md:h-3.5" />
      </div>
    </div>
  );
}
