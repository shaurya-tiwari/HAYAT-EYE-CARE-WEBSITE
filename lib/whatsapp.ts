import { WHATSAPP_NUMBER } from "@/constants/site";
import type { Frame } from "@/types/frame";

/**
 * Builds a plain WhatsApp chat link with a generic greeting.
 * Used by: Navbar CTA, Floating button, Footer, Doctor cards.
 * NEVER attach frame info to this link.
 */
export function buildGeneralWhatsAppLink(): string {
  const message = "Hi, I'd like to know more about Hayat Eye Care.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a WhatsApp link pre-filled with a specific frame's name + image URL.
 * Used ONLY by FrameCardOverlay inside the Gallery section.
 * NEVER use this for general buttons.
 */
export function buildFrameWhatsAppLink(frame: Frame): string {
  const message = `Hi, I'm interested in this frame: ${frame.name}\n\n${frame.imageUrl}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a WhatsApp link pre-filled with a specific product's name + image URL.
 */
export function buildProductWhatsAppLink(name: string, url: string): string {
  const message = `Hi, I'm interested in this product: ${name}\n\n${url}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
