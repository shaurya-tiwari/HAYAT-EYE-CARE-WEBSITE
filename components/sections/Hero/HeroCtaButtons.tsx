import { CalendarCheck, Eye } from "lucide-react";
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
        variant="primary"
        size="lg"
        id="hero-book-eye-test"
        className="shadow-lg shadow-[--primary]/25"
      >
        <CalendarCheck size={20} />
        Book Eye Test
      </Button>

      <Button
        href="#gallery"
        variant="outline"
        size="lg"
        id="hero-browse-frames"
      >
        <Eye size={20} />
        Browse Frames
      </Button>
    </div>
  );
}
