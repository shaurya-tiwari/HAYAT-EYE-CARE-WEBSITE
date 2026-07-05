import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight, Glasses, Eye } from "lucide-react";
import Link from "next/link";

/**
 * Homepage Products section.
 * A premium CTA that sends the user to /products where
 * all frames & lenses are auto-fetched from Cloudinary.
 */
export default function Products() {
  return (
    <SectionWrapper id="products" bgVariant="soft">
      <SectionHeading
        title="Premium Eyewear Collection"
        subtitle="Discover our wide range of stylish frames and advanced contact lenses — curated for every face and budget."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mt-12">
        {/* Frames CTA */}
        <Link href="/products" className="group">
          <div className="glass rounded-3xl p-8 flex flex-col items-center gap-5 text-center
                          border-2 border-transparent hover:border-[--primary]/30
                          hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[--primary-muted] flex items-center justify-center text-[--primary]
                            group-hover:bg-[--primary] group-hover:text-white transition-colors duration-300">
              <Glasses size={30} />
            </div>
            <div>
              <h3 className="font-bold text-xl text-[--text-primary]">Spectacle Frames</h3>
              <p className="text-[--text-muted] text-sm mt-1">500+ premium styles</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[--primary]
                             group-hover:gap-3 transition-all duration-300">
              Browse Frames <ArrowRight size={15} />
            </span>
          </div>
        </Link>

        {/* Lenses CTA */}
        <Link href="/products#lenses" className="group">
          <div className="glass rounded-3xl p-8 flex flex-col items-center gap-5 text-center
                          border-2 border-transparent hover:border-[--accent]/30
                          hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[--accent-muted] flex items-center justify-center text-[--accent]
                            group-hover:bg-[--accent] group-hover:text-white transition-colors duration-300">
              <Eye size={30} />
            </div>
            <div>
              <h3 className="font-bold text-xl text-[--text-primary]">Contact Lenses</h3>
              <p className="text-[--text-muted] text-sm mt-1">Daily, monthly & coloured</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[--accent]
                             group-hover:gap-3 transition-all duration-300">
              Browse Lenses <ArrowRight size={15} />
            </span>
          </div>
        </Link>
      </div>
    </SectionWrapper>
  );
}
