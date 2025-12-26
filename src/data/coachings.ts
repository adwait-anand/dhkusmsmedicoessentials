export interface Subject {
  id: string;
  name: string;
  icon: string;
  price: number;
  description: string;
}

export interface Coaching {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  subjects: Subject[];
}

const createSubjects = (prices: number[]): Subject[] => [
  { id: "anatomy", name: "Anatomy", icon: "🦴", price: prices[0], description: "Complete anatomy notes with diagrams" },
  { id: "physiology", name: "Physiology", icon: "❤️", price: prices[1], description: "Comprehensive physiology concepts" },
  { id: "biochemistry", name: "Biochemistry", icon: "🧬", price: prices[2], description: "Biochemistry pathways & cycles" },
  { id: "pathology", name: "Pathology", icon: "🔬", price: prices[3], description: "Disease mechanisms & morphology" },
  { id: "pharmacology", name: "Pharmacology", icon: "💊", price: prices[4], description: "Drug mechanisms & classifications" },
  { id: "microbiology", name: "Microbiology", icon: "🦠", price: prices[5], description: "Bacteria, viruses & parasites" },
  { id: "forensic", name: "Forensic Medicine", icon: "⚖️", price: prices[6], description: "Medicolegal aspects & toxicology" },
  { id: "ent", name: "ENT", icon: "👂", price: prices[7], description: "Ear, nose & throat conditions" },
  { id: "ophthalmology", name: "Ophthalmology", icon: "👁️", price: prices[8], description: "Eye diseases & treatments" },
  { id: "psm", name: "PSM", icon: "📊", price: prices[9], description: "Preventive & social medicine" },
];

export const coachings: Coaching[] = [
  {
    id: "marrow",
    name: "Marrow",
    icon: "📚",
    color: "from-blue-500 to-blue-600",
    description: "Premium NEET PG preparation notes",
    subjects: createSubjects([299, 349, 299, 399, 349, 299, 249, 249, 249, 299]),
  },
  {
    id: "prepladder",
    name: "PrepLadder",
    icon: "🎯",
    color: "from-purple-500 to-purple-600",
    description: "Comprehensive study materials",
    subjects: createSubjects([279, 329, 279, 379, 329, 279, 229, 229, 229, 279]),
  },
  {
    id: "btr",
    name: "BTR",
    icon: "🏆",
    color: "from-orange-500 to-orange-600",
    description: "Beyond The Ranks notes",
    subjects: createSubjects([259, 309, 259, 359, 309, 259, 209, 209, 209, 259]),
  },
  {
    id: "egurukul",
    name: "eGurukul",
    icon: "📖",
    color: "from-green-500 to-green-600",
    description: "Digital learning excellence",
    subjects: createSubjects([249, 299, 249, 349, 299, 249, 199, 199, 199, 249]),
  },
  {
    id: "marrow6",
    name: "Marrow 6.0",
    icon: "🚀",
    color: "from-indigo-500 to-indigo-600",
    description: "Latest Marrow 6.0 edition notes",
    subjects: createSubjects([349, 399, 349, 449, 399, 349, 299, 299, 299, 349]),
  },
  {
    id: "cerebellum",
    name: "Cerebellum",
    icon: "🧠",
    color: "from-pink-500 to-pink-600",
    description: "Brain-focused learning materials",
    subjects: createSubjects([269, 319, 269, 369, 319, 269, 219, 219, 219, 269]),
  },
];

export const getCoachingById = (id: string): Coaching | undefined => {
  return coachings.find((c) => c.id === id);
};
