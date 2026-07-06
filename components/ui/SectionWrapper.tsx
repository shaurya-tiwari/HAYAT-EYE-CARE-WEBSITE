import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bgVariant?: "default" | "teal" | "dark" | "soft" | "light";
}

/**
 * Consistent padding, max-width, and optional background for every section.
 * Always wrap sections with this — never add ad-hoc padding per section.
 */
export default function SectionWrapper({
  children,
  id,
  className,
  bgVariant = "default",
}: SectionWrapperProps) {
  const bgClass = {
    default: "",
    teal: "section-teal-bg",
    dark: "section-dark-bg",
    soft: "bg-[--bg-soft]",
    light: "bg-white",
  }[bgVariant];

  return (
    <section id={id} className={cn("section-padding", bgClass, className)}>
      <div className="container-custom px-5 md:px-8">{children}</div>
    </section>
  );
}
