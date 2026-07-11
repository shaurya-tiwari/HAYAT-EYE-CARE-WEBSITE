import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import FrameFan from "./FrameFan";
import { fetchCloudinaryImages } from "@/lib/cloudinaryDirect";

import Image from "next/image";

/**
 * Homepage Products section — marquee only, no CTA cards.
 * Fetches frame images server-side for performance.
 */
export default async function Products() {
  const frames = await fetchCloudinaryImages("FRAMES");

  return (
    <section>
      <SectionWrapper id="products" bgVariant="default" className="pt-6 md:pt-12 !pb-0 md:!pb-0">
        <SectionHeading
          title="Premium Eyewear Collection"
          className="!mb-4 md:!mb-6"
        />

        <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 md:gap-3 max-w-4xl mx-auto px-2 md:px-4 mb-0 md:mb-0">
          {[
            "Blue Cut Lens",
            "Anti Reflection (AR) Lens",
            "Photochromic (Auto Dark) Lens",
            "High Index Thin Lens",
            "Polycarbonate Lens",
            "Driving Lens",
            "Tinted Lens"
          ].map((lensType, idx) => (
            <div key={idx} className="px-2.5 py-1 md:px-4 md:py-2 rounded-full bg-white border border-slate-200/80 text-[9px] sm:text-[10px] md:text-sm font-medium text-[--text-primary]">
              {lensType}
            </div>
          ))}
        </div>

      </SectionWrapper>

      {/* Scrolling frame images (Full Bleed - No margins so it doesn't clip) */}
      {frames.length > 0 && (
        <div className="w-full relative bg-teal-50/10">
          <FrameFan images={frames} />
        </div>
      )}
    </section>
  );
}
