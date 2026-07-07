import { DOCTORS } from "./doctors.data";
import DoctorCard from "./DoctorCard";
import type { CloudinaryImageDirect } from "@/lib/cloudinaryDirect";

interface DoctorsGridProps {
  initialImages: CloudinaryImageDirect[];
}

/**
 * DoctorsGrid — Server Component.
 * Receives images from parent and maps them to doctors.
 */
export default function DoctorsGrid({ initialImages = [] }: DoctorsGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4 md:gap-6 max-w-7xl mx-auto px-1 sm:px-4 md:px-0 py-12 md:py-20">
      {DOCTORS.map((doctor, index) => {
        // Try to match this doctor's ID to a Cloudinary image (fuzzy match to ignore suffixes like _vlsy2j)
        const matched = initialImages.find((img) => {
          const pubId = img.public_id.toLowerCase();
          const docId = doctor.id.toLowerCase();
          
          // Remove spaces, dots, underscores, hyphens for a clean comparison
          const cleanPubId = pubId.replace(/[^a-z0-9]/g, ""); 
          const cleanDocId = docId.replace(/[^a-z0-9]/g, "");
          const cleanDocName = doctor.name.toLowerCase().replace(/[^a-z0-9]/g, "");
          
          if (docId === "abdul_mannan" && cleanPubId.includes("abdulmanan")) return true;

          return (
            cleanPubId.includes(cleanDocId) ||
            cleanPubId.includes(cleanDocName) ||
            pubId.includes(docId)
          );
        });

        // Zig-Zag Wave Logic:
        // Even cards (0, 2, 4) are pushed UP.
        // Odd cards (1, 3) are pushed DOWN.
        const isEven = index % 2 === 0;
        const waveClass = isEven 
          ? "-translate-y-4 md:-translate-y-8" 
          : "translate-y-4 md:translate-y-8";

        return (
          <div
            key={doctor.id}
            className={`col-span-1 ${waveClass} transition-transform duration-700 hover:z-10`}
            style={{
              animation: `fade-in-up 0.8s ease-out forwards ${index * 0.05}s`,
              opacity: 0, // Starts hidden for the animation
            }}
          >
            <DoctorCard
              doctor={{ ...doctor, id: matched?.public_id ?? doctor.id }}
              imageUrl={matched?.secure_url}
            />
          </div>
        );
      })}
    </div>
  );
}
