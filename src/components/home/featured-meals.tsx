import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ProductCard } from "@/components/ui/product-card";
import { meals } from "@/lib/data/meals";

export function FeaturedMeals() {
  const featured = meals.slice(0, 8);

  return (
    <section id="menu" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="This week's table"
            title="Meals made the way they should be"
            description="No shortcuts, no reheating from frozen — every dish is cooked fresh, in small batches, exactly like it would be at a family table."
          />
          <div className="hidden sm:block">
            <Button href="/menu" variant="outline">
              See full menu
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((meal, i) => (
            <Reveal key={meal.slug} delay={(i % 4) * 0.08}>
              <ProductCard
                product={{
                  slug: meal.slug,
                  name: meal.name,
                  tag: meal.greekName,
                  description: meal.description,
                  price: meal.price,
                  color: meal.color,
                }}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Button href="/menu" variant="outline" className="w-full">
            See full menu
          </Button>
        </div>
      </Container>
    </section>
  );
}
