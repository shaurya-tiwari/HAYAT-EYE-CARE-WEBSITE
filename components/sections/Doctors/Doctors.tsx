import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import DoctorsGrid from "./DoctorsGrid";

/**
 * Doctors section shell — dark gradient background with glassmorphism cards.
 */
export default function Doctors() {
  return (
    <SectionWrapper id="doctors" bgVariant="dark">
      <SectionHeading
        title="Meet Our Specialists"
        subtitle="Highly experienced optometrists dedicated to providing world-class eye care."
        light
      />

      <DoctorsGrid />
    </SectionWrapper>
  );
}
