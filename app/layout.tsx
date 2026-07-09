import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { SITE_NAME, SITE_DESCRIPTION, SITE_TAGLINE } from "@/constants/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    // Brand & Local Variations
    "Hayat Eye Care", "hayat eye care & opticals", "hayat noorpur", "hyatt eyes", "neafe eye",
    "hayat eye care & opticals, near state bank, noorpur, uttar pradesh",
    "jishan ahmad hayat eye care", "jishan ahmad noorpur",
    
    // Core Services & Doctors
    "eyes", "eye", "eyes doctor", "eye doctor near me", "eye doctor chanpur bijnor",
    "eye specialist", "eye specialist near me", "eyes special doctor near me",
    "ophthalmologist", "optometrist", "optometry",
    
    // Clinics & Centers
    "eye care center", "eye center near me", "eye hospital near me", "optical center",
    
    // Specific Treatments & Products
    "cataract surgery", "phaco surgery eye hospital filakshi", "eye test", "vision test",
    "eyeglasses", "contact lenses", "spectacles", "frames",
    
    // Local Conversational Search
    "apna noorpur ma khe eyes ka liya chasma kha banta h"
  ],
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  appleWebApp: {
    title: SITE_NAME,
    statusBarStyle: "default",
  },
};

import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "Optician"],
    "name": SITE_NAME,
    "description": SITE_DESCRIPTION,
    "url": "https://hayateyecare.in",
    "telephone": "+917037930930",
    "openingHours": "Mo,Tu,We,Th,Fr,Sa 10:00-20:00 Su 11:00-17:00",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dharmtara Complex, Near State Bank",
      "addressLocality": "Noorpur",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "246734",
      "addressCountry": "IN"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} ${sora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden">
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
