import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { PreOrderForm } from "@/components/preorder/preorder-form";

export const metadata: Metadata = {
  title: "Pre-order",
  description:
    "Reserve today's menu or a family tray ahead of time — choose collection or delivery and a time that suits you.",
};

export default function PreOrderPage() {
  return (
    <>
      <PageHero
        eyebrow="Plan ahead"
        color="blue"
        title="Pre-order your next meal"
        description="Choose your meals, pick a time, and we'll have it ready — cooked fresh, exactly when you need it."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <PreOrderForm />
        </Container>
      </section>
    </>
  );
}
