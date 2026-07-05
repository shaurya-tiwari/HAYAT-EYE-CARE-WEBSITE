import FooterContactInfo from "./FooterContactInfo";
import FooterMapEmbed from "./FooterMapEmbed";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterSocialIcons from "./FooterSocialIcons";
import FooterCopyright from "./FooterCopyright";
import { SITE_NAME } from "@/constants/site";
import Button from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer id="contact" className="section-dark-bg text-white">
      <div className="container-custom px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand + WhatsApp CTA */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-[--accent] mb-3">{SITE_NAME}</h3>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Your trusted optical center for comprehensive eye care and premium eyewear.
            </p>
            <Button
              href={buildGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
              id="footer-whatsapp-cta"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </Button>
          </div>

          <FooterContactInfo />
          <FooterQuickLinks />
          <FooterSocialIcons />
        </div>

        <FooterMapEmbed />
        <FooterCopyright />
      </div>
    </footer>
  );
}
