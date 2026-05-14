export interface ScrubColor {
  name: string;
  hex: string;
}

export const scrubTypes: string[] = [
  "Classic V-Neck",
  "Jogger Style",
  "Multi-Pocket Premium",
];

export const scrubColors: ScrubColor[] = [
  { name: "Navy Blue", hex: "#000080" },
  { name: "Ceil Blue", hex: "#92a8d1" },
  { name: "Burgundy", hex: "#800020" },
  { name: "Hunter Green", hex: "#355E3B" },
  { name: "Black", hex: "#000000" },
];

export const scrubSizes: string[] = ["XS", "S", "M", "L", "XL", "XXL"];

export const SCRUB_BASE_PRICE = 2500;
