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
      <Services />
      <VisionMission />
      <Gallery initialImages={galleryImages} />
      <Achievements />
      <div className="w-full flex relative z-[50] -mt-2 sm:-mt-4 md:-mt-8 lg:-mt-12 -mb-6 sm:-mb-8 md:-mb-16 pointer-events-none">
        <Image
          src="/spcsss_v3.png"
          alt="Premium Eyewear Display"
          width={1901}
          height={492}
          className="w-full h-auto object-cover drop-shadow-2xl"
          priority
        />
      </div>
      <Products />
      <Brands />
      <FAQ />
      <Contact />
      <TrustStrip />
    </>
  );
}
