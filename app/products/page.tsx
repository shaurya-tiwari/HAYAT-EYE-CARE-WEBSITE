import { listFolderImages, type CloudinaryImage } from "@/lib/cloudinary";
import { ImageOff, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import ProductCard from "@/components/sections/Products/ProductCard";

// ISR: Rebuild at most once per hour.
// 100 visitors in 1 hour = only 1 Cloudinary API call (rest get cached HTML).
export const revalidate = 3600;

export const metadata = {
  title: "Our Eyewear Collection | Hayat Eye Care",
  description:
    "Explore our collection of high-quality spectacle frames and contact lenses. Professional eye care solutions tailored to your style and vision needs.",
};

function EmptyState({ folder }: { folder: string }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 gap-4 text-[--text-muted]">
      <ImageOff size={40} strokeWidth={1.2} />
      <p className="font-medium">No items in &ldquo;{folder}&rdquo; yet.</p>
      <p className="text-sm">Upload images to this folder on Cloudinary — they appear here automatically.</p>
    </div>
  );
}

function ProductGrid({ items, categoryLabel, emptyFolder }: {
  items: CloudinaryImage[];
  categoryLabel: string;
  emptyFolder: string;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.length === 0 ? (
        <EmptyState folder={emptyFolder} />
      ) : (
        items.map((item) => (
          <ProductCard
            key={item.public_id}
            public_id={item.public_id}
            display_name={item.display_name}
            categoryLabel={categoryLabel}
          />
        ))
      )}
    </div>
  );
}

export default async function ProductsPage() {
  // Both fetches run in parallel — minimal wait time
  const [frames, lenses] = await Promise.all([
    listFolderImages("FRAMES"),
    listFolderImages("LENSES"),
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-28 pb-24">
        <div className="container-custom px-6">

          {/* Page Header */}
          <div className="mb-14">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[--primary] hover:opacity-70 transition-opacity mb-8"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-[--text-primary]">
              Our Collection
            </h1>
            <p className="text-[--text-secondary] mt-3 max-w-xl text-lg">
              Premium frames & contact lenses — fetched live from our store catalog.
            </p>
          </div>

          {/* Spectacle Frames */}
          <section className="mb-20">
            <h2 id="frames" className="text-2xl font-bold text-[--text-primary] border-b border-gray-100 pb-5 mb-8">
              Spectacle Frames
              <span className="ml-3 text-sm font-normal text-[--text-muted]">
                ({frames.length} styles)
              </span>
            </h2>
            <ProductGrid items={frames} categoryLabel="Premium Frame" emptyFolder="FRAMES" />
          </section>

          {/* Contact Lenses */}
          <section>
            <h2 id="lenses" className="text-2xl font-bold text-[--text-primary] border-b border-gray-100 pb-5 mb-8">
              Contact Lenses
              <span className="ml-3 text-sm font-normal text-[--text-muted]">
                ({lenses.length} styles)
              </span>
            </h2>
            <ProductGrid items={lenses} categoryLabel="Contact Lens" emptyFolder="LENSES" />
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
