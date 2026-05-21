import { Container } from "@/components/ui/Container";
import { press } from "@/lib/content";

export function TrustStrip() {
  return (
    <section className="border-y border-surface-border bg-surface-elevated/40 py-8">
      <Container>
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wider text-content-muted">
          Recognized by industry-leading media
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {press.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-content-secondary transition-colors hover:text-content-primary"
            >
              {p.name}
            </a>
          ))}
          <span className="text-sm font-medium text-content-muted">+ 400 news sites</span>
        </div>
      </Container>
    </section>
  );
}
