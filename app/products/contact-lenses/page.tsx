import Image from "next/image";
import { ArrowLeft, Eye } from "lucide-react";
import Link from "next/link";
import { buildProductWhatsAppLink } from "@/lib/whatsapp";
import { fetchCloudinaryImages, formatPublicIdDirect, CloudinaryImageDirect } from "@/lib/cloudinaryDirect";

function LensCard({ image }: { image: CloudinaryImageDirect }) {
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
          <p className="text-[10px] font-semibold text-white/60 uppercase tracking-[0.15em] mb-0.5">Premium Lens</p>
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

export default async function ContactLensesPage() {
  // Fetch data directly on the server
  const frames = await fetchCloudinaryImages("CONTACT_LENSES");

  return (
    <div className="relative flex flex-col flex-1 bg-[--bg-base] min-h-screen overflow-hidden">
      {/* Background Abstract Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[--accent]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[--accent]/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-[--accent]/10 blur-[100px] pointer-events-none" />

      <main className="relative flex-1 pt-28 pb-20 z-10">
        <div className="container-custom px-5 md:px-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 relative">
            <div>
              <Link href="/products" className="inline-flex items-center gap-2 text-[--text-muted] hover:text-[--text-primary] text-sm font-bold uppercase tracking-widest mb-6 transition-colors">
                <ArrowLeft size={16} />
                Back to Products
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[--text-primary] tracking-tight">Contact Lenses</h1>
              <p className="text-[--text-muted] mt-3 text-lg font-medium">
                {frames.length} contact lenses available
              </p>
            </div>
          </div>

          {frames.length === 0 ? (
            <div className="py-20 text-center text-[--text-muted]">
              <p className="font-medium text-sm">No contact lenses uploaded yet.</p>
              <p className="text-xs mt-1">Upload images to the CONTACT_LENSES folder on Cloudinary.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
              {frames.map((img) => <LensCard key={img.public_id} image={img} />)}
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
