"use client";

interface MarqueeImage {
  public_id: string;
  secure_url: string;
}

interface FrameFanProps {
  images: MarqueeImage[];
}

/**
 * Cards anchored at a single bottom point, fanning out.
 */
export default function FrameFan({ images }: FrameFanProps) {
  if (images.length === 0) return null;

  // No artificial duplicates. We use up to 14 real images from Cloudinary.
  // As the user uploads more images, the fan will automatically expand to fill the circle.
  const slicedImages = images.slice(0, 14);
  const trueCenter = (slicedImages.length - 1) / 2;

  return (
    // Reduced container height to 280px on mobile and removed top margin to pull it closer to the heading
    <div className="relative w-full h-[280px] sm:h-[420px] md:h-[520px] flex justify-center items-end overflow-hidden mt-0 md:my-8">

      {/* 
        The translation wrapper keeps the anchor positioned.
        It is separated from the spinning animation to prevent transform conflicts.
      */}
      <div className="relative w-full h-0 flex justify-center items-center translate-y-4 sm:translate-y-16 md:translate-y-24">
        
        {/* 
          The spinning container.
          Uses will-change-transform and backface-visibility for smooth hardware-accelerated rendering.
        */}
        <div
          className="w-full h-0 flex justify-center items-center will-change-transform [backface-visibility:hidden]"
          style={{ animation: "spin 35s linear infinite" }}
        >
          {slicedImages.map((img, i) => {
            // Perfectly balanced offset so they always spread symmetrically from the center
            const offset = i - trueCenter;

            return (
              <div
                key={`${img.public_id}-${i}`}
                // Applied GPU acceleration and responsive transforms via CSS variables
                className={`absolute bottom-0 w-[92px] h-[210px] sm:w-32 sm:h-[280px] md:w-44 md:h-[380px] bg-[#fdfbf7] p-1 sm:p-2 md:p-3 rounded-[6px] sm:rounded-[8px] md:rounded-[12px] flex flex-col items-center will-change-transform [backface-visibility:hidden] [transform:translateX(-50%)_rotate(var(--rot-mob))_translateY(calc(-12vw-24px))] md:[transform:translateX(-50%)_rotate(var(--rot-desk))_translateY(calc(-12vw-30px))]`}
                style={{
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 8px 30px -10px rgba(0, 0, 0, 0.2)",
                  // Force perfectly centered position
                  left: "50%",
                  // Exactly anchor at bottom center
                  transformOrigin: "bottom center",
                  // Basic zIndex strategy
                  zIndex: 20,
                  // CSS variables for responsive rotation
                  "--rot-mob": `${offset * 30}deg`,
                  "--rot-desk": `${offset * 26}deg`,
                } as React.CSSProperties}
              >
                {/* Inner Image Container (Top Box) */}
                <div className="w-full h-[55%] md:h-[60%] relative overflow-hidden rounded-[6px] md:rounded-[8px] bg-white border border-slate-200/60 shadow-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.secure_url}
                    alt="Premium Eyewear"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Bottom Empty Space */}
                <div className="flex-1 w-full flex flex-col items-center justify-end pb-2 md:pb-4">
                  <div className="w-full flex items-center justify-center border-t border-dashed border-slate-200 pt-2 md:pt-3">
                    {/* Made the text extremely small on mobile (6px) per user request */}
                    <span className="text-[5px] sm:text-[7px] md:text-[10px] tracking-[0.2em] uppercase text-slate-400 font-bold opacity-70">
                      Premium
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
