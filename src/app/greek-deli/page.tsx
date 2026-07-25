import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ProductCard } from "@/components/ui/product-card";
import { deliItems } from "@/lib/data/deli";

export const metadata: Metadata = {
  title: "Greek Deli",
  description:
    "Bring the pantry home — olive oil, feta, honey and Greek staples, sourced the way Mrs Meddy's kitchen always has.",
};

export default function GreekDeliPage() {
  return (
    <>
      <PageHero
        eyebrow="Pantry & provisions"
        color="pink"
        title="A little of Greece, for your own kitchen"
        description="The same oils, cheeses and staples we cook with — so the flavour doesn't stop at our door."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deliItems.map((item, i) => (
              <Reveal key={item.slug} delay={(i % 4) * 0.08}>
                <ProductCard product={item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
