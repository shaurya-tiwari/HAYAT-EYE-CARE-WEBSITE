import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import FrameMarquee from "./FrameMarquee";
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
      <SectionWrapper id="products" bgVariant="teal" className="pt-6 md:pt-12">
        <SectionHeading
          title="Premium Eyewear Collection"
          className="!mb-4 md:!mb-6"
        />

        <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 md:gap-3 max-w-4xl mx-auto px-2 md:px-4 mb-6 md:mb-8">
          {[
            "Blue Cut Lens",
            "Anti Reflection (AR) Lens",
            "Photochromic (Auto Dark) Lens",
            "High Index Thin Lens",
            "Polycarbonate Lens",
            "Kids Lens",
            "Driving Lens",
            "Tinted Lens"
          ].map((lensType, idx) => (
            <div key={idx} className="px-2.5 py-1 md:px-4 md:py-2 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/60 shadow-sm text-[9px] sm:text-[10px] md:text-sm font-medium text-[--text-primary]">
              {lensType}
            </div>
          ))}
        </div>

        {/* Scrolling frame images */}
        {frames.length > 0 && (
          <div className="mt-6">
            <p className="text-center text-[10px] font-bold tracking-[0.2em] uppercase text-[--primary] mb-4">
              Premium Frames
            </p>
            <FrameMarquee images={frames} />
          </div>
        )}
      </SectionWrapper>
    </section>
  );
}
