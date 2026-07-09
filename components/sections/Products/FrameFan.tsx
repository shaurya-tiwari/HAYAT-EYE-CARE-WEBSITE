"use client";
import Image from "next/image";

interface FrameFanProps {
  images: { public_id: string; secure_url: string; }[];
}

export default function FrameFan({ images }: FrameFanProps) {
  if (!images?.length) return null;

  // Limit to maximum 7 images as requested
  const slicedImages = images.slice(0, 7);
  // Duplicate the images array to create a seamless infinite loop
  const marqueeImages = [...slicedImages, ...slicedImages];

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden py-8 md:py-12 mt-4 md:mt-8">

      {/* Luxury Fade Edges for that premium clinical look */}
      <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 md:w-40 bg-gradient-to-r from-[#fbfbfa] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 md:w-40 bg-gradient-to-l from-[#fbfbfa] to-transparent z-10 pointer-events-none"></div>

      <style>{`
        @keyframes runway-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .runway-track {
          display: flex;
          width: max-content;
          /* Decreased from 40s to 20s to make it significantly faster */
          animation: runway-scroll 20s linear infinite;
        }
      `}</style>

      <div className="runway-track gap-4 md:gap-8 px-4">
        {marqueeImages.map((img, i) => (
          <div
            key={`${img.public_id}-${i}`}
            className="relative flex flex-col w-[130px] sm:w-[180px] md:w-[240px] h-[200px] sm:h-[260px] md:h-[340px] bg-[#fdfbf7] p-2 md:p-3 rounded-xl md:rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-all shrink-0 cursor-pointer"
          >
            {/* Image Box */}
            <div className="w-full h-[65%] md:h-[70%] relative overflow-hidden rounded-lg bg-white border border-slate-200/60 shadow-inner">
              <Image
                src={img.secure_url}
                alt="Premium Eyewear"
                width={240}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name & Premium Label (Beige Area) */}
            <div className="flex-1 flex flex-col items-center justify-end pb-1 md:pb-2">
              <div className="w-full flex flex-col items-center justify-end h-full">
                <span className="text-[10px] md:text-xs lg:text-sm font-bold text-slate-800 text-center px-1 w-full truncate mb-0.5 md:mb-1.5">
                  {(img.public_id.split('/').pop() || "")
                    .replace(/_[a-z0-9]{6}$/i, "") 
                    .replace(/[-_]/g, " ")
                    .replace(/\b\w/g, c => c.toUpperCase()) || "Premium Frame"}
                </span>
                
                <div className="w-full text-center border-t border-dashed border-slate-200 pt-1 md:pt-1.5">
                  <span className="text-[5.5px] sm:text-[7px] md:text-[8px] tracking-widest uppercase text-slate-400 font-bold opacity-80">
                    Premium Collection
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
