"use client";

import { CldImage } from "next-cloudinary";
import { MapPin, Star, Clock } from "lucide-react";

export default function HeroImage() {
  return (
    <div className="relative animate-fade-in-up lg:animate-none" style={{ animationDelay: "0.2s" }}>
      {/* Main image frame */}
      <div className="relative rounded-[28px] overflow-hidden shadow-2xl h-80 lg:h-[420px]"
        style={{ boxShadow: "0 32px 80px rgba(14,165,233,0.18), 0 8px 24px rgba(15,23,42,0.10)", background: "#e0f2fe" }}>
        
        <CldImage
          src="hospital/main"
          alt="Hayat Eye Care clinic — modern optical center interior"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        
      </div>

      {/* Floating rating card */}
      <div className="absolute -bottom-5 -left-5 glass px-4 py-3 flex items-center gap-3 float"
        style={{ borderRadius: "16px", boxShadow: "0 8px 32px rgba(14,165,233,0.12)" }}>
        <div className="w-9 h-9 rounded-full bg-[--accent-muted] flex items-center justify-center">
          <Star size={16} className="fill-[--accent] text-[--accent]" />
        </div>
        <div>
          <p className="text-xs font-bold text-[--text-primary]">4.9 / 5 Rating</p>
          <p className="text-[10px] text-[--text-muted]">1,200+ Reviews</p>
        </div>
      </div>

      {/* Floating location card */}
      <div className="absolute -top-4 -right-4 glass px-4 py-3 flex items-center gap-3 float-delay"
        style={{ borderRadius: "16px", boxShadow: "0 8px 32px rgba(16,185,129,0.12)" }}>
        <div className="w-9 h-9 rounded-full bg-[--primary-muted] flex items-center justify-center">
          <Clock size={16} className="text-[--primary]" />
        </div>
        <div>
          <p className="text-xs font-bold text-[--text-primary]">Open Today</p>
          <p className="text-[10px] text-[--text-muted]">10 AM – 8 PM</p>
        </div>
      </div>

      {/* Floating map badge */}
      <div className="absolute top-1/2 -right-6 -translate-y-1/2 hidden xl:flex glass px-3 py-2 items-center gap-2"
        style={{ borderRadius: "12px" }}>
        <MapPin size={14} className="text-[--accent]" />
        <span className="text-xs font-medium text-[--text-secondary]">Find Us</span>
      </div>
    </div>
  );
}
