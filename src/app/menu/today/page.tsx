import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { weeklyMenu } from "@/lib/data/weekly-menu";
import { meals } from "@/lib/data/meals";
import { familyTrays } from "@/lib/data/family-trays";

export const metadata: Metadata = {
  title: "Today's Menu",
  description: "What Mrs Meddy is cooking today — fresh, in small batches, ready to order.",
};

function resolveDish(name: string) {
  const meal = meals.find((m) => m.name === name);
  if (meal) {
    return {
      slug: meal.slug,
      name: meal.name,
      tag: meal.greekName,
      description: meal.description,
      price: meal.price,
      color: meal.color,
    };
  }
  const tray = familyTrays.find((t) => t.name === name);
  if (tray) {
    return {
      slug: tray.slug,
      name: tray.name,
      tag: tray.serves,
      description: tray.description,
      price: tray.price,
      color: tray.color,
    };
  }
  return null;
}

export default function TodaysMenuPage() {
  const jsDay = new Date().getDay();
  const index = jsDay === 0 ? 6 : jsDay - 1;
  const today = weeklyMenu[index];
  const dishes = today.meals.map(resolveDish).filter(Boolean) as NonNullable<
    ReturnType<typeof resolveDish>
  >[];

  return (
    <>
      <PageHero
        eyebrow={today.day}
        color="pink"
        title="Today's menu, cooked this morning"
        description={
          today.note ??
          "Here's exactly what's on the stove today — order now while it's fresh."
        }
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.map((dish, i) => (
              <Reveal key={dish.slug} delay={i * 0.08}>
                <ProductCard product={dish} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14 flex flex-col items-center gap-4 rounded-4xl bg-white p-10 text-center soft-shadow">
            <h2 className="font-display text-2xl text-ink">
              Want to plan further ahead?
            </h2>
            <p className="max-w-md text-ink-soft">
              See the full weekly rotation and pre-order for any day this
              week.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/menu">Full Menu</Button>
              <Button href="/pre-order" variant="outline">
                Pre-order ahead
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
