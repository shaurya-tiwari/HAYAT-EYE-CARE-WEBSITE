"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { ImageOff } from "lucide-react";
import { useEffect, useState } from "react";
import Lightbox from "@/components/ui/Lightbox";

interface GalleryImage {
  public_id: string;
  secure_url: string;
}

export default function Gallery({ initialImages = [] }: { initialImages?: GalleryImage[] }) {
  const [images, setImages] = useState<GalleryImage[]>(initialImages);
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  // Sync images if prop changes
  useEffect(() => {
    setImages(initialImages);
  }, [initialImages]);

  return (
    <SectionWrapper id="gallery" bgVariant="default">
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
            <div className="max-h-[300px] md:max-h-[500px] overflow-y-auto custom-scrollbar pr-1.5 md:pr-3 pb-6">
              <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-2 md:gap-4 space-y-2 md:space-y-4">
                {images.map((item, idx) => {
                  const base = item.public_id.split("/").pop() ?? item.public_id;
                  const alt = base.replace(/_[a-z0-9]{6}$/, "").replace(/[-_]/g, " ");
                  const optimizedUrl = item.secure_url.replace("/upload/", "/upload/f_auto,q_auto,w_600/");
                  
                  // Staggered animation delay for waterfall effect
                  const animDelay = (idx % 12) * 0.04;

                  return (
                    <div
                      key={item.public_id}
                      className="break-inside-avoid relative rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-1 animate-fade-in-up bg-slate-100"
                      style={{ animationDelay: `${animDelay}s` }}
                      onClick={() => setActiveImage({ src: item.secure_url.replace("/upload/", "/upload/f_auto,q_auto,w_1200/"), alt })}
                    >
                      <div className="relative aspect-auto">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={optimizedUrl}
                          alt={alt}
                          className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                          loading="lazy"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[--dark-section-from]/85 via-[--dark-section-from]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                          <div className="absolute bottom-0 left-0 right-0 p-2.5 md:p-5 flex flex-col md:flex-row md:items-end justify-between translate-y-3 group-hover:translate-y-0 transition-transform duration-400 ease-out gap-1">
                            <div className="pr-1 md:pr-3">
                              <p className="text-[--accent-light] font-bold text-[8px] md:text-[10px] uppercase tracking-[0.2em] mb-0.5 md:mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-75">Gallery</p>
                              <h3 className="text-white font-bold text-[10px] md:text-sm lg:text-base tracking-tight leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-100 capitalize line-clamp-1 md:line-clamp-2">{alt}</h3>
                            </div>
                            
                            <div className="hidden md:flex w-9 h-9 shrink-0 rounded-full bg-white/15 backdrop-blur-md items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-400 delay-150 border border-white/20 group-hover:hover:bg-white group-hover:hover:text-[--dark-section-from]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Bottom Fade/Blur Overlay */}
            <div 
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 z-10 rounded-b-xl backdrop-blur-md bg-gradient-to-t from-[--bg-base] via-[--bg-base]/80 to-transparent"
              style={{
                WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
                maskImage: 'linear-gradient(to top, black 40%, transparent 100%)'
              }}
            />
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
  );
}
