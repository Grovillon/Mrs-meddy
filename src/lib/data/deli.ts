export interface DeliItem {
  slug: string;
  name: string;
  description: string;
  price: number;
  color: "blue" | "pink" | "green" | "yellow";
}

export const deliItems: DeliItem[] = [
  {
    slug: "extra-virgin-olive-oil",
    name: "Extra Virgin Olive Oil",
    description: "Cold-pressed, single estate, straight from the family grove.",
    price: 14.5,
    color: "green",
  },
  {
    slug: "kalamata-olives",
    name: "Kalamata Olives",
    description: "Brine-cured and glossy, sold by the jar the way yiayia keeps them.",
    price: 6.5,
    color: "green",
  },
  {
    slug: "barrel-aged-feta",
    name: "Barrel-Aged Feta",
    description: "Sharp, crumbly, aged slowly in wooden barrels for real depth.",
    price: 8.0,
    color: "blue",
  },
  {
    slug: "thyme-honey",
    name: "Wild Thyme Honey",
    description: "Raw mountain honey, gently sweet with a herbal finish.",
    price: 9.5,
    color: "yellow",
  },
  {
    slug: "dried-oregano",
    name: "Mountain Oregano",
    description: "Sun-dried on the stem, the same jar that sits by every stove.",
    price: 4.5,
    color: "pink",
  },
  {
    slug: "greek-wine",
    name: "Assyrtiko White Wine",
    description: "Crisp, mineral, from small family vineyards.",
    price: 16.0,
    color: "blue",
  },
  {
    slug: "phyllo-pastry",
    name: "Hand-Rolled Phyllo",
    description: "Paper-thin pastry sheets, rolled fresh for your own pies at home.",
    price: 5.0,
    color: "yellow",
  },
  {
    slug: "greek-coffee",
    name: "Greek Coffee",
    description: "Finely ground for the briki, the way every conversation starts.",
    price: 7.0,
    color: "pink",
  },
];
