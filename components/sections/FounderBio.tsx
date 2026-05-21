import { Container } from "@/components/ui/Container";
import { founder } from "@/lib/content";

export function FounderBio() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-12 rounded-3xl border border-surface-border bg-surface-elevated p-8 md:grid-cols-[200px_1fr] md:p-12">
          {/* Photo slot — replace with a real portrait of Diogo */}
          <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-2xl bg-gradient-brand-subtle md:mx-0">
            <span className="font-display text-4xl font-bold text-gradient-brand">
              {founder.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div>
            <p className="eyebrow mb-3">Founder</p>
            <h2 className="font-display text-2xl font-bold text-content-primary sm:text-3xl">
              {founder.name}
              <span className="ml-3 align-middle text-base font-normal text-content-muted">
                {founder.role}
              </span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-content-secondary">
              {founder.bio}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
