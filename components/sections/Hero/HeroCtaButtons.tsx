import { MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function HeroCtaButtons() {
  return (
    <div
      className="flex flex-col sm:flex-row gap-3 animate-fade-in-up"
      style={{ animationDelay: "0.3s" }}
    >
      <Button
        href={buildGeneralWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline-dark"
        size="lg"
        id="hero-enquiry"
      >
        <MessageCircle size={18} />
        Enquiry
      </Button>
    </div>
  );
}
