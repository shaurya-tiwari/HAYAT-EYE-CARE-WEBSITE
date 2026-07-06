"use client";

import Image from "next/image";
import { Clock, Star, Building2, MessageCircle, CalendarCheck } from "lucide-react";
import type { Doctor } from "@/types/doctor";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";
import { WHATSAPP_NUMBER } from "@/constants/site";

interface DoctorCardProps {
  doctor: Doctor;
  imageUrl?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <Star size={13} className="fill-white text-white" />
      <span className="text-white font-bold text-sm">{rating}</span>
    </div>
  );
}

export default function DoctorCard({ doctor, imageUrl }: DoctorCardProps) {
  const bookingMessage = `Hi, I'd like to book an appointment with ${doctor.name} at Hayat Eye Care.`;
  const bookingLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bookingMessage)}`;

  return (
    <article
      className="group relative rounded-2xl overflow-hidden h-[260px] sm:h-[320px] md:h-[460px] w-full bg-slate-900 cursor-pointer"
      style={{ boxShadow: "0 16px 48px -12px rgba(0,0,0,0.2)" }}
    >
      {/* Background Image filling the entire card */}
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={`Professional photo of ${doctor.name}`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900" />
      )}

      {/* 
        Seamless Gradient Blur at the bottom
      */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none transition-opacity duration-500 group-hover:opacity-0"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          maskImage: "linear-gradient(to top, black 45%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 45%, transparent 100%)",
        }}
      />

      {/* Dark gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-60" />

      {/* Experience Badge */}
      <div className="absolute top-3 right-3 md:top-4 md:right-4 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[9px] md:text-[11px] font-bold text-[--primary-dark] shadow-sm bg-white/95 backdrop-blur-md z-10">
        {doctor.experienceYears}+ Yrs Exp
      </div>

      {/* Details */}
      <div 
        className="absolute bottom-0 left-0 right-0 p-3.5 md:p-5 flex flex-col gap-1.5 md:gap-2.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-10
                   group-hover:bottom-2 md:group-hover:bottom-3 group-hover:left-2 md:group-hover:left-3 group-hover:right-2 md:group-hover:right-3 group-hover:p-3 md:group-hover:p-4 group-hover:rounded-2xl 
                   group-hover:bg-white/12 group-hover:backdrop-blur-2xl group-hover:border group-hover:border-white/20
                   focus-within:bottom-2 md:focus-within:bottom-3 focus-within:left-2 md:focus-within:left-3 focus-within:right-2 md:focus-within:right-3 focus-within:p-3 md:focus-within:p-4 focus-within:rounded-2xl 
                   focus-within:bg-white/12 focus-within:backdrop-blur-2xl focus-within:border focus-within:border-white/20"
      >
        {/* Name, Rating & Specialty */}
        <div>
          <div className="flex justify-between items-center mb-0.5">
            <h3 className="text-white font-bold text-sm md:text-xl tracking-tight line-clamp-1">{doctor.name}</h3>
            <div className="hidden sm:block"><StarRating rating={doctor.rating} /></div>
          </div>
          <p className="text-white/70 font-medium text-[10px] md:text-sm line-clamp-1">{doctor.specialization}</p>
        </div>

        {/* Short Bio */}
        <p className="hidden md:block text-white/50 text-xs leading-relaxed line-clamp-2">
          {doctor.bio}
        </p>

        {/* Info Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 text-[9px] md:text-[11px] font-medium text-white/60">
          <span className="flex items-center gap-1 md:gap-1.5">
            <Building2 size={10} className="md:w-3 md:h-3" />
            <span className="line-clamp-1">{doctor.department}</span>
          </span>
          <span className="flex items-center gap-1 md:gap-1.5">
            <Clock size={10} className="md:w-3 md:h-3" />
            <span>{doctor.timing.split(" | ")[0]}</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-1.5 md:gap-2 pt-1.5 md:pt-2.5 border-t border-white/10 opacity-0 h-0 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:h-[60px] sm:group-hover:h-[40px] group-hover:mt-0.5 focus-within:opacity-100 focus-within:h-[60px] sm:focus-within:h-[40px] focus-within:mt-0.5">
          <a
            href={buildGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1 md:gap-1.5 rounded-lg md:rounded-xl text-[10px] md:text-xs font-semibold text-white transition-all hover:bg-white/15 bg-white/8 border border-white/10 py-1.5 md:py-0"
          >
            <MessageCircle size={11} className="md:w-3.5 md:h-3.5" />
            Contact
          </a>
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1 md:gap-1.5 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold text-black transition-all hover:brightness-110 bg-white py-1.5 md:py-0"
          >
            <CalendarCheck size={11} className="md:w-3.5 md:h-3.5" />
            Book Now
          </a>
        </div>
      </div>
    </article>
  );
}
