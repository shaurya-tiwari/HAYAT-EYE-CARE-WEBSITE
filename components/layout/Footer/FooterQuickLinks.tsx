import { NAV_LINKS } from "@/constants/site";

export default function FooterQuickLinks() {
  return (
    <div>
      <h4 className="font-bold text-white text-[11px] md:text-sm mb-3 md:mb-5 tracking-tight uppercase">Navigation</h4>
      <ul className="space-y-1.5 md:space-y-3 text-[10px] md:text-sm">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors duration-200 block py-2 md:py-1"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
