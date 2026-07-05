import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;        // White text variant (for dark backgrounds)
  className?: string;
}

/**
 * Consistent section title + optional subtitle used by every content section.
 * Includes a decorative gold accent underline.
 */
export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold mb-3",
          light ? "text-white" : "text-[--text-primary]"
        )}
      >
        {title}
      </h2>

      {/* Gold accent underline */}
      <div
        className={cn(
          "h-1 w-16 rounded-full bg-[--accent] mb-4",
          centered && "mx-auto"
        )}
      />

      {subtitle && (
        <p
          className={cn(
            "text-lg max-w-2xl",
            light ? "text-white/80" : "text-[--text-secondary]",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
