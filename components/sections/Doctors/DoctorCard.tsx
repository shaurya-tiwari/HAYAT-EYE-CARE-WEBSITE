"use client";

import { CldImage } from "next-cloudinary";
import { Clock, Star, Building2, MessageCircle, CalendarCheck } from "lucide-react";
import type { Doctor } from "@/types/doctor";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

interface DoctorCardProps {
  doctor: Doctor;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <Star size={14} className="fill-white text-white" />
      <span className="text-white font-bold text-sm">{rating}</span>
    </div>
  );
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  const bookingMessage = `Hi, I'd like to book an appointment with ${doctor.name} at Hayat Eye Care.`;
  const bookingLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919876543210"}?text=${encodeURIComponent(bookingMessage)}`;

  return (
    <article
      className="group relative rounded-[28px] overflow-hidden h-[460px] w-full bg-black cursor-pointer"
      style={{ boxShadow: "0 12px 40px rgba(15,23,42,0.08)" }}
    >
      {/* Background Image filling the entire card */}
      <CldImage
        src={doctor.id}
        alt={`Professional photo of ${doctor.name}`}
        fill
        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
      />

      {/* 
        NORMAL STATE: Seamless Gradient Blur at the bottom (Like the reference image)
        This uses mask-image to fade the blur smoothly into the image above.
      */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none transition-opacity duration-500 group-hover:opacity-0"
        style={{
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          maskImage: "linear-gradient(to top, black 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 50%, transparent 100%)",
        }}
      />

      {/* Dark gradient for text readability (Normal state) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-60" />

      {/* Floating Experience Badge (Top Right) */}
      <div className="absolute top-5 right-5 px-3 py-1.5 rounded-full text-[11px] font-bold text-black shadow-sm bg-white/90 backdrop-blur-md z-10">
        {doctor.experienceYears}+ Yrs Exp
      </div>

      {/* 
        DETAILS PORTION
        Normal: Transparent, floating over the seamless blur.
        Hover: Transforms into a stylish frosted glass box floating at the bottom.
      */}
      <div 
        className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3 transition-all duration-500 z-10
                   group-hover:bottom-3 group-hover:left-3 group-hover:right-3 group-hover:p-5 group-hover:rounded-[20px] 
                   group-hover:bg-white/10 group-hover:backdrop-blur-xl group-hover:border group-hover:border-white/20 group-hover:shadow-2xl"
      >
        {/* Name, Rating & Specialty */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-white font-bold text-2xl tracking-tight">{doctor.name}</h3>
            <StarRating rating={doctor.rating} />
          </div>
          <p className="text-white/80 font-medium text-sm">{doctor.specialization}</p>
        </div>

        {/* Short Bio */}
        <p className="text-white/60 text-xs leading-relaxed line-clamp-2 transition-all duration-300">
          {doctor.bio}
        </p>

        {/* Info Pills */}
        <div className="flex items-center gap-4 text-[11px] font-medium text-white/70 pt-2 transition-all duration-300">
          <span className="flex items-center gap-1.5">
            <Building2 size={13} />
            {doctor.department}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            {doctor.timing.split(" | ")[0]}
          </span>
        </div>

        {/* 
          Action Buttons (Hidden by default, reveal on hover inside the box)
        */}
        <div className="flex gap-2 pt-3 border-t border-white/10 opacity-0 h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:h-[42px] group-hover:mt-1">
          <a
            href={buildGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 rounded-xl text-xs font-semibold text-white transition-all hover:bg-white/20 bg-white/10 border border-white/10"
          >
            <MessageCircle size={14} />
            Contact
          </a>
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 rounded-xl text-xs font-bold text-black transition-all hover:brightness-110 bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            <CalendarCheck size={14} />
            Book Now
          </a>
        </div>
      </div>
    </article>
  );
}
