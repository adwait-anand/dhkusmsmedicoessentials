export interface FastrackBook {
  id: string;
  name: string;
  icon: string;
  price: number;
  description: string;
  year: string;
}

export const fastrackBooks: FastrackBook[] = [
  {
    id: "first-year",
    name: "First Year Fastrack",
    icon: "📗",
    price: 2200,
    description: "Complete first year MBBS revision book covering Anatomy, Physiology, and Biochemistry",
    year: "1st Year",
  },
  {
    id: "second-year",
    name: "Second Year Fastrack",
    icon: "📘",
    price: 2100,
    description: "Comprehensive second year revision covering Pathology, Pharmacology, and Microbiology",
    year: "2nd Year",
  },
  {
    id: "third-year",
    name: "Third Year Fastrack",
    icon: "📙",
    price: 2400,
    description: "Third year subjects including ENT, Ophthalmology, FM, and Community Medicine",
    year: "3rd Year",
  },
  {
    id: "final-year",
    name: "Final Year Fastrack",
    icon: "📕",
    price: 3200,
    description: "Final year revision covering Medicine, Surgery, OBG, Pediatrics, and more",
    year: "Final Year",
  },
];
