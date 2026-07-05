"use client";

import { Star, Quote } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

const TESTIMONIALS = [
  {
    name: "Ayesha Khan",
    role: "Patient since 2021",
    review: "The team at Hayat Eye Care is incredibly professional. Dr. Jishan took his time to explain my prescription and the frame recommendation was perfect for my face. Absolutely love my new glasses!",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    role: "Regular Patient",
    review: "I've been coming here for 3 years. The contact lens fitting by Dr. Manan was painless and precise. The prices are very reasonable for the quality of service you receive.",
    rating: 5,
  },
  {
    name: "Nida Siddiqui",
    role: "Patient since 2023",
    review: "Got my child's first glasses here. Dr. Owaish was amazing with kids — so patient and gentle. The whole experience was stress-free. Highly recommend for the whole family!",
    rating: 5,
  },
  {
    name: "Mohd. Tariq",
    role: "Walk-in Patient",
    review: "Walked in without an appointment and was seen within 20 minutes. The equipment is very advanced and the staff is friendly. Will definitely be back for my next checkup.",
    rating: 5,
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className={i < count ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" bgVariant="light">
      <SectionHeading
        title="Loved by Our Patients"
        subtitle="Real stories from real people who trust us with their vision."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="glass group p-7 flex flex-col gap-5 hover:-translate-y-1.5 transition-transform duration-300">
            <div className="flex items-start justify-between">
              <StarRow count={t.rating} />
              <Quote size={32} className="text-[--primary-muted] fill-[--primary-muted]" />
            </div>

            <p className="text-[--text-secondary] leading-relaxed text-sm flex-1">
              &ldquo;{t.review}&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-2 border-t border-[--glass-border]">
              {/* Avatar initials */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[--primary] to-[--accent] flex items-center justify-center text-white font-bold text-sm">
                {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
              </div>
              <div>
                <p className="font-semibold text-[--text-primary] text-sm">{t.name}</p>
                <p className="text-xs text-[--text-muted]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
