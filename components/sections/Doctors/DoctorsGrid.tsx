import { DOCTORS } from "./doctors.data";
import DoctorCard from "./DoctorCard";
import { listFolderImages } from "@/lib/cloudinary";

/**
 * True auto-fetch: lists ALL images in the "doctors" Cloudinary folder.
 * Maps them to doctors by filename match (e.g. "dr jishan" ↔ doctor.id).
 * Upload/replace a photo in Cloudinary → site updates automatically.
 */
export default async function DoctorsGrid() {
  // Fetch all images from the DOCTORS folder
  const folderImages = await listFolderImages("DOCTORS");

  // Build a lookup map: public_id → public_id (for easy matching)
  const imageMap = new Map(
    folderImages.map((img) => [img.public_id.toLowerCase(), img.public_id])
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {DOCTORS.map((doctor) => {
        // Try to match this doctor's ID to a Cloudinary image
        // Checks both "doctors/dr jishan" and the hardcoded doctor.id
        const matchedId =
          imageMap.get(`doctors/${doctor.id}`.toLowerCase()) ??
          imageMap.get(doctor.id.toLowerCase()) ??
          doctor.id; // fallback to whatever is in data file

        return (
          <DoctorCard key={doctor.id} doctor={{ ...doctor, id: matchedId }} />
        );
      })}
    </div>
  );
}
