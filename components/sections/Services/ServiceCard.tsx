import { type LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="glass group p-8 flex flex-col items-start gap-5 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-[--primary-muted] rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-14 h-14 rounded-2xl bg-[--primary-muted] flex items-center justify-center text-[--primary] group-hover:scale-110 group-hover:bg-[--primary] group-hover:text-white transition-all duration-300 relative z-10">
        <Icon size={26} strokeWidth={1.5} />
      </div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-[--text-primary] mb-2">{title}</h3>
        <p className="text-[--text-secondary] leading-relaxed text-sm">
          {description}
        </p>
      </div>

      <div className="mt-auto pt-4 relative z-10 flex items-center gap-2 text-sm font-semibold text-[--primary] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Learn more <ArrowRight size={16} />
      </div>
    </div>
  );
}
