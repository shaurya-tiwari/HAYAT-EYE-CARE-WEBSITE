import Image from "next/image";
import { ArrowLeft, Glasses } from "lucide-react";
import Link from "next/link";
import { buildProductWhatsAppLink } from "@/lib/whatsapp";
import { fetchCloudinaryImages, formatPublicIdDirect, CloudinaryImageDirect } from "@/lib/cloudinaryDirect";

function FrameCard({ image }: { image: CloudinaryImageDirect }) {
  const name = formatPublicIdDirect(image.public_id);
  
  return (
    <article className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-[260px] md:h-[320px] lg:h-[360px] w-full bg-slate-100 flex flex-col justify-end">
      {/* Full Cover Image */}
      <Image
        src={image.secure_url}
        alt={name}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[--dark-section-from]/80 via-[--dark-section-from]/15 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />

      {/* Details Container */}
      <div className="relative z-10 m-2 md:m-2.5 p-2.5 md:p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col gap-2 md:gap-2.5">
        <div>
          <p className="text-[10px] font-semibold text-white/60 uppercase tracking-[0.15em] mb-0.5">Premium Frame</p>
          <h3 className="font-bold text-white text-sm leading-tight line-clamp-1">{name}</h3>
        </div>
        
        <a
          href={buildProductWhatsAppLink(name, image.secure_url)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full py-2 rounded-lg bg-white text-[--text-primary] text-xs font-bold hover:bg-[#25D366] hover:text-white transition-colors duration-300"
        >
          Inquire on WhatsApp
        </a>
      </div>
    </article>
  );
}

export default async function FramesPage() {
  // Fetch data directly on the server
  const frames = await fetchCloudinaryImages("FRAMES");

  return (
    <div className="flex flex-col flex-1 bg-[--bg-base]">
      <main className="flex-1 pt-28 pb-20">
        <div className="container-custom px-5 md:px-8">

          <Link href="/#products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[--primary] hover:opacity-70 transition-opacity mb-8">
            <ArrowLeft size={15} /> Back to Home
          </Link>

          <div className="mb-10 flex flex-col md:flex-row md:items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[--bg-soft] flex items-center justify-center text-[--primary] flex-shrink-0 border border-slate-100">
              <Glasses size={24} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[--text-primary] tracking-tight">Spectacle Frames</h1>
              <p className="text-[--text-muted] mt-1 text-sm">
                {frames.length} premium styles available
              </p>
            </div>
          </div>

          {frames.length === 0 ? (
            <div className="py-20 text-center text-[--text-muted]">
              <p className="font-medium text-sm">No frames uploaded yet.</p>
              <p className="text-xs mt-1">Upload images to the FRAMES folder on Cloudinary.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
              {frames.map((img) => <FrameCard key={img.public_id} image={img} />)}
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
