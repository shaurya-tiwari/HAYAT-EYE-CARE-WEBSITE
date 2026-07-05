/**
 * Design system tokens — colors, spacing, radius.
 * These mirror the CSS variables in globals.css.
 * Reference these in JS/TS code if needed; for Tailwind use the CSS vars directly.
 */

export const COLORS = {
  /** Primary — deep teal */
  primary: "#0d7377",
  primaryDark: "#0a5c60",
  primaryLight: "#14a6ac",

  /** Accent — warm gold */
  accent: "#c9a84c",
  accentLight: "#e8c97a",

  /** Backgrounds */
  background: "#f0f4f7",
  surface: "rgba(255,255,255,0.07)",

  /** Text */
  textPrimary: "#1a1a2e",
  textSecondary: "#4a5568",
  textMuted: "#718096",

  /** Glass */
  glassBorder: "rgba(255,255,255,0.18)",
  glassBg: "rgba(255,255,255,0.08)",
} as const;

export const RADIUS = {
  card: "1.25rem",   // 20px
  button: "0.75rem", // 12px
  full: "9999px",
} as const;
