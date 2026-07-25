import { Container } from "@/components/ui/container";
import { Skeleton, CardSkeleton } from "@/components/ui/skeleton";

export default function MenuLoading() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-24 shrink-0 rounded-full" />
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
