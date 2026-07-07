import FooterContactInfo from "./FooterContactInfo";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterSocialIcons from "./FooterSocialIcons";
import FooterCopyright from "./FooterCopyright";
import { SITE_NAME } from "@/constants/site";
import Button from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-white/5">
      <div className="container-custom px-4 md:px-8 py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-8 md:mb-12">
          {/* Brand + WhatsApp CTA */}
          <div className="lg:col-span-1">
            <h3 className="text-sm md:text-xl font-extrabold tracking-tight text-white mb-2 md:mb-3">{SITE_NAME}</h3>
            <p className="text-white/45 text-[10px] md:text-sm mb-4 md:mb-6 leading-relaxed">
              Curated luxury eyewear and world-class vision correction diagnostics.
            </p>
            <Button
              href={buildGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
              id="footer-whatsapp-cta"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </Button>
          </div>

          <FooterContactInfo />
          <FooterQuickLinks />
          <FooterSocialIcons />
        </div>

        <FooterCopyright />
      </div>
    </footer>
  );
}
