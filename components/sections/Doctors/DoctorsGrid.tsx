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
  // Build a lookup map for faster matching
  const imageMap = new Map<string, { id: string; url: string }>();
  initialImages.forEach((img) => {
    imageMap.set(img.public_id.toLowerCase(), { id: img.public_id, url: img.secure_url });
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto px-1 sm:px-0">
      {DOCTORS.map((doctor) => {
        // Try to match this doctor's ID to a Cloudinary image
        const matched =
          imageMap.get(`doctors/${doctor.id}`.toLowerCase()) ??
          imageMap.get(doctor.id.toLowerCase());

        return (
          <DoctorCard
            key={doctor.id}
            doctor={{ ...doctor, id: matched?.id ?? doctor.id }}
            imageUrl={matched?.url}
          />
        );
      })}
    </div>
  );
}
