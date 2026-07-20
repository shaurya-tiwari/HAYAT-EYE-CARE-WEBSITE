import { SITE_NAME } from "@/constants/site";
import Link from "next/link";

export default function FooterCopyright() {
  const year = new Date().getFullYear();
  return (
    <div className="border-t border-white/10 pt-6 flex flex-col items-center gap-2 text-center">
      <p className="text-gray-500 text-[9px] md:text-xs">
        © {year} {SITE_NAME}. All rights reserved.
      </p>
      <div className="flex items-center gap-3 text-[8px] md:text-[10px]">
        <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-300 transition-colors">
          Privacy Policy
        </Link>
        <span className="text-gray-700">•</span>
        <Link href="/terms" className="text-gray-500 hover:text-gray-300 transition-colors">
          Terms of Service
        </Link>
      </div>
      <p className="text-gray-600 text-[7px] md:text-[9px] max-w-md">
        All brand names, trademarks, and logos are the property of their respective owners and are used for identification purposes only.
      </p>
    </div>
  );
}

