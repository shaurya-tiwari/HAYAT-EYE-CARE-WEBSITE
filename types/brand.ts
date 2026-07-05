export interface Brand {
  id: string;
  name: string;
  logoUrl: string;
  category: "frame" | "lens";
  website?: string;
}
