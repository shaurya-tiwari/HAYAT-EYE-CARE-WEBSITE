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
    >
      <MessageCircle size={16} />
      WhatsApp Us
    </Button>
  );
}
