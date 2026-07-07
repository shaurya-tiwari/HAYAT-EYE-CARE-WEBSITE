import { MapPin } from "lucide-react";
import { SOCIAL_LINKS, GOOGLE_MAPS_SHARE_URL } from "@/constants/site";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function HeroCtaButtons() {
  return (
    <div
      className="flex flex-row flex-wrap items-center gap-4 sm:gap-6 animate-fade-in-up mt-2 sm:mt-4"
      style={{ animationDelay: "0.3s" }}
    >
      <a
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white/90 hover:text-white transition-all duration-300 group"
        aria-label="Instagram"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all">
          <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <span className="text-sm font-medium hidden sm:block">Instagram</span>
      </a>

      <a
        href={SOCIAL_LINKS.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white/90 hover:text-white transition-all duration-300 group"
        aria-label="Facebook"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all">
          <FacebookIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <span className="text-sm font-medium hidden sm:block">Facebook</span>
      </a>

      <a
        href={GOOGLE_MAPS_SHARE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white/90 hover:text-white transition-all duration-300 group"
        aria-label="Location"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all">
          <MapPin size={20} className="sm:w-6 sm:h-6" />
        </div>
        <span className="text-sm font-medium hidden sm:block">Location</span>
      </a>
    </div>
  );
}
