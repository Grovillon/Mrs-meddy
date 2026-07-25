import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Mascot } from "@/components/mascot/mascot";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story of Mrs Meddy — a Greek family, recipes passed down through generations, and a kitchen that never took shortcuts.",
};

const milestones = [
  {
    year: "Grandmother's kitchen",
    text: "Every recipe we cook today started at one table, made from memory, never from a book.",
  },
  {
    year: "Sunday lunches",
    text: "What began as feeding family on Sundays slowly became feeding anyone who missed that feeling.",
  },
  {
    year: "The kitchen today",
    text: "A small kitchen, cooking daily in small batches — the same way it always did, just for more tables.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        color="pink"
        title="A Greek family kitchen, not a restaurant chain"
        description="We didn't set out to build a food brand. We set out to keep a recipe box alive — and it turned into Mrs Meddy."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-pastel-green-deep">
                Where it started
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-balance text-3xl leading-[1.1] text-ink sm:text-4xl">
                Recipes that were never written down, only remembered
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-balance text-base leading-relaxed text-ink-soft sm:text-lg">
                Mrs Meddy is named after the woman who taught our family to
                cook — the kind of cook who never measured anything, who
                knew a dish was ready by smell, not by timer. Her moussaka.
                Her stifado. Her Sunday table that somehow always had room
                for one more chair.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-balance text-base leading-relaxed text-ink-soft sm:text-lg">
                When she was no longer able to cook for everyone herself, the
                family kept doing it her way — slowly, generously, without
                shortcuts. Mrs Meddy is that kitchen, open every day, for
                anyone who wants to feel like someone cooked for them.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-balance text-base leading-relaxed text-ink-soft sm:text-lg">
                We&rsquo;re not trying to be the biggest. We&rsquo;re trying to be the
                one place that still tastes like somebody&rsquo;s home.
              </p>
            </Reveal>
          </div>

          <Reveal className="flex justify-center">
            <Mascot size={440} interactive={false} priority={false} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How we cook"
            eyebrowColor="blue"
            title="Three things that never change"
            align="center"
            className="mx-auto items-center text-center"
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.1}>
                <div className="flex h-full flex-col gap-3 rounded-3xl bg-cream p-8">
                  <span className="font-display text-lg text-pastel-pink-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl text-ink">{m.year}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {m.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="flex flex-col items-center gap-6 rounded-4xl bg-ink px-6 py-16 text-center sm:px-12">
          <Reveal>
            <h2 className="font-display text-balance text-3xl leading-[1.1] text-cream sm:text-4xl">
              Come taste what home cooking actually feels like
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-xl text-balance text-cream/70">
              Start with today&rsquo;s menu, or reserve a family tray for your next
              Sunday.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/menu/today" variant="secondary" size="lg">
                Today&rsquo;s Menu
              </Button>
              <Button href="/pre-order" size="lg" className="bg-cream text-ink hover:bg-cream/90">
                Pre-order
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
