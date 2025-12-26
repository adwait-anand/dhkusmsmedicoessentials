export interface Subject {
  id: string;
  name: string;
  description: string;
  price: number;
  pages: number;
  icon: string;
}

export const subjects: Subject[] = [
  {
    id: "anatomy",
    name: "Anatomy",
    description: "Complete notes covering gross anatomy, embryology, histology & neuroanatomy",
    price: 499,
    pages: 320,
    icon: "🦴",
  },
  {
    id: "physiology",
    name: "Physiology",
    description: "Comprehensive notes on general & systemic physiology with clinical correlations",
    price: 449,
    pages: 290,
    icon: "❤️",
  },
  {
    id: "biochemistry",
    name: "Biochemistry",
    description: "Detailed notes on metabolism, molecular biology & clinical biochemistry",
    price: 399,
    pages: 250,
    icon: "🧬",
  },
  {
    id: "pathology",
    name: "Pathology",
    description: "General & systemic pathology with high-yield diagrams and tables",
    price: 549,
    pages: 380,
    icon: "🔬",
  },
  {
    id: "pharmacology",
    name: "Pharmacology",
    description: "Drug classifications, mechanisms, and clinical pharmacology essentials",
    price: 499,
    pages: 310,
    icon: "💊",
  },
  {
    id: "microbiology",
    name: "Microbiology",
    description: "Bacteriology, virology, parasitology & mycology with immunology basics",
    price: 449,
    pages: 280,
    icon: "🦠",
  },
  {
    id: "forensic-medicine",
    name: "Forensic Medicine",
    description: "Medico-legal aspects, toxicology & forensic pathology notes",
    price: 349,
    pages: 200,
    icon: "⚖️",
  },
  {
    id: "medicine",
    name: "Medicine",
    description: "Internal medicine covering all systems with latest guidelines",
    price: 599,
    pages: 420,
    icon: "🩺",
  },
  {
    id: "surgery",
    name: "Surgery",
    description: "General surgery, surgical specialties & operative surgery notes",
    price: 549,
    pages: 360,
    icon: "🔪",
  },
  {
    id: "obg",
    name: "Obstetrics & Gynecology",
    description: "Complete OBG notes with high-yield clinical scenarios",
    price: 499,
    pages: 300,
    icon: "👶",
  },
];
