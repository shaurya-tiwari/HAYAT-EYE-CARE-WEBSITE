import { SITE_NAME } from "@/constants/site";

export default function FooterCopyright() {
  const year = new Date().getFullYear();
  return (
    <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-[9px] md:text-xs">
      © {year} {SITE_NAME}. All rights reserved.
    </div>
  );
}
