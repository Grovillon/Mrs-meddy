import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Mascot } from "@/components/mascot/mascot";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-6 text-center">
        <div className="flex w-full justify-center">
          <Mascot size={260} interactive={false} priority={false} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-pastel-pink-deep">
          404
        </span>
        <h1 className="font-display text-balance text-3xl text-ink sm:text-4xl">
          This table hasn&rsquo;t been set
        </h1>
        <p className="max-w-md text-ink-soft">
          The page you&rsquo;re looking for doesn&rsquo;t exist — but there&rsquo;s
          always something warm on the menu.
        </p>
        <Button href="/">Back to the kitchen</Button>
      </Container>
    </section>
  );
}
