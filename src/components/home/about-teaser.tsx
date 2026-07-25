import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Mascot } from "@/components/mascot/mascot";

export function AboutTeaser() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 flex justify-center lg:order-1">
          <Mascot size={420} interactive={false} priority={false} />
        </Reveal>

        <div className="order-1 flex flex-col items-start gap-6 lg:order-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-pastel-pink-deep">
              Our story
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-balance text-3xl leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
              A Greek grandmother&rsquo;s kitchen, running every single day
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-lg text-balance text-base leading-relaxed text-ink-soft sm:text-lg">
              Mrs Meddy started the way most good things do — around a table,
              with a recipe that was never written down, only remembered.
              What began as Sunday lunch for family has become a small
              kitchen that cooks the same way, for anyone who misses it.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-lg text-balance text-base leading-relaxed text-ink-soft sm:text-lg">
              No factory lines. No shortcuts. Just recipes passed down
              through generations, cooked slowly, the way a grandmother
              always would.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Button href="/about" variant="outline" className="mt-2">
              Read our story
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
