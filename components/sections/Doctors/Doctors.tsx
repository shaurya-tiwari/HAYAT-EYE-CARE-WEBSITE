import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import DoctorsGrid from "./DoctorsGrid";
import { fetchCloudinaryImages } from "@/lib/cloudinaryDirect";

/**
 * Doctors section shell — dark gradient background with glassmorphism cards.
 */
export default async function Doctors() {
  const doctorImages = await fetchCloudinaryImages("DOCTORS");

  return (
    <SectionWrapper id="doctors" bgVariant="default">
      <SectionHeading
        title="Meet Our Specialists"
        subtitle="Highly experienced optometrists dedicated to providing world-class eye care."
      />

      <DoctorsGrid initialImages={doctorImages} />
    </SectionWrapper>
  );
}
