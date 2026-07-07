import { Hero } from "@/components/sections/Hero";
import { Brands } from "@/components/sections/Brands";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { About } from "@/components/sections/About";
import { Doctors } from "@/components/sections/Doctors";
import { Services } from "@/components/sections/Services";
import { VisionMission } from "@/components/sections/VisionMission";
import { Gallery } from "@/components/sections/Gallery";
import { Achievements } from "@/components/sections/Achievements";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Products } from "@/components/sections/Products";
import Image from "next/image";
import Glass from "@/components/glass-animation/Glass";
// force reload

import { fetchCloudinaryImages } from "@/lib/cloudinaryDirect";

/**
 * Homepage — Full site composition.
 * Section order:
 *   Hero → Brands → TrustStrip → About → Doctors → Services →
 *   VisionMission → Gallery → Achievements → Products → FAQ → Contact
 *
 * Removed: Testimonials
 */
export default async function HomePage() {
  const heroImages = await fetchCloudinaryImages("HERO SECTION");
  const galleryImages = await fetchCloudinaryImages("GALLERY");

  return (
    <>
      <Hero initialImages={heroImages} />
      <About />
      <Doctors />
      <Glass />
      <Services />
      <VisionMission />
      <Gallery initialImages={galleryImages} />
      <Achievements />
      <Products />
      <Brands />
      <FAQ />
      <Contact />
      <TrustStrip />
    </>
  );
}
