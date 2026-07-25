import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  eyebrowColor = "yellow",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  eyebrowColor?: "blue" | "pink" | "green" | "yellow";
}) {
  const eyebrowClasses = {
    blue: "text-pastel-blue-deep",
    pink: "text-pastel-pink-deep",
    green: "text-pastel-green-deep",
    yellow: "text-pastel-yellow-deep",
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.22em]",
              eyebrowClasses[eyebrowColor],
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display text-balance text-3xl leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-xl text-balance text-base leading-relaxed text-ink-soft sm:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
