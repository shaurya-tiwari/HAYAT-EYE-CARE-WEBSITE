import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { SITE_PHONE, SITE_ADDRESS, SITE_MAPS_URL } from "@/constants/site";
import Button from "@/components/ui/Button";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function Contact() {
  return (
    <SectionWrapper id="contact" bgVariant="soft">
      <SectionHeading
        title="Visit Us or Get in Touch"
        subtitle="We'd love to hear from you. Walk in or book via WhatsApp."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 items-center">
        {/* Info Cards */}
        <div className="flex flex-col gap-5">
          {[
            {
              icon: Phone,
              label: "Phone",
              value: SITE_PHONE,
              href: `tel:${SITE_PHONE}`,
              color: "--primary",
            },
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: "Chat with us on WhatsApp",
              href: buildGeneralWhatsAppLink(),
              color: "--accent",
            },
            {
              icon: MapPin,
              label: "Address",
              value: SITE_ADDRESS,
              href: "https://maps.google.com",
              color: "--primary",
            },
            {
              icon: Clock,
              label: "Hours",
              value: "Mon – Sun: 10:00 AM – 8:00 PM",
              href: undefined,
              color: "--accent",
            },
          ].map(({ icon: Icon, label, value, href, color }) => (
            <div key={label} className="glass p-5 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `rgba(var(--tw-color-${color === "--primary" ? "sky" : "emerald"}-500), 0.12)`, backgroundColor: `color-mix(in srgb, var(${color}) 12%, transparent)` }}>
                <Icon size={20} style={{ color: `var(${color})` }} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[--text-muted]">{label}</p>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="text-[--text-primary] font-medium hover:text-[--primary] transition-colors text-sm mt-0.5 block">
                    {value}
                  </a>
                ) : (
                  <p className="text-[--text-primary] font-medium text-sm mt-0.5">{value}</p>
                )}
              </div>
            </div>
          ))}

          <Button
            href={buildGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="lg"
            id="contact-whatsapp-cta"
            className="mt-2 w-full"
          >
            <MessageCircle size={20} />
            Book Appointment on WhatsApp
          </Button>
        </div>

        {/* Google Map Embed */}
        <div className="glass p-2 rounded-[24px] overflow-hidden h-80 md:h-full min-h-[350px]">
          <iframe
            src={SITE_MAPS_URL}
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "20px", minHeight: "340px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hayat Eye Care Location"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
