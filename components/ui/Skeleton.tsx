import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

/**
 * Generic shimmer skeleton block. Compose multiple to build section-level loaders.
 */
export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-xl shimmer bg-white/10",
        className
      )}
      aria-hidden="true"
    />
  );
}
