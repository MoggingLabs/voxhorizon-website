import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-32">
      <Container className="text-center">
        <p className="font-display text-7xl font-bold text-gradient-brand">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-content-primary">
          This page is over the horizon
        </h1>
        <p className="mx-auto mt-3 max-w-md text-content-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/">Back home</Button>
          <Button href="/apply" variant="secondary">
            Apply
          </Button>
        </div>
      </Container>
    </section>
  );
}
