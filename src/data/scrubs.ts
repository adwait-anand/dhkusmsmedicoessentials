import menNavy from "@/assets/scrubs/men-navy.jpg";
import menForestGreen from "@/assets/scrubs/men-forest-green.jpg";
import menWine from "@/assets/scrubs/men-wine.jpg";
import menBlack from "@/assets/scrubs/men-black.jpg";
import womenNavy from "@/assets/scrubs/women-navy.jpg";
import womenForestGreen from "@/assets/scrubs/women-forest-green.jpg";
import womenWine from "@/assets/scrubs/women-wine.jpg";
import womenBlack from "@/assets/scrubs/women-black.jpg";
import womenCeilBlue from "@/assets/scrubs/women-ceil-blue.jpg";
import womenGalaxyBlue from "@/assets/scrubs/women-galaxy-blue.jpg";
import womenMaroon from "@/assets/scrubs/women-maroon.jpg";
import womenPastelLilac from "@/assets/scrubs/women-pastel-lilac.jpg";

export type ScrubGender = "Men's" | "Women's";

export interface ScrubColor {
  name: string;
  hex: string;
  image: string;
}

export const scrubTypes: string[] = [
  "Classic V-Neck",
  "Jogger Style",
  "Multi-Pocket Premium",
];

export const scrubGenders: ScrubGender[] = ["Men's", "Women's"];

export const scrubColorsByGender: Record<ScrubGender, ScrubColor[]> = {
  "Men's": [
    { name: "Navy Blue", hex: "#000080", image: menNavy },
    { name: "Forest Green", hex: "#174A35", image: menForestGreen },
    { name: "Wine", hex: "#722F37", image: menWine },
    { name: "Black", hex: "#111111", image: menBlack },
  ],
  "Women's": [
    { name: "Navy Blue", hex: "#000080", image: womenNavy },
    { name: "Forest Green", hex: "#174A35", image: womenForestGreen },
    { name: "Wine", hex: "#722F37", image: womenWine },
    { name: "Black", hex: "#111111", image: womenBlack },
    { name: "Ceil Blue", hex: "#92A8D1", image: womenCeilBlue },
    { name: "Galaxy Blue", hex: "#2452A4", image: womenGalaxyBlue },
    { name: "Maroon", hex: "#800020", image: womenMaroon },
    { name: "Pastel Lilac", hex: "#C8A2C8", image: womenPastelLilac },
  ],
};

export const scrubSizes: string[] = ["XS", "S", "M", "L", "XL", "XXL"];

export const SCRUB_BASE_PRICE = 2500;
