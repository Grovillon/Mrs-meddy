import type { Meal } from "@/lib/types";

export const meals: Meal[] = [
  {
    slug: "moussaka",
    name: "Moussaka",
    greekName: "Μουσακάς",
    description:
      "Layers of slow-baked aubergine, spiced lamb and a whisper of nutmeg béchamel.",
    price: 12.5,
    categories: ["meat", "weekly-specials"],
    spotlight: true,
    color: "pink",
  },
  {
    slug: "pastitsio",
    name: "Pastitsio",
    greekName: "Παστίτσιο",
    description:
      "Baked pasta with cinnamon-kissed beef ragù, wrapped in a soft custard top.",
    price: 12.0,
    categories: ["meat"],
    spotlight: true,
    color: "yellow",
  },
  {
    slug: "gemista",
    name: "Gemista",
    greekName: "Γεμιστά",
    description:
      "Tomatoes and peppers, stuffed with herby rice and roasted until sweet.",
    price: 11.0,
    categories: ["vegan", "vegetarian"],
    spotlight: true,
    color: "green",
  },
  {
    slug: "gigantes",
    name: "Gigantes",
    greekName: "Γίγαντες",
    description:
      "Giant baked beans in a slow tomato sauce, finished with dill and olive oil.",
    price: 9.5,
    categories: ["vegan", "vegetarian"],
    color: "green",
  },
  {
    slug: "chicken-lemon-oregano",
    name: "Chicken Lemon Oregano",
    greekName: "Κοτόπουλο Λεμονάτο",
    description:
      "Roast chicken bathed in lemon, oregano and good olive oil, spooned over potatoes.",
    price: 13.0,
    categories: ["meat", "weekly-specials"],
    color: "yellow",
  },
  {
    slug: "beef-stifado",
    name: "Beef Stifado",
    greekName: "Στιφάδο",
    description:
      "Beef braised for hours with baby onions, cinnamon and a deep red wine sauce.",
    price: 14.5,
    categories: ["meat"],
    spotlight: true,
    color: "blue",
  },
  {
    slug: "spinach-pie",
    name: "Spinach Pie",
    greekName: "Σπανακόπιτα",
    description:
      "Hand-folded filo, layered with spinach, dill and feta, baked until golden.",
    price: 8.5,
    categories: ["vegetarian"],
    color: "green",
  },
  {
    slug: "galaktoboureko",
    name: "Galaktoboureko",
    greekName: "Γαλακτομπούρεκο",
    description:
      "Silky semolina custard, wrapped in crisp filo, soaked in honey syrup.",
    price: 6.5,
    categories: ["desserts"],
    spotlight: true,
    color: "yellow",
  },
  {
    slug: "avgolemono-soup",
    name: "Avgolemono Soup",
    greekName: "Αυγολέμονο",
    description:
      "Egg-lemon chicken soup, silky and bright — the first thing grandmother makes when you're unwell.",
    price: 7.5,
    categories: ["soups"],
    color: "yellow",
  },
  {
    slug: "fasolada",
    name: "Fasolada",
    greekName: "Φασολάδα",
    description:
      "Greece's Sunday bean soup — white beans, carrots and tomato, simmered for hours.",
    price: 7.0,
    categories: ["soups", "vegan"],
    color: "blue",
  },
];

export const spotlightMeals = meals.filter((meal) => meal.spotlight);
