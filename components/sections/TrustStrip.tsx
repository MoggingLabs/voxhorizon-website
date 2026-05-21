import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { press } from "@/lib/content";

export function TrustStrip() {
  return (
    <section className="border-y border-surface-border bg-surface-elevated/30 py-10">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-content-muted">
            Recognized by industry-leading media
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {press.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium tracking-tight text-content-secondary/80 transition-colors hover:text-content-primary"
              >
                {p.name}
              </a>
            ))}
            <span className="rounded-full border border-surface-border px-3 py-1 text-xs text-content-muted">
              + 400 news sites
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
