import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { company, nav, press } from "@/lib/content";

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-wider text-content-muted">{title}</p>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="text-sm text-content-secondary hover:text-content-primary"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-content-muted">
              {company.tagline}. Exclusive, pre-qualified projects for established
              home-improvement contractors.
            </p>
          </div>

          <FooterCol title="Company" links={nav} />

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-content-muted">Legal</p>
            <Link href="/privacy" className="text-sm text-content-secondary hover:text-content-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-content-secondary hover:text-content-primary">
              Terms of Service
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-content-muted">
              As featured in
            </p>
            {press.slice(0, 4).map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-content-secondary hover:text-content-primary"
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-surface-border pt-6">
          <p className="text-xs text-content-muted">
            © {company.copyrightYear} {company.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
