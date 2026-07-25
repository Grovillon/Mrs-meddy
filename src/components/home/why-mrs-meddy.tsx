import {
  Sparkles,
  BookOpenText,
  CookingPot,
  Users2,
  Salad,
  CakeSlice,
  Wheat,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const reasons = [
  {
    icon: Sparkles,
    title: "Fresh every day",
    description: "Cooked that morning, not frozen and reheated on demand.",
    color: "yellow",
  },
  {
    icon: BookOpenText,
    title: "Traditional recipes",
    description: "Passed down through generations, kept exactly as they were.",
    color: "pink",
  },
  {
    icon: CookingPot,
    title: "Small batch cooking",
    description: "Cooked in trays, not vats — the way a kitchen should smell.",
    color: "blue",
  },
  {
    icon: Users2,
    title: "Family trays",
    description: "Whole meals sized for the table, not the takeaway box.",
    color: "green",
  },
  {
    icon: Salad,
    title: "Vegetarian options",
    description: "A full rotating menu, not a single sad side dish.",
    color: "green",
  },
  {
    icon: CakeSlice,
    title: "Homemade desserts",
    description: "Syrup-soaked and baked the same day you order.",
    color: "yellow",
  },
  {
    icon: Wheat,
    title: "Greek ingredients",
    description: "Real olive oil, real feta, sourced the way yiayia would.",
    color: "pink",
  },
] as const;

const colorClasses = {
  blue: "bg-pastel-blue text-pastel-blue-deep",
  pink: "bg-pastel-pink text-pastel-pink-deep",
  green: "bg-pastel-green text-pastel-green-deep",
  yellow: "bg-pastel-yellow text-pastel-yellow-deep",
};

export function WhyMrsMeddy() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Mrs Meddy"
          eyebrowColor="green"
          align="center"
          title="Everything a home kitchen should be"
          description="Not a marketing checklist — this is simply how the kitchen has always run."
          className="mx-auto items-center text-center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 3) * 0.08}>
              <div className="flex h-full flex-col gap-4 rounded-3xl bg-white p-7 soft-shadow">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${colorClasses[reason.color]}`}
                >
                  <reason.icon size={22} />
                </span>
                <h3 className="font-display text-lg text-ink">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
