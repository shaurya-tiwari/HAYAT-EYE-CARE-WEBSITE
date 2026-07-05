export interface Doctor {
  id: string;
  name: string;
  qualification: string;       // e.g. "B.Optom, PGDCR"
  specialization: string;      // e.g. "Senior Optometrist"
  department: string;          // e.g. "Refraction & Contact Lens"
  experienceYears: number;
  languages: string[];         // e.g. ["Hindi", "English", "Urdu"]
  timing: string;              // e.g. "Mon–Sat | 10:00 AM – 7:00 PM"
  rating: number;              // e.g. 4.9
  bio: string;                 // 2–3 line professional description
  image: string;               // Local path e.g. "/doctors/dr-jishan.png"
}
