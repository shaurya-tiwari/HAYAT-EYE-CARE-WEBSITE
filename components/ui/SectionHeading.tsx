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
 * Includes an optional pill badge above titles.
 */
export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 md:mb-12", centered && "text-center flex flex-col items-center", className)}>
      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] max-w-4xl",
          light ? "text-white" : "text-[--text-primary]"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-[11px] sm:text-sm md:text-lg font-medium max-w-2xl leading-relaxed mt-4",
            light ? "text-white/60" : "text-[--text-muted]",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
