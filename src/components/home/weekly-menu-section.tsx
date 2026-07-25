import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { weeklyMenu } from "@/lib/data/weekly-menu";

const dayColors = ["yellow", "pink", "blue", "green", "yellow", "pink", "blue"] as const;

export function WeeklyMenuSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Cooking this week"
          eyebrowColor="pink"
          title="The weekly menu"
          description="Like a real home kitchen, what's cooking changes with the day. Here's what's simmering, one day at a time."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-7">
          {weeklyMenu.map((day, i) => (
            <Reveal key={day.day} delay={(i % 7) * 0.05} className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-3xl bg-cream p-5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg text-ink">
                    {day.short}
                  </span>
                  <Badge color={dayColors[i % dayColors.length]}>Day {i + 1}</Badge>
                </div>
                <ul className="flex flex-1 flex-col gap-2">
                  {day.meals.map((meal) => (
                    <li
                      key={meal}
                      className="rounded-xl bg-white px-3 py-2 text-sm text-ink-soft"
                    >
                      {meal}
                    </li>
                  ))}
                </ul>
                {day.note && (
                  <p className="text-xs italic leading-relaxed text-ink-faint">
                    {day.note}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
