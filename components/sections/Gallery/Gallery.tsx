import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { listFolderImages } from "@/lib/cloudinary";
import { CldImage } from "next-cloudinary";
import { ImageOff } from "lucide-react";

export default async function Gallery() {
  const images = await listFolderImages("GALLERY");

  return (
    <SectionWrapper id="gallery" bgVariant="light">
      <SectionHeading
        title="Our Gallery"
        subtitle="A glimpse into Hayat Eye Care — our facility, events, and happy smiles."
      />

      <div className="mt-12">
        {images.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4 text-[--text-muted]">
            <ImageOff size={40} strokeWidth={1.2} />
            <p className="font-medium">Gallery is currently empty.</p>
            <p className="text-sm">Upload images to the &ldquo;GALLERY&rdquo; folder on Cloudinary.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((item) => {
              const base = item.public_id.split("/").pop() ?? item.public_id;
              const alt = base.replace(/_[a-z0-9]{6}$/, "").replace(/[-_]/g, " ");

              return (
                <div key={item.public_id} className="break-inside-avoid relative rounded-3xl overflow-hidden group cursor-pointer glass p-2 hover:-translate-y-1 transition-transform duration-300">
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[--bg-soft] to-white">
                    <CldImage
                      src={item.public_id}
                      alt={alt}
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <p className="text-white font-medium text-sm capitalize">{alt}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
