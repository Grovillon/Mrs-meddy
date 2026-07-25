import { CalendarClock, Truck, ClipboardList } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    icon: ClipboardList,
    title: "Choose your meals",
    description: "Pick from the daily menu or a full family tray.",
  },
  {
    icon: CalendarClock,
    title: "Pick a time",
    description: "Choose collection or delivery, and the slot that suits you.",
  },
  {
    icon: Truck,
    title: "We cook, you relax",
    description: "Everything is made fresh and ready exactly when promised.",
  },
];

export function PreorderTeaser() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 rounded-4xl bg-pastel-blue/60 px-6 py-14 sm:px-12 sm:py-16 lg:grid-cols-2 lg:px-16">
          <div className="flex flex-col items-start gap-6">
            <SectionHeading
              eyebrow="Plan ahead"
              eyebrowColor="blue"
              title="Pre-order your table's next meal"
              description="Reserve today's menu or a family tray in advance — collection or delivery, on your schedule."
            />
            <Reveal delay={0.15}>
              <Button href="/pre-order" size="lg">
                Start a pre-order
              </Button>
            </Reveal>
          </div>

          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="flex items-start gap-4 rounded-2xl bg-white/80 p-5 backdrop-blur-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-pastel-blue-deep soft-shadow">
                    <step.icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-base text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
