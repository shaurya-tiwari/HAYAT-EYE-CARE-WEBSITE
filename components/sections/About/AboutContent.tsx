import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { fetchCloudinaryImages } from "@/lib/cloudinaryDirect";

const HIGHLIGHTS = [
  "Certified optometrists with 5+ years experience",
  "Complete family eye care — kids to seniors",
  "Same-day prescription service available",
  "Trusted by 5,000+ satisfied patients",
];

export default async function AboutContent() {
  // Fetch an image from the MAIN HOSPITAL folder
  const images = await fetchCloudinaryImages("MAIN HOSPITAL");
  const hospitalImage = images.length > 0 ? images[0].secure_url : null;

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-10 lg:gap-16 items-start md:items-start">
      {/* Text */}
      <div className="space-y-3 md:space-y-5 flex flex-col justify-start pt-2 md:pt-4">
        <p className="text-[--text-secondary] leading-relaxed text-[8px] sm:text-[11px] md:text-[13px] lg:text-[15px] font-medium">
          For over a decade, Hayat Eye Care has been Noorpur's most trusted optical center. We combine advanced technology with expert optometrists to bring premium, comprehensive vision care to your entire family.
        </p>
        <ul className="grid grid-cols-1 gap-1.5 md:gap-3 pt-1 md:pt-3">
          {HIGHLIGHTS.map((h) => (
            <li key={h} className="flex items-start gap-1.5 md:gap-2.5 text-[7.5px] sm:text-[10px] md:text-[12px] lg:text-sm text-[--text-secondary]">
              <CheckCircle2 className="w-2.5 h-2.5 md:w-4 md:h-4 text-[--accent] shrink-0 mt-0.5 md:mt-0" />
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Visual Image Card */}
      <div className="relative w-full h-[180px] sm:h-[250px] md:h-[290px] lg:h-[365px] rounded-2xl overflow-hidden shadow-xl group">
        {hospitalImage ? (
          <Image
            src={hospitalImage}
            alt="Hayat Eye Care Main Hospital"
            fill
            placeholder="blur"
            blurDataURL={hospitalImage.replace("/upload/", "/upload/w_10,e_blur:1000,f_auto,q_1/")}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">
            No hospital image found
          </div>
        )}

        {/* Seamless Bottom Gradient Blur */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2 md:h-[40%] pointer-events-none transition-opacity duration-500"
          style={{
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            maskImage: "linear-gradient(to top, black 20%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 20%, transparent 100%)",
          }}
        />

        {/* Text over gradient */}
        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end">
          <div className="relative z-10">
            <h3 className="text-white font-bold text-[10px] sm:text-xs md:text-sm leading-tight">
              Hayat Eye Care
            </h3>
            <p className="text-white/80 text-[7px] sm:text-[9px] md:text-[11px] mt-0.5 leading-tight">
              True vision, trusted care in Noorpur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
