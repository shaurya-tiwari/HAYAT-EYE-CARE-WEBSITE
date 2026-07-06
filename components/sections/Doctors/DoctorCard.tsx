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
      className="group relative rounded-xl md:rounded-2xl overflow-hidden h-[180px] sm:h-[320px] md:h-[460px] w-full bg-slate-900 cursor-pointer"
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
      <div className="absolute top-1.5 right-1.5 md:top-4 md:right-4 px-1.5 py-0.5 md:px-3 md:py-1.5 rounded-full text-[7px] sm:text-[9px] md:text-[11px] font-bold text-[--primary-dark] shadow-sm bg-white/95 backdrop-blur-md z-10">
        {doctor.experienceYears}+ Yrs Exp
      </div>

      {/* Details */}
      <div
        className="absolute bottom-0 left-0 right-0 p-1 sm:p-2 md:p-5 flex flex-col gap-0.5 md:gap-2.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-10
                   group-hover:bottom-1 md:group-hover:bottom-3 group-hover:left-1 md:group-hover:left-3 group-hover:right-1 md:group-hover:right-3 group-hover:p-1 md:group-hover:p-4 group-hover:rounded-lg md:group-hover:rounded-2xl 
                   group-hover:bg-white/12 group-hover:backdrop-blur-2xl group-hover:border group-hover:border-white/20
                   focus-within:bottom-1 md:focus-within:bottom-3 focus-within:left-1 md:focus-within:left-3 focus-within:right-1 md:focus-within:right-3 focus-within:p-1 md:focus-within:p-4 focus-within:rounded-lg md:focus-within:rounded-2xl 
                   focus-within:bg-white/12 focus-within:backdrop-blur-2xl focus-within:border focus-within:border-white/20"
        style={{
          background: "linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.8) 50%, transparent 100%)",
        }}
      >
        {/* Name, Rating & Specialty */}
        <div>
          <div className="flex justify-between items-center mb-0.5">
            <h3 className="text-white font-bold text-[10px] sm:text-[12px] md:text-xl tracking-tight line-clamp-1 leading-none">{doctor.name}</h3>
            <div className="hidden md:block"><StarRating rating={doctor.rating} /></div>
          </div>
          <p className="text-white/70 font-medium text-[9px] sm:text-[10px] md:text-sm line-clamp-1 leading-none mt-0.5">{doctor.specialization}</p>
        </div>

        {/* Short Bio */}
        <p className="hidden lg:block text-white/50 text-xs leading-relaxed line-clamp-2 mt-1">
          {doctor.bio}
        </p>

        {/* Info Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 text-[8px] sm:text-[9px] md:text-[11px] font-medium text-white/60 mt-0.5 md:mt-0">
          <span className="flex items-center gap-1 md:gap-1.5">
            <Building2 className="w-2 h-2 md:w-3 md:h-3" />
            <span className="line-clamp-1">{doctor.department}</span>
          </span>
          <span className="flex items-center gap-1 md:gap-1.5">
            <Clock className="w-2 h-2 md:w-3 md:h-3" />
            <span>{doctor.timing.split(" | ")[0]}</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-1 md:gap-2 pt-1 md:pt-2.5 border-t border-white/10 opacity-0 h-0 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:h-[45px] sm:group-hover:h-[40px] group-hover:mt-0.5 focus-within:opacity-100 focus-within:h-[45px] sm:focus-within:h-[40px] focus-within:mt-0.5">
          <a
            href={buildGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1 md:gap-1.5 rounded text-[8px] sm:text-[9px] md:text-xs font-semibold text-white transition-all hover:bg-white/15 bg-white/8 border border-white/10 py-1 md:py-0"
          >
            <MessageCircle className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" />
            Contact
          </a>
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1 md:gap-1.5 rounded text-[8px] sm:text-[9px] md:text-xs font-bold text-black transition-all hover:brightness-110 bg-white py-1 md:py-0"
          >
            <CalendarCheck className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" />
            Book Now
          </a>
        </div>
      </div>
    </article>
  );
}
