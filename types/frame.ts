export interface Frame {
  id: string;
  name: string;          // Derived from Drive filename (dashes/underscores → spaces)
  imageUrl: string;      // Google Drive direct view URL
  category?: string;     // Optional, for filtering
}
