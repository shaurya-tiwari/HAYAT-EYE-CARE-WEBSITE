import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ADDRESS, CONTACT, WORKING_HOURS, SITE_MAPS_SHARE_URL } from "@/constants/site";

export default function FooterContactInfo() {
  return (
    <div>
      <h4 className="font-bold text-white text-[11px] md:text-sm mb-3 md:mb-5 tracking-tight uppercase">Contact</h4>
      <ul className="space-y-2 md:space-y-3.5 text-[10px] md:text-sm text-white/50">
        <li className="flex items-start gap-2 md:gap-2.5">
          <MapPin size={14} className="text-white/30 mt-0.5 shrink-0" />
          <a href={SITE_MAPS_SHARE_URL} target="_blank" rel="noopener noreferrer" className="leading-relaxed hover:text-white transition-colors">
            {ADDRESS.full}
          </a>
        </li>
        <li className="flex items-center gap-2.5">
          <Phone size={16} className="text-white/30 shrink-0" />
          <a href={`tel:${CONTACT.phone}`} className="hover:text-white transition-colors">
            {CONTACT.phone}
          </a>
        </li>
        <li className="flex items-center gap-2.5">
          <Mail size={16} className="text-white/30 shrink-0" />
          <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
            {CONTACT.email}
          </a>
        </li>
        {WORKING_HOURS.map((wh) => (
          <li key={wh.days} className="flex items-start gap-2.5">
            <Clock size={16} className="text-white/30 mt-0.5 shrink-0" />
            <span className="leading-relaxed"><strong className="text-white/80">{wh.days}:</strong> {wh.hours}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
