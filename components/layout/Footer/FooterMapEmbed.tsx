import { GOOGLE_MAPS_EMBED_URL } from "@/constants/site";

export default function FooterMapEmbed() {
  return (
    <div className="mb-10 rounded-2xl overflow-hidden border border-white/10 h-56">
      <iframe
        src={GOOGLE_MAPS_EMBED_URL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Hayat Eye Care location map"
      />
    </div>
  );
}
