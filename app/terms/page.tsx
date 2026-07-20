import type { Metadata } from "next";
import { SITE_NAME, CONTACT, ADDRESS } from "@/constants/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE_NAME}.`,
};

export default function TermsPage() {
  return (
    <div className="flex flex-col flex-1 bg-[--bg-base]">
      <main className="flex-1 pt-28 pb-20">
        <div className="container-custom px-5 md:px-8 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[--text-primary] tracking-tight mb-3">
            Terms of Service
          </h1>
          <p className="text-[--text-muted] text-sm mb-10">Last updated: July 2026</p>
          <p className="text-[--text-secondary] text-sm md:text-base leading-relaxed">
            This website belongs to {SITE_NAME} and is intended to provide information about our clinic,
            products, and services. The content here is for general informational purposes only and is not
            a substitute for professional medical advice — always consult a qualified eye care professional
            for your eye health. Product images and descriptions are illustrative; actual products, availability,
            and pricing may vary, so please contact us via WhatsApp or visit our store for the most accurate details.
            All brand names and trademarks mentioned on this website are the property of their respective owners
            and are referenced here for identification purposes only. For any questions, reach us at {ADDRESS.full},
            call us on {CONTACT.phone}, or email at {CONTACT.email}.
          </p>
        </div>
      </main>
    </div>
  );
}
