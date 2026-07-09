import { SOCIAL_LINKS } from "@/constants/site";

/** Instagram SVG icon */
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

/** Facebook SVG icon */
function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export default function FooterSocialIcons() {
  return (
    <div>
      <h4 className="font-bold text-white text-[11px] md:text-sm mb-3 md:mb-5 tracking-tight uppercase">Socials</h4>
      <div className="flex gap-3">
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-10 h-10 rounded-xl bg-white/10 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
        >
          <InstagramIcon size={18} />
        </a>
        <a
          href={SOCIAL_LINKS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="w-10 h-10 rounded-xl bg-white/10 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
        >
          <FacebookIcon size={18} />
        </a>
      </div>
      <p className="text-gray-500 text-[9px] md:text-xs mt-3 md:mt-5 leading-relaxed">
        Share your new look with us!<br />Tag us on Instagram.
      </p>
    </div>
  );
}
