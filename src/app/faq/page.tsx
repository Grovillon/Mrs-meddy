import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { faqItems } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about ordering, delivery and our menu.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Good to know"
        color="blue"
        title="Frequently asked questions"
        description="Everything we're usually asked — if yours isn't here, just get in touch."
      />

      <section className="py-16 sm:py-20">
        <Container className="mx-auto max-w-3xl">
          <FaqAccordion items={faqItems} />

          <Reveal
            delay={0.1}
            className="mt-12 flex flex-col items-center gap-4 rounded-4xl bg-pastel-yellow/50 p-10 text-center"
          >
            <h2 className="font-display text-2xl text-ink">
              Still have a question?
            </h2>
            <p className="max-w-md text-ink-soft">
              We&rsquo;re happy to help — reach out and someone from the kitchen
              will get back to you.
            </p>
            <Button href="/contact">Contact us</Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
