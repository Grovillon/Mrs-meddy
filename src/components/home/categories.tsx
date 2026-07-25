import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { categories } from "@/lib/data/categories";

const colorClasses = {
  blue: "bg-pastel-blue",
  pink: "bg-pastel-pink",
  green: "bg-pastel-green",
  yellow: "bg-pastel-yellow",
};

export function Categories() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Find your table"
          eyebrowColor="blue"
          title="A little of everything, made the same slow way"
          description="From vegan gigantes to family-sized trays, every category gets the same care — nothing is the 'safe option' on the side."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={(i % 4) * 0.06}>
              <Link
                href={`/menu?category=${cat.slug}`}
                className={`focus-ring group relative flex h-40 flex-col justify-between overflow-hidden rounded-3xl p-5 transition-transform hover:-translate-y-1 sm:h-48 ${colorClasses[cat.color]}`}
              >
                <ArrowUpRight
                  size={20}
                  className="self-end text-ink/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink"
                />
                <div>
                  <h3 className="font-display text-lg text-ink sm:text-xl">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-xs leading-snug text-ink-soft sm:text-sm">
                    {cat.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
