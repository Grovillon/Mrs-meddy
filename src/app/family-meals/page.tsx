import type { Metadata } from "next";
import { Users, Clock, Repeat } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { DishPlate } from "@/components/ui/dish-plate";
import { familyTrays } from "@/lib/data/family-trays";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Family Meals",
  description:
    "Order whole trays of Mrs Meddy's signature dishes, sized to feed the whole family — no cooking, no washing up.",
};

const points = [
  {
    icon: Users,
    title: "Sized for the table",
    description: "Every tray feeds 4–6 people generously, not just enough.",
  },
  {
    icon: Clock,
    title: "24 hours notice",
    description: "Order a day ahead so we can cook it properly, not rush it.",
  },
  {
    icon: Repeat,
    title: "Set it weekly",
    description: "Many families order the same tray every Sunday, on repeat.",
  },
];

export default function FamilyMealsPage() {
  return (
    <>
      <PageHero
        eyebrow="For the whole table"
        color="green"
        title="One tray, the whole family fed"
        description="Sunday lunch shouldn't take all morning. Order a full tray of our signature dishes and let everyone leave the table full."
      >
        <Button href="/pre-order" size="lg" className="mt-2">
          Pre-order a family tray
        </Button>
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {points.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-3xl bg-white p-6 soft-shadow">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pastel-green text-pastel-green-deep">
                    <point.icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-base text-ink">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="The trays"
            eyebrowColor="green"
            title="Choose your family's Sunday"
            description="Each tray is cooked to order in one dish, exactly the way it would be made for family — just sized for more chairs."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {familyTrays.map((tray, i) => (
              <Reveal key={tray.slug} delay={i * 0.1}>
                <article className="flex flex-col overflow-hidden rounded-3xl bg-cream soft-shadow sm:flex-row">
                  <DishPlate
                    color={tray.color}
                    className="aspect-[4/3] w-full sm:aspect-auto sm:w-56"
                  />
                  <div className="flex flex-1 flex-col gap-3 p-7">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl text-ink">
                        {tray.name}
                      </h3>
                      <span className="whitespace-nowrap font-display text-lg text-ink">
                        {formatPrice(tray.price)}
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5 text-sm text-ink-soft">
                      <Users size={14} />
                      {tray.serves}
                    </span>
                    <p className="flex-1 text-sm leading-relaxed text-ink-soft">
                      {tray.description}
                    </p>
                    <Button href="/pre-order" variant="outline" className="mt-2 w-fit">
                      Pre-order this tray
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
