import type { DayMenu } from "@/lib/types";

export const weeklyMenu: DayMenu[] = [
  {
    day: "Monday",
    short: "Mon",
    meals: ["Moussaka", "Fasolada", "Spinach Pie"],
    note: "The week starts the way it should — with a tray in the oven.",
  },
  {
    day: "Tuesday",
    short: "Tue",
    meals: ["Chicken Lemon Oregano", "Gigantes", "Galaktoboureko"],
  },
  {
    day: "Wednesday",
    short: "Wed",
    meals: ["Pastitsio", "Avgolemono Soup", "Spinach Pie"],
  },
  {
    day: "Thursday",
    short: "Thu",
    meals: ["Beef Stifado", "Gemista", "Galaktoboureko"],
    note: "Slow-braised beef, exactly the way it should take all day.",
  },
  {
    day: "Friday",
    short: "Fri",
    meals: ["Gemista", "Fasolada", "Spinach Pie"],
  },
  {
    day: "Saturday",
    short: "Sat",
    meals: ["Moussaka", "Beef Stifado", "Galaktoboureko"],
    note: "Our busiest table day — the whole family menu, out in full.",
  },
  {
    day: "Sunday",
    short: "Sun",
    meals: ["Family Lemon Chicken", "Gigantes", "Galaktoboureko"],
    note: "Sunday lunch. The one meal nobody misses.",
  },
];
