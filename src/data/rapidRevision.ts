export interface RapidRevisionSubject {
  id: string;
  name: string;
  abbreviation: string;
  icon: string;
  price: number;
  year: "1st Year" | "2nd Year" | "3rd Year" | "Final Year";
}

export const rapidRevisionSubjects: RapidRevisionSubject[] = [
  // 1st Year
  { id: "rr-anatomy", name: "Anatomy", abbreviation: "ANAT", icon: "🦴", price: 480, year: "1st Year" },
  { id: "rr-physiology", name: "Physiology", abbreviation: "PHYSIO", icon: "❤️", price: 480, year: "1st Year" },
  { id: "rr-biochemistry", name: "Biochemistry", abbreviation: "BIOCHEM", icon: "🧬", price: 576, year: "1st Year" },

  // 2nd Year
  { id: "rr-pathology", name: "Pathology", abbreviation: "PATHO", icon: "🔬", price: 896, year: "2nd Year" },
  { id: "rr-microbiology", name: "Microbiology", abbreviation: "MICRO", icon: "🦠", price: 704, year: "2nd Year" },
  { id: "rr-pharmacology", name: "Pharmacology", abbreviation: "PHARMA", icon: "💊", price: 704, year: "2nd Year" },

  // 3rd Year
  { id: "rr-ent", name: "Ear, Nose, and Throat (ENT)", abbreviation: "ENT", icon: "👂", price: 608, year: "3rd Year" },
  { id: "rr-ophthalmology", name: "Ophthalmology", abbreviation: "OPHTHAL", icon: "👁️", price: 480, year: "3rd Year" },
  { id: "rr-fmt", name: "Forensic Medicine and Toxicology (FMT)", abbreviation: "FMT", icon: "⚖️", price: 736, year: "3rd Year" },
  { id: "rr-psm", name: "Preventive and Social Medicine (PSM)", abbreviation: "PSM", icon: "📊", price: 1312, year: "3rd Year" },

  // Final Year
  { id: "rr-medicine", name: "General Medicine", abbreviation: "MED", icon: "🩺", price: 736, year: "Final Year" },
  { id: "rr-surgery", name: "General Surgery", abbreviation: "SURG", icon: "🔪", price: 1312, year: "Final Year" },
  { id: "rr-obg", name: "Obstetrics and Gynecology (OBG)", abbreviation: "OBG", icon: "🤰", price: 960, year: "Final Year" },
  { id: "rr-pediatrics", name: "Pediatrics", abbreviation: "PEDS", icon: "👶", price: 544, year: "Final Year" },
  { id: "rr-orthopedics", name: "Orthopedics", abbreviation: "ORTHO", icon: "🦿", price: 576, year: "Final Year" },
  { id: "rr-dermatology", name: "Dermatology", abbreviation: "DERMA", icon: "🧴", price: 672, year: "Final Year" },
  { id: "rr-psychiatry", name: "Psychiatry", abbreviation: "PSYCH", icon: "🧠", price: 416, year: "Final Year" },
  { id: "rr-anesthesiology", name: "Anesthesiology", abbreviation: "ANES", icon: "💉", price: 192, year: "Final Year" },
  { id: "rr-radiology", name: "Radiology", abbreviation: "RAD", icon: "☢️", price: 544, year: "Final Year" },
];

export const YEAR_ORDER = ["1st Year", "2nd Year", "3rd Year", "Final Year"] as const;

export const getFullSetTotal = () =>
  rapidRevisionSubjects.reduce((sum, s) => sum + s.price, 0);

export const getDiscountedTotal = (discountPercent = 10) => {
  const total = getFullSetTotal();
  return total * (1 - discountPercent / 100);
};
