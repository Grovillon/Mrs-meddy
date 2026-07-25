export type CategorySlug =
  | "vegetarian"
  | "vegan"
  | "soups"
  | "meat"
  | "family-trays"
  | "desserts"
  | "greek-deli"
  | "weekly-specials";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  color: "blue" | "pink" | "green" | "yellow";
}

export interface Meal {
  slug: string;
  name: string;
  greekName?: string;
  description: string;
  price: number;
  categories: CategorySlug[];
  spotlight?: boolean;
  color: "blue" | "pink" | "green" | "yellow";
}

export interface FamilyTray {
  slug: string;
  name: string;
  description: string;
  serves: string;
  price: number;
  color: "blue" | "pink" | "green" | "yellow";
}

export interface DayMenu {
  day: string;
  short: string;
  meals: string[];
  note?: string;
}

export interface Testimonial {
  name: string;
  quote: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
