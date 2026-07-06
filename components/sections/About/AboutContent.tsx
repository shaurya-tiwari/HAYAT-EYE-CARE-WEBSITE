import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { fetchCloudinaryImages } from "@/lib/cloudinaryDirect";

const HIGHLIGHTS = [
  "State-of-the-art diagnostic equipment",
  "Certified optometrists with 5+ years experience",
  "500+ premium frame brands in stock",
  "Complete family eye care — kids to seniors",
  "Same-day prescription service available",
  "Trusted by 5,000+ satisfied patients",
];

export default async function AboutContent() {
  // Fetch an image from the MAIN HOSPITAL folder
  const images = await fetchCloudinaryImages("MAIN HOSPITAL");
  const hospitalImage = images.length > 0 ? images[0].secure_url : null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Text */}
      <div className="space-y-5">
        <p className="text-[--text-secondary] leading-relaxed text-[15px]">
          Hayat Eye Care was founded with a simple mission: bring premium eye care to every family, 
          regardless of budget. Over the past decade, we have served thousands of patients with 
          comprehensive vision testing, expert frame fitting, and advanced contact lens solutions.
        </p>
        <p className="text-[--text-secondary] leading-relaxed text-[15px]">
          Our team of certified optometrists uses the latest diagnostic technology to ensure 
          the most accurate prescriptions, while our curated collection of frames from over 
          20 premium brands ensures you always find the perfect style.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
          {HIGHLIGHTS.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-[--text-secondary]">
              <CheckCircle2 size={16} className="text-[--accent] shrink-0 mt-0.5" />
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Visual Image Card */}
      <div className="relative w-full aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl group">
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
        
        {/* Glass Overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5 pt-14 bg-gradient-to-t from-[--dark-section-from]/90 via-[--dark-section-from]/50 to-transparent">
          <div className="relative z-10 backdrop-blur-sm border border-white/10 bg-white/10 p-4 rounded-xl">
            <h3 className="text-white font-bold text-lg">
              Hayat Eye Care
            </h3>
            <p className="text-white/60 text-sm mt-0.5">
              True vision, trusted care in Noorpur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
