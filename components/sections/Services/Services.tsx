import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "./services.data";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <SectionWrapper id="services" bgVariant="light" className="relative overflow-hidden">
      {/* Light Sky Blue Blob behind the first card */}
      <div className="absolute top-[20%] -left-10 md:left-[10%] xl:left-[15%] w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[450px] md:h-[450px] bg-teal-400/15 rounded-full blur-[80px] md:blur-[100px] pointer-events-none -z-0" />

      <div className="relative z-10">
        <SectionHeading
          title="Premium Eye Care Services"
          subtitle="Comprehensive vision care using the latest technology and highest clinical standards."
        />

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-2 sm:px-0 max-w-5xl mx-auto">
        {SERVICES.map((service, index) => (
          <div key={service.id} className="w-[calc(33.33%-8px)] sm:w-[calc(25%-12px)] md:w-[calc(20%-16px)] max-w-[130px] md:max-w-[170px] lg:max-w-[190px] flex-grow">
            <ServiceCard
              title={service.title}
              icon={service.icon}
            />
          </div>
        ))}
      </div>
      </div>
    </SectionWrapper>
  );
}
