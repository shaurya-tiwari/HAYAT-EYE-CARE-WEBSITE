import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "./services.data";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <SectionWrapper id="services" bgVariant="light">
      <SectionHeading
        title="Premium Eye Care Services"
        subtitle="Comprehensive vision care using the latest technology and highest clinical standards."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-5 px-1 sm:px-0">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
