"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Building2 } from "lucide-react";
import type { Doctor } from "@/types/doctor";

interface DoctorCardProps {
  doctor: Doctor;
  imageUrl?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 md:gap-1">
      <Star size={8} className="fill-amber-400 text-amber-400 md:w-3 md:h-3" />
      <span className="text-slate-800 font-bold text-[7px] sm:text-[9px] md:text-sm">{rating}</span>
    </div>
  );
}

export default function DoctorCard({ doctor, imageUrl }: DoctorCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className="relative rounded-xl md:rounded-2xl overflow-hidden h-[170px] sm:h-[320px] md:h-[460px] w-full bg-slate-100 cursor-pointer transition-all duration-500 outline-none"
      style={{
        boxShadow: isExpanded ? "0 20px 40px -10px rgba(0,0,0,0.3)" : "0 4px 12px rgba(0,0,0,0.1)",
        transform: isExpanded ? "translateY(-8px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Background Image */}
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={`Professional photo of ${doctor.name}`}
          fill
          className={`object-cover object-top transition-transform duration-700 ${isExpanded ? "scale-105" : "scale-100"}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 bg-slate-200" />
      )}

      {/* Seamless Gradient Blur at the bottom */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none transition-opacity duration-500 ${isExpanded ? "opacity-0" : "opacity-100"}`}
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          maskImage: "linear-gradient(to top, black 30%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 30%, transparent 100%)",
        }}
      />

      {/* Light gradient for text readability */}
      <div className={`absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent pointer-events-none transition-opacity duration-500 ${isExpanded ? "opacity-60" : "opacity-100"}`} />

      {/* Experience Badge */}
      <div className="absolute top-1 right-1 md:top-4 md:right-4 px-1 py-0.5 md:px-3 md:py-1 rounded-full text-[5px] sm:text-[9px] md:text-[11px] font-bold text-slate-800 shadow-sm bg-white/95 backdrop-blur-md z-10 border border-white/20">
        {doctor.experienceYears}+ Yrs Exp
      </div>

      {/* Details Container */}
      <div
        className={`absolute flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-10
          ${isExpanded
            ? "bottom-1 md:bottom-3 left-1 md:left-3 right-1 md:right-3 p-1.5 md:p-4 rounded-md md:rounded-xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl gap-1 md:gap-3"
            : "bottom-0 left-0 right-0 p-1.5 md:p-4 gap-0.5 md:gap-1"
          }
        `}
      >
        {/* Header: Name, Rating & Specialty */}
        <div>
          <div className="flex justify-between items-center mb-0.5">
            <h3 className="text-slate-900 font-bold text-[8px] sm:text-[12px] md:text-xl tracking-tight line-clamp-1 leading-none">{doctor.name}</h3>
            <div className={isExpanded ? "block" : "hidden sm:block"}><StarRating rating={doctor.rating} /></div>
          </div>
          <p className="text-slate-700 font-medium text-[6px] sm:text-[9px] md:text-sm line-clamp-1 leading-none mt-0.5">{doctor.specialization}</p>
        </div>

        {/* Short Bio - ONLY visible when expanded */}
        <div
          className={`overflow-hidden transition-all duration-500 ${isExpanded ? "opacity-100 max-h-[100px]" : "opacity-0 max-h-0"}`}
        >
          <p className="text-slate-600 text-[5.5px] sm:text-[8.5px] md:text-xs leading-snug">
            {doctor.bio}
          </p>
        </div>

        {/* Info Pills */}
        <div className={`flex flex-row sm:items-center gap-0.5 sm:gap-2 text-[5.5px] sm:text-[8px] md:text-[11px] font-medium text-slate-700 ${isExpanded ? "mt-0" : "mt-0.5"}`}>
          <span className="flex items-center gap-0.5 md:gap-1">
            <Building2 className="w-1.5 h-1.5 md:w-3.5 md:h-3.5" />
            <span className="line-clamp-1">{doctor.department}</span>
          </span>
        </div>
      </div>
    </article>
  );
}
