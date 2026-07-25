import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { MenuGrid } from "@/components/menu/menu-grid";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "The full Mrs Meddy menu — vegetarian, vegan, soups, meat, desserts and more, cooked fresh every day.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="The full menu"
        color="blue"
        title="Everything we cook, all in one table"
        description="Filter by what you're after — every dish is made the same slow way, whichever category it's in."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <Suspense fallback={<div className="h-96" />}>
            <MenuGrid />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
