import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "glass";
  className?: string;
}

/**
 * Small label badge — used for categories, tags, experience labels.
 */
export default function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-[--primary]/15 text-[--primary] border border-[--primary]/25",
    accent: "bg-[--accent]/15 text-[--accent-dark] border border-[--accent]/25",
    glass: "glass-flat text-[--text-secondary] text-xs",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
