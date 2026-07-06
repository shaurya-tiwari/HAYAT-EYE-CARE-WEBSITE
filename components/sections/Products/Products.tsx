import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import FrameMarquee from "./FrameMarquee";
import { fetchCloudinaryImages } from "@/lib/cloudinaryDirect";

/**
 * Homepage Products section — marquee only, no CTA cards.
 * Fetches frame images server-side for performance.
 */
export default async function Products() {
  const frames = await fetchCloudinaryImages("FRAMES");

  return (
    <SectionWrapper id="products" bgVariant="teal">
      <SectionHeading
        title="Premium Eyewear Collection"
        subtitle="Explore our curated collection of premium spectacle frames — from classic to contemporary styles."
      />

      {/* Scrolling frame images */}
      {frames.length > 0 && (
        <div className="mt-6">
          <p className="text-center text-[10px] font-bold tracking-[0.2em] uppercase text-[--primary] mb-4">
            From Our Collection
          </p>
          <FrameMarquee images={frames} />
        </div>
      )}
    </SectionWrapper>
  );
}
