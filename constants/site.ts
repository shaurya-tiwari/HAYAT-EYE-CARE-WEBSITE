/**
 * Site-wide constants — edit this file to update contact info,
 * WhatsApp number, address, social links across the entire site.
 */

export const SITE_NAME = "HAYAT EYE CARE";
export const SITE_TAGLINE = "Better Vision Better Life";
export const SITE_DESCRIPTION =
  "HAYAT EYE CARE — a premium optical center offering eye testing, frame fitting, contact lens fitting, and more. Serving happy customers for over 10 years.";

/** WhatsApp Business number — include country code, no + or spaces */
export const WHATSAPP_NUMBER = "917037930930"; // Real number from env

export const ADDRESS = {
  line1: "Dharmtara Complex",
  line2: "Near State Bank",
  city: "Noorpur",
  state: "Uttar Pradesh",
  pincode: "246734",
  full: "Dharmtara Complex, near State Bank, Noorpur, Uttar Pradesh 246734",
};

export const CONTACT = {
  phone: "+91 70379 30930",
  email: "info@hayateyecare.com",
};

export const WORKING_HOURS = [
  { days: "Monday – Saturday", hours: "10:00 AM – 8:00 PM" },
  { days: "Sunday", hours: "11:00 AM – 5:00 PM" },
];

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/hayateyecare",
  facebook: "https://facebook.com/hayateyecare",
};

export const GOOGLE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Hayat+Eye+Care,+Dharmtara+Complex,+Noorpur,+Uttar+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed";

// Uses Google Maps Search API which perfectly drops a pin on the exact address every time
export const GOOGLE_MAPS_SHARE_URL = "https://www.google.com/maps/search/?api=1&query=Hayat+Eye+Care,+Dharmtara+Complex,+near+State+Bank,+Noorpur,+Uttar+Pradesh";

export const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/products" },
  { label: "Brands", href: "/#brands" },
  { label: "Doctors", href: "/#doctors" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export const STATS = [
  { value: "10+", label: "Years of Experience" },
  { value: "5000+", label: "Happy Customers" },
  { value: "3", label: "Certified Optometrists" },
  { value: "500+", label: "Frames in Stock" },
];

// ── Flat shorthand exports (used by Contact, Footer, etc.) ──
export const SITE_PHONE = CONTACT.phone;
export const SITE_ADDRESS = ADDRESS.full;
export const SITE_WHATSAPP = WHATSAPP_NUMBER;
export const SITE_MAPS_URL = GOOGLE_MAPS_EMBED_URL;
export const SITE_MAPS_SHARE_URL = GOOGLE_MAPS_SHARE_URL;
