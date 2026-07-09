import Image from "next/image";

interface FrameFanProps {
  images: { public_id: string; secure_url: string; }[];
}

export default function FrameFan({ images }: FrameFanProps) {
  if (!images?.length) return null;

  const slicedImages = images.slice(0, 14);
  const trueCenter = (slicedImages.length - 1) / 2;

  return (
    <div className="relative w-full h-[280px] sm:h-[420px] md:h-[520px] flex justify-center items-end overflow-hidden">

      <div
        className="relative w-full flex justify-center translate-y-4 sm:translate-y-16 md:translate-y-24"
        style={{ animation: "spin 35s linear infinite" }}
      >
        {slicedImages.map((img, i) => {
          const offset = i - trueCenter;

          return (
            <div
              key={img.public_id}
              className={`fan-card-${i} absolute bottom-0 w-[92px] sm:w-32 md:w-44 h-[210px] sm:h-[280px] md:h-[380px] bg-[#fdfbf7] p-1 sm:p-2 md:p-3 rounded-md md:rounded-xl border border-black/5 flex flex-col`}
              style={{
                left: "50%",
                transformOrigin: "bottom center",
                zIndex: 20,
              }}
            >
              <style>{`
                .fan-card-${i} {
                  transform: translateX(-50%) rotate(${offset * 30}deg) translateY(calc(-12vw - 24px));
                }
                @media (min-width: 768px) {
                  .fan-card-${i} {
                    transform: translateX(-50%) rotate(${offset * 26}deg) translateY(calc(-12vw - 30px));
                  }
                }
              `}</style>

              {/* Image Box */}
              <div className="w-full h-[55%] md:h-[60%] relative overflow-hidden rounded-md bg-white border border-slate-200/60 shadow-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.secure_url}
                  alt="Premium Eyewear"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Premium Label */}
              <div className="flex-1 flex flex-col justify-end pb-2 md:pb-4">
                <div className="w-full text-center border-t border-dashed border-slate-200 pt-2 md:pt-3">
                  <span className="text-[6px] sm:text-[7px] md:text-[10px] tracking-widest uppercase text-slate-400 font-bold opacity-70">
                    Premium
                  </span>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
