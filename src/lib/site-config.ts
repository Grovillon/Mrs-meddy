export const siteConfig = {
  name: "Mrs Meddy",
  tagline: "Home cooked. Made with love.",
  description:
    "Mrs Meddy brings slow-cooked, home-style Greek meals to your table — the same recipes passed down through generations, made fresh every single day.",
  url: "https://mrsmeddy.com",
  locale: "en_GB",
  phone: "+44 20 1234 5678",
  email: "hello@mrsmeddy.com",
  address: {
    street: "14 Kitchen Lane",
    city: "London",
    postcode: "N1 6AA",
    country: "United Kingdom",
  },
  hours: [
    { day: "Monday", time: "11:00 – 20:00" },
    { day: "Tuesday", time: "11:00 – 20:00" },
    { day: "Wednesday", time: "11:00 – 20:00" },
    { day: "Thursday", time: "11:00 – 20:00" },
    { day: "Friday", time: "11:00 – 21:00" },
    { day: "Saturday", time: "10:00 – 21:00" },
    { day: "Sunday", time: "10:00 – 17:00" },
  ],
  social: {
    instagram: "https://instagram.com/mrsmeddy",
    facebook: "https://facebook.com/mrsmeddy",
    tiktok: "https://tiktok.com/@mrsmeddy",
  },
  nav: [
    { label: "Menu", href: "/menu" },
    { label: "Today's Menu", href: "/menu/today" },
    { label: "Family Meals", href: "/family-meals" },
    { label: "Greek Deli", href: "/greek-deli" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ],
  footerNav: [
    {
      title: "Explore",
      links: [
        { label: "Menu", href: "/menu" },
        { label: "Today's Menu", href: "/menu/today" },
        { label: "Family Meals", href: "/family-meals" },
        { label: "Greek Deli", href: "/greek-deli" },
      ],
    },
    {
      title: "Mrs Meddy",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Pre-order", href: "/pre-order" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
