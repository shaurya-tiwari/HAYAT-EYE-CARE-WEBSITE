import { MessageCircle } from "lucide-react";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

/**
 * Fixed floating WhatsApp button — always visible site-wide, bottom-right.
 * Uses GENERAL link only — never frame-specific.
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={buildGeneralWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      id="floating-whatsapp-btn"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl pulse-ring hover:scale-110 transition-transform duration-200"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
}
