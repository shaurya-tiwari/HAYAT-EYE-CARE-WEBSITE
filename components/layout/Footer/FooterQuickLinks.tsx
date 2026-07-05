import { NAV_LINKS } from "@/constants/site";

export default function FooterQuickLinks() {
  return (
    <div>
      <h4 className="font-semibold text-white mb-4">Quick Links</h4>
      <ul className="space-y-2 text-sm">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-white/70 hover:text-[--accent] transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
