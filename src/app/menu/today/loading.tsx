import { Container } from "@/components/ui/container";
import { CardSkeleton } from "@/components/ui/skeleton";

export default function TodayLoading() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
