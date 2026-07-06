"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "How often should I get my eyes tested?",
    a: "Adults should have a comprehensive eye test every 1–2 years. Children under 16 and adults over 60 should get tested annually. If you notice any changes in vision, visit us immediately.",
  },
  {
    q: "How long does a complete eye test take?",
    a: "A thorough eye examination at Hayat Eye Care typically takes 30–45 minutes. This includes a full refraction test, eye health check, and a consultation with our optometrist.",
  },
  {
    q: "Can I get contact lenses without a prior prescription?",
    a: "No. Contact lenses require a specific fitting and prescription that includes measurements unique to your eyes. Our contact lens specialists will guide you through a full fitting session.",
  },
  {
    q: "Do you have frames for all face shapes?",
    a: "Absolutely! Our expert dispensing team is trained to find frames that complement your specific face shape — whether it's oval, round, square, heart, or oblong. With 500+ styles, we always find the perfect match.",
  },
  {
    q: "Do you accept walk-in patients?",
    a: "Yes, we welcome walk-in patients, though booking an appointment via WhatsApp is recommended to minimize your waiting time and ensure a dedicated optometrist is available for you.",
  },
  {
    q: "What brands of lenses do you offer?",
    a: "We stock lenses from globally recognized brands including Essilor (Crizal), ZEISS, Hoya, Nikon, and more. Our team will recommend the best lens type based on your prescription and lifestyle.",
  },
];

function FaqItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div
      className={cn(
        "glass rounded-xl overflow-hidden transition-all duration-300",
        isOpen && "border-[--primary]/20 shadow-md shadow-[--primary]/5"
      )}
      style={{ borderColor: isOpen ? "rgba(0,113,227,0.18)" : undefined }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 p-3.5 md:p-5 text-left"
      >
        <span className="font-semibold text-[--text-primary] text-[13px] md:text-[15px] pr-2 md:pr-4">{q}</span>
        <span className={cn(
          "shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-[--primary] text-white" : "bg-[--bg-soft] text-[--text-muted]"
        )}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div className={cn("faq-answer", isOpen && "open")}>
        <p className="px-3.5 pb-3.5 md:px-5 md:pb-5 text-[--text-secondary] leading-relaxed text-xs md:text-sm">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq" bgVariant="soft">
      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before your visit."
      />

      <div className="max-w-3xl mx-auto flex flex-col gap-2.5">
        {FAQS.map((faq, i) => (
          <FaqItem
            key={i}
            q={faq.q}
            a={faq.a}
            isOpen={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
