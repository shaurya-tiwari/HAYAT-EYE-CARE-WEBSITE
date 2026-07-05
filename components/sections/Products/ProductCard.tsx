import { CldImage } from "next-cloudinary";
import { formatPublicId } from "@/lib/cloudinary";

interface ProductCardProps {
  public_id: string;
  display_name?: string;
  categoryLabel: string;
}

/**
 * Shared product card used on homepage preview AND /products page.
 * Pulls display name from Cloudinary public_id using shared formatter.
 */
export default function ProductCard({ public_id, display_name, categoryLabel }: ProductCardProps) {
  const name = display_name ?? formatPublicId(public_id);

  return (
    <article className="glass group rounded-3xl overflow-hidden p-2 hover:-translate-y-2 transition-transform duration-300">
      <div className="relative h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-[--bg-soft] to-white">
        <CldImage
          src={public_id}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className="p-5 flex flex-col items-center text-center gap-1">
        <p className="text-[11px] font-bold text-[--primary] uppercase tracking-widest">
          {categoryLabel}
        </p>
        <h3 className="font-bold text-[--text-primary] text-base mt-0.5">{name}</h3>
      </div>
    </article>
  );
}
