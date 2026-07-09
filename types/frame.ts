export interface Frame {
  id: string;
  name: string;          // Derived from Drive filename (dashes/underscores → spaces)
  imageUrl: string;      // Cloudinary optimized URL
  category?: string;     // Optional, for filtering
}
