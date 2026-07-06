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

      <div className="grid grid-cols-2 gap-2 md:gap-8 items-start max-w-5xl mx-auto">
        {/* Info Cards */}
        <div className="flex flex-col gap-1 md:gap-3">
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
            <div key={label} className="glass p-1.5 md:p-4 flex items-start gap-1.5 md:gap-3.5">
              <div className="w-5 h-5 md:w-10 md:h-10 rounded-md md:rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `color-mix(in srgb, var(${color}) 10%, transparent)` }}>
                <Icon className="w-3 h-3 md:w-[18px] md:h-[18px]" style={{ color: `var(${color})` }} />
              </div>
              <div>
                <p className="text-[5px] md:text-[10px] font-bold uppercase tracking-wider text-[--text-muted] leading-none">{label}</p>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="text-[--text-primary] font-medium hover:text-[--primary] transition-colors text-[6px] md:text-sm mt-0.5 block leading-[1.1]">
                    {value}
                  </a>
                ) : (
                  <p className="text-[--text-primary] font-medium text-[6px] md:text-sm mt-0.5 leading-[1.1]">{value}</p>
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
            className="mt-1 w-full"
          >
            <MessageCircle size={18} />
            Book Appointment on WhatsApp
          </Button>
        </div>

        {/* Google Map Embed */}
        <div className="glass p-1.5 rounded-2xl overflow-hidden h-64 md:h-full min-h-[250px] md:min-h-[320px]">
          <iframe
            src={SITE_MAPS_URL}
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "14px", minHeight: "240px" }}
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
