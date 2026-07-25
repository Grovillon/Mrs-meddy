import { Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { DishPlate } from "@/components/ui/dish-plate";
import { familyTrays } from "@/lib/data/family-trays";
import { formatPrice } from "@/lib/utils";

export function FamilyMealsSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="overflow-hidden rounded-4xl bg-ink px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="For the whole table"
              eyebrowColor="yellow"
              title={
                <span className="text-cream">
                  Big trays, made for sharing
                </span>
              }
              description={
                <span className="text-cream/70">
                  Sunday lunch shouldn&rsquo;t take all morning. Order a full
                  family tray and let everyone leave the table full.
                </span>
              }
            />
            <Button href="/family-meals" variant="secondary">
              View Family Meals
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {familyTrays.map((tray, i) => (
              <Reveal key={tray.slug} delay={i * 0.08}>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-cream/[0.06] ring-1 ring-white/10">
                  <DishPlate color={tray.color} className="aspect-[4/3] w-full" />
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <h3 className="font-display text-lg text-cream">
                      {tray.name}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-cream/60">
                      {tray.description}
                    </p>
                    <div className="mt-2 flex items-center justify-between text-sm text-cream/80">
                      <span className="flex items-center gap-1.5">
                        <Users size={14} />
                        {tray.serves}
                      </span>
                      <span className="font-display text-lg text-cream">
                        {formatPrice(tray.price)}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
