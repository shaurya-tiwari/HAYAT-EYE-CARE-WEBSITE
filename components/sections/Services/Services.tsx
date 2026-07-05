import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "./services.data";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <SectionWrapper id="services" bgVariant="light">
      <SectionHeading
        title="Premium Eye Care Services"
        subtitle="We provide comprehensive vision care using the latest technology and highest clinical standards."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
