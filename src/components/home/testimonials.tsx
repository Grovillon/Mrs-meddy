import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/lib/data/testimonials";

const accents = [
  "text-pastel-yellow-deep",
  "text-pastel-pink-deep",
  "text-pastel-blue-deep",
  "text-pastel-green-deep",
];

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="From the table"
          eyebrowColor="yellow"
          align="center"
          title="What people feel, not just taste"
          className="mx-auto items-center text-center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <figure className="flex h-full flex-col gap-4 rounded-3xl bg-cream p-7">
                <Quote
                  size={26}
                  className={accents[i % accents.length]}
                  strokeWidth={1.5}
                />
                <blockquote className="flex-1 text-balance text-[0.95rem] leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="text-sm">
                  <span className="font-semibold text-ink">{t.name}</span>
                  <span className="text-ink-soft"> — {t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
