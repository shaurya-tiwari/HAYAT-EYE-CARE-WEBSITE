import type { Metadata } from "next";
import { SITE_NAME, CONTACT, ADDRESS } from "@/constants/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col flex-1 bg-[--bg-base]">
      <main className="flex-1 pt-28 pb-20">
        <div className="container-custom px-5 md:px-8 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[--text-primary] tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-[--text-muted] text-sm mb-10">Last updated: July 2026</p>
          <p className="text-[--text-secondary] text-sm md:text-base leading-relaxed">
            {SITE_NAME}&apos;s website is purely informational. We do not use any analytics, tracking cookies,
            or data collection tools — no login system, no sign-up forms, and no way to identify individual visitors.
            When you contact us via WhatsApp or phone, that conversation is only used to respond to your inquiry and
            is not stored on this website. Our contact page includes a Google Maps embed to show our clinic location,
            which is subject to Google&apos;s own privacy policy. For any questions, reach us at {ADDRESS.full},
            call us on {CONTACT.phone}, or email at {CONTACT.email}.
          </p>
        </div>
      </main>
    </div>
  );
}
