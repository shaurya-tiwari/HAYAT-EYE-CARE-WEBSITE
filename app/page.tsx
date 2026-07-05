import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { Brands } from "@/components/sections/Brands";
import { Doctors } from "@/components/sections/Doctors";
import { VisionMission } from "@/components/sections/VisionMission";
import { Achievements } from "@/components/sections/Achievements";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

/**
 * Homepage — Full site composition.
 * Section order: Hero → Trust → About → Services → Products →
 *                Brands → Doctors → Vision/Mission → Achievements →
 *                Testimonials → FAQ → Contact
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <Products />
      <Brands />
      <Doctors />
      <VisionMission />
      <Achievements />
      <Testimonials />
      <FAQ />
      <Gallery />
      <Contact />
    </>
  );
}
