import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;       // Enable hover lift effect (default: true)
  as?: React.ElementType;
}

/**
 * The core glassmorphism card used everywhere on the site.
 * Do NOT copy-paste glass styles into other components — import this instead.
 */
export default function GlassCard({
  children,
  className,
  hover = true,
  as: Tag = "div",
}: GlassCardProps) {
  return (
    <Tag className={cn(hover ? "glass" : "glass-flat", className)}>
      {children}
    </Tag>
  );
}
