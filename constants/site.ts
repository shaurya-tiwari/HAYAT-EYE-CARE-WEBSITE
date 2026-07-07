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
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111246.3312959666!2d78.36839352726756!3d29.15545248882069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bbfcb2c510a7f%3A0xe67597bc5b2c7e1d!2sDharmtara%20Complex%2C%20near%20State%20Bank%2C%20Noorpur%2C%20Uttar%20Pradesh%20246734!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

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
