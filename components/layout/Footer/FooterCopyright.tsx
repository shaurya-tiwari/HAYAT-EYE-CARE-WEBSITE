import { SITE_NAME } from "@/constants/site";

export default function FooterCopyright() {
  const year = new Date().getFullYear();
  return (
    <div className="border-t border-white/5 pt-6 text-center text-white/35 text-xs">
      © {year} {SITE_NAME}. All rights reserved.
    </div>
  );
}
