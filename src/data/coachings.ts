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
  { id: "microbiology", name: "Microbiology", icon: "🦠", price: prices[4], description: "Bacteria, viruses & parasites" },
  { id: "pharmacology", name: "Pharmacology", icon: "💊", price: prices[5], description: "Drug mechanisms & classifications" },
  { id: "ent", name: "ENT", icon: "👂", price: prices[6], description: "Ear, nose & throat conditions" },
  { id: "ophthalmology", name: "Ophthalmology", icon: "👁️", price: prices[7], description: "Eye diseases & treatments" },
  { id: "forensic", name: "FM", icon: "⚖️", price: prices[8], description: "Forensic Medicine & toxicology" },
  { id: "psm", name: "CM", icon: "📊", price: prices[9], description: "Community Medicine & public health" },
  { id: "medicine", name: "Medicine", icon: "🩺", price: prices[10], description: "Internal medicine concepts" },
  { id: "surgery", name: "Surgery", icon: "🔪", price: prices[11], description: "Surgical procedures & techniques" },
  { id: "obgyn", name: "OBGY", icon: "🤰", price: prices[12], description: "Obstetrics & Gynecology" },
  { id: "pediatrics", name: "Pediatrics", icon: "👶", price: prices[13], description: "Child health & development" },
  { id: "orthopedics", name: "Ortho", icon: "🦿", price: prices[14], description: "Musculoskeletal system" },
  { id: "dermatology", name: "Derma", icon: "🧴", price: prices[15], description: "Skin conditions & treatments" },
  { id: "psychiatry", name: "Psych", icon: "🧠", price: prices[16], description: "Mental health & disorders" },
  { id: "anesthesia", name: "Anesthesia", icon: "💉", price: prices[17], description: "Anesthetics & pain management" },
  { id: "radiology", name: "Radiology", icon: "☢️", price: prices[18], description: "Medical imaging & diagnostics" },
];

export const coachings: Coaching[] = [
  {
    id: "marrow",
    name: "M@rrow Notes 8.0",
    icon: "📚",
    color: "from-blue-500 to-blue-600",
    description: "Premium NEET PG preparation notes",
    subjects: createSubjects([1190, 740, 740, 1440, 1190, 890, 990, 740, 630, 1050, 2970, 1640, 1780, 740, 780, 660, 290, 590, 960]),
  },
  {
    id: "cerebellum",
    name: "Cerebrum Notes 2.0",
    icon: "🧠",
    color: "from-pink-500 to-pink-600",
    description: "Brain-focused learning materials",
    subjects: createSubjects([850, 690, 1370, 850, 1490, 760, 590, 590, 460, 1060, 990, 990, 1370, 1290, 590, 890, 460, 460, 550]),
  },
  {
    id: "marrow6",
    name: "M@rrow 6.0",
    icon: "🚀",
    color: "from-indigo-500 to-indigo-600",
    description: "Classic Marrow 6.0 edition notes",
    subjects: createSubjects([2060, 1090, 1060, 2160, 2690, 1250, 1490, 880, 850, 1820, 4860, 2430, 2580, 1090, 1270, 690, 490, 690, 1190]),
  },
  {
    id: "prepladder",
    name: "Stepladder (Prep X)",
    icon: "🎯",
    color: "from-purple-500 to-purple-600",
    description: "Comprehensive study materials",
    subjects: createSubjects([970, 1190, 990, 1790, 1360, 2090, 1090, 1060, 890, 2280, 2970, 2690, 2390, 1490, 940, 970, 690, 480, 850]),
  },
  {
    id: "egurukul",
    name: "eGorukul 4.0",
    icon: "📖",
    color: "from-green-500 to-green-600",
    description: "Digital learning excellence",
    subjects: createSubjects([890, 690, 890, 1190, 590, 970, 970, 1460, 880, 790, 2860, 1670, 1280, 880, 360, 360, 290, 590, 450]),
  },
  {
    id: "dbmci",
    name: "DBMCI One",
    icon: "🏆",
    color: "from-orange-500 to-orange-600",
    description: "DBMCI premium notes collection",
    subjects: createSubjects([990, 790, 690, 1240, 970, 970, 690, 690, 670, 690, 3190, 1790, 1640, 970, 490, 490, 490, 340, 610]),
  },
  {
    id: "dams",
    name: "D@MS Alpha",
    icon: "⭐",
    color: "from-amber-500 to-amber-600",
    description: "DAMS Alpha edition notes",
    subjects: createSubjects([890, 850, 490, 850, 550, 990, 760, 760, 460, 1060, 1790, 2690, 1490, 760, 330, 550, 760, 460, 970]),
  },
];

export const getCoachingById = (id: string): Coaching | undefined => {
  return coachings.find((c) => c.id === id);
};

// Get all unique subjects across all coachings
export const getAllSubjects = (): { name: string; icon: string; coachings: { coachingId: string; coachingName: string; price: number }[] }[] => {
  const subjectMap = new Map<string, { name: string; icon: string; coachings: { coachingId: string; coachingName: string; price: number }[] }>();
  
  coachings.forEach((coaching) => {
    coaching.subjects.forEach((subject) => {
      if (!subjectMap.has(subject.name)) {
        subjectMap.set(subject.name, {
          name: subject.name,
          icon: subject.icon,
          coachings: [],
        });
      }
      subjectMap.get(subject.name)!.coachings.push({
        coachingId: coaching.id,
        coachingName: coaching.name,
        price: subject.price,
      });
    });
  });
  
  return Array.from(subjectMap.values());
};
