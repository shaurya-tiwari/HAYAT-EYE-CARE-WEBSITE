import { MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

/** "WhatsApp Us" CTA — always uses the GENERAL link, never frame-specific */
export default function NavCtaButton() {
  return (
    <Button
      href={buildGeneralWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      variant="whatsapp"
      size="sm"
      id="nav-whatsapp-cta"
      className="h-6 md:h-8 lg:h-9 px-2 md:px-3 lg:px-4 gap-1 lg:gap-2 text-[8px] sm:text-[10px] md:text-[11px] lg:text-[13px]"
    >
      <MessageCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 lg:w-4 md:h-3.5 lg:h-4" />
      <span>WhatsApp Us</span>
    </Button>
  );
}
