import { Stethoscope, Glasses, Contact2, TestTube, Microscope, HeartPulse } from "lucide-react";

export const SERVICES = [
  {
    id: "eye-test",
    title: "Eye Test",
    description: "A complete checkup to find your exact glass number and ensure your eyes are healthy.",
    icon: Stethoscope,
  },
  {
    id: "frame-fitting",
    title: "Frame Fitting",
    description: "Expert help to choose the perfect frame that fits your face shape, style, and comfort.",
    icon: Glasses,
  },
  {
    id: "contact-lenses",
    title: "Contact Lenses",
    description: "Get comfortable contact lenses with proper guidance on how to wear and care for them.",
    icon: Contact2,
  },
  {
    id: "kids-eye-care",
    title: "Kids Eye Care",
    description: "Gentle, friendly, and accurate eye checkups specially designed for children.",
    icon: HeartPulse,
  },
  {
    id: "vision-aids",
    title: "Vision Aids",
    description: "Magnifying glasses and special tools to help people who have very weak eyesight.",
    icon: Microscope,
  },
  {
    id: "dry-eye",
    title: "Dry Eye Relief",
    description: "Checkup and treatment for dry, burning, or itchy eyes to give you lasting comfort.",
    icon: TestTube,
  },
];
