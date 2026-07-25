import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  color = "yellow",
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  color?: "blue" | "pink" | "green" | "yellow";
  children?: React.ReactNode;
}) {
  const bgMap = {
    blue: "bg-pastel-blue/50",
    pink: "bg-pastel-pink/50",
    green: "bg-pastel-green/50",
    yellow: "bg-pastel-yellow/50",
  };
  const textMap = {
    blue: "text-pastel-blue-deep",
    pink: "text-pastel-pink-deep",
    green: "text-pastel-green-deep",
    yellow: "text-pastel-yellow-deep",
  };

  return (
    <section className={cn("relative overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-20", bgMap[color])}>
      <Container className="flex flex-col items-start gap-5">
        <Reveal>
          <span
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.22em]",
              textMap[color],
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-balance text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-balance text-lg leading-relaxed text-ink-soft">
              {description}
            </p>
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
