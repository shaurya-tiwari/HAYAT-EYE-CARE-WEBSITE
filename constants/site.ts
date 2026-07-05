/**
 * Site-wide constants — edit this file to update contact info,
 * WhatsApp number, address, social links across the entire site.
 */

export const SITE_NAME = "Hayat Eye Care";
export const SITE_TAGLINE = "Your Vision, Our Care";
export const SITE_DESCRIPTION =
  "Hayat Eye Care — a premium optical center offering eye testing, frame fitting, contact lens fitting, and more. Serving happy customers for over 10 years.";

/** WhatsApp Business number — include country code, no + or spaces */
export const WHATSAPP_NUMBER = "919876543210"; // ← replace with real number

export const ADDRESS = {
  line1: "123, Main Market Road",
  line2: "Near City Hospital",
  city: "Your City",
  state: "State",
  pincode: "000000",
  full: "123, Main Market Road, Near City Hospital, Your City - 000000",
};

export const CONTACT = {
  phone: "+91 98765 43210",
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
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d77.0!3d28.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHayat+Eye+Care!5e0!3m2!1sen!2sin!4v1234567890";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Brands", href: "#brands" },
  { label: "Doctors", href: "#doctors" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
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
