import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names safely, resolving conflicts.
 * Used across all components instead of plain template literals.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts a Drive filename to a display-friendly frame name.
 * e.g. "Rayban-Aviator-Gold-M12.jpg" → "Rayban Aviator Gold M12"
 */
export function filenameToFrameName(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, "")     // strip extension
    .replace(/[-_]+/g, " ")      // dashes/underscores → spaces
    .trim();
}

/**
 * Truncates a string to maxLength, appending "..." if needed.
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trimEnd() + "...";
}
