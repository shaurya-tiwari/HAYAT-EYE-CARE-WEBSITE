"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { ImageOff, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Lightbox from "@/components/ui/Lightbox";

interface GalleryImage {
  public_id: string;
  secure_url: string;
}

export default function Gallery({ initialImages = [] }: { initialImages?: GalleryImage[] }) {
  const [images, setImages] = useState<GalleryImage[]>(initialImages);
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    setImages(initialImages);
  }, [initialImages]);

  return (
    <div className="relative">
      <SectionWrapper id="gallery" bgVariant="default" className="!pb-0">
      <SectionHeading
        title="Our Gallery"
        subtitle="A glimpse into Hayat Eye Care — our facility, events, and happy smiles."
      />

      <div>
        {images.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3 text-[--text-muted]">
            <ImageOff size={36} strokeWidth={1.2} />
            <p className="font-medium text-sm">Gallery is currently empty.</p>
            <p className="text-xs">Upload images to the &ldquo;GALLERY&rdquo; folder on Cloudinary.</p>
          </div>
        ) : (
          <div className="relative w-full">
            {/* contain:strict isolates layout+paint to this box — browser skips global reflow on scroll */}
            <div
              className="h-[70dvh] md:h-[650px] overflow-y-auto custom-scrollbar pr-1.5 md:pr-3 pb-6"
              style={{ contain: "strict" }}
            >
              <div className="columns-3 sm:columns-4 md:columns-4 lg:columns-5 gap-2 md:gap-4 space-y-2 md:space-y-4">
                {images.map((item, idx) => {
                  const base = item.public_id.split("/").pop() ?? item.public_id;
                  const alt = base.replace(/_[a-z0-9]{6}$/, "").replace(/[-_]/g, " ");
                  const optimizedUrl = item.secure_url.replace("/upload/", "/upload/f_auto,q_auto,w_200/");

                  // Only animate first 8 cards (above fold) — rest appear instantly, no jank
                  const shouldAnimate = idx < 8;

                  return (
                    <div
                      key={item.public_id}
                      // ✅ transition-[transform,opacity] = GPU-only, no layout paint
                      // ✅ shadow-sm → shadow-md (lighter shadow = less paint cost on hover)
                      // ✅ will-change: transform hints GPU to promote card to its own layer
                      className={`break-inside-avoid relative rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-[transform,opacity] duration-300 hover:-translate-y-1 bg-slate-100${shouldAnimate ? " animate-fade-in-up" : ""}`}
                      style={{
                        willChange: "transform",
                        ...(shouldAnimate && { animationDelay: `${idx * 0.04}s` }),
                      }}
                      onClick={() =>
                        setActiveImage({
                          src: item.secure_url.replace("/upload/", "/upload/f_auto,q_auto,w_1200/"),
                          alt,
                        })
                      }
                    >
                      <div className="relative aspect-auto">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={optimizedUrl}
                          alt={alt}
                          width={400}
                          height={400}
                          // ✅ transition-transform only (GPU) — duration trimmed 700→500ms
                          // ✅ decoding=async frees main thread during image decode
                          className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                          loading="lazy"
                          decoding="async"
                        />

                        {/* Hover Overlay — opacity transition is GPU-only ✅ */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[--dark-section-from]/85 via-[--dark-section-from]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-2.5 md:p-5 flex flex-col md:flex-row md:items-end justify-between translate-y-3 group-hover:translate-y-0 transition-transform duration-300 ease-out gap-1">
                            <div className="pr-1 md:pr-3">
                              <p className="text-[--accent-light] font-bold text-[8px] md:text-[10px] uppercase tracking-[0.2em] mb-0.5 md:mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                Gallery
                              </p>
                              <h3 className="text-white font-bold text-[10px] md:text-sm lg:text-base tracking-tight leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 capitalize line-clamp-1 md:line-clamp-2">
                                {alt}
                              </h3>
                            </div>

                            {/* ✅ Removed backdrop-blur-md from expand button — not worth the paint cost */}
                            <div className="hidden md:flex w-9 h-9 shrink-0 rounded-full bg-white/20 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-[opacity,background-color] duration-300 delay-150 border border-white/20 hover:bg-white hover:text-[--dark-section-from]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}
      </div>

      {activeImage && (
        <Lightbox
          isOpen={!!activeImage}
          src={activeImage.src}
          alt={activeImage.alt}
          onClose={() => setActiveImage(null)}
        />
      )}
      </SectionWrapper>

      {/* ✅ Full-width Bottom fade */}
      {images.length > 0 && (
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 md:h-48 z-10 bg-gradient-to-t from-[--bg-base] via-[--bg-base]/60 to-transparent flex flex-col items-center justify-end pb-4 md:pb-6">
          <p className="text-[9px] md:text-[11px] font-semibold text-black uppercase tracking-[0.2em] flex items-center gap-1.5 bg-[#8A9A5B] px-3 md:px-4 py-1.5 rounded-full border border-[#72804A] shadow-md">
            Scroll for more <ChevronDown size={14} className="opacity-70" />
          </p>
        </div>
      )}
    </div>
  );
}
