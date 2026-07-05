import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import AboutContent from "./AboutContent";
import AboutHighlightStrip from "./AboutHighlightStrip";

export default function About() {
  return (
    <SectionWrapper id="about" bgVariant="soft">
      <SectionHeading
        title="About Hayat Eye Care"
        subtitle="A decade of trusted eye care, combining modern technology with compassionate service."
        centered={false}
      />
      <AboutContent />
      <AboutHighlightStrip />
    </SectionWrapper>
  );
}
