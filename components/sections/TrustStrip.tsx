import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { press } from "@/lib/content";

export function TrustStrip() {
  return (
    <section className="border-y border-surface-border bg-surface-elevated py-12">
      <Container>
        <Reveal>
          <p className="eyebrow text-center">Recognized by industry-leading media</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {press.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-lg tracking-tight text-content-secondary transition-colors hover:text-content-primary"
              >
                {p.name}
              </a>
            ))}
            <span className="rounded-full border border-surface-border px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-content-muted">
              + 400 news sites
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
