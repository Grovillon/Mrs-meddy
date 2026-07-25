import type { Metadata } from "next";
import { Mail, Phone, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { MapPlaceholder } from "@/components/contact/map-placeholder";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mrs Meddy — questions, catering enquiries, or just to say hello.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Say hello"
        color="yellow"
        title="We'd love to hear from you"
        description="Questions about an order, catering for an event, or just want to say the moussaka was good — we're listening."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-8">
            <Reveal>
              <MapPlaceholder />
            </Reveal>

            <Reveal delay={0.08} className="flex flex-col gap-4 rounded-3xl bg-white p-7 soft-shadow">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pastel-blue text-pastel-blue-deep">
                  <Phone size={18} />
                </span>
                <a href={`tel:${siteConfig.phone}`} className="focus-ring text-ink hover:text-ink-soft">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pastel-pink text-pastel-pink-deep">
                  <Mail size={18} />
                </span>
                <a href={`mailto:${siteConfig.email}`} className="focus-ring text-ink hover:text-ink-soft">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pastel-green text-pastel-green-deep">
                  <Clock size={18} />
                </span>
                <ul className="flex flex-1 flex-col gap-1 text-sm text-ink-soft">
                  {siteConfig.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6">
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.05}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
