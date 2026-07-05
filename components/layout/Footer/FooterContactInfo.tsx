import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ADDRESS, CONTACT, WORKING_HOURS } from "@/constants/site";

export default function FooterContactInfo() {
  return (
    <div>
      <h4 className="font-semibold text-white mb-4">Contact Us</h4>
      <ul className="space-y-3 text-sm text-white/70">
        <li className="flex items-start gap-2">
          <MapPin size={16} className="text-[--accent] mt-0.5 shrink-0" />
          <span>{ADDRESS.full}</span>
        </li>
        <li className="flex items-center gap-2">
          <Phone size={16} className="text-[--accent] shrink-0" />
          <a href={`tel:${CONTACT.phone}`} className="hover:text-[--accent] transition-colors">
            {CONTACT.phone}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Mail size={16} className="text-[--accent] shrink-0" />
          <a href={`mailto:${CONTACT.email}`} className="hover:text-[--accent] transition-colors">
            {CONTACT.email}
          </a>
        </li>
        {WORKING_HOURS.map((wh) => (
          <li key={wh.days} className="flex items-start gap-2">
            <Clock size={16} className="text-[--accent] mt-0.5 shrink-0" />
            <span><strong className="text-white/90">{wh.days}:</strong> {wh.hours}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
