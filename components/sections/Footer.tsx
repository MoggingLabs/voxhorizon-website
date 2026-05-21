import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { company, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-content-muted">
              {company.tagline}. Exclusive, pre-qualified projects for established
              home-improvement contractors.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-content-muted">
              Company
            </p>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-content-secondary hover:text-content-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-content-muted">
              Legal
            </p>
            <Link href="/privacy" className="text-sm text-content-secondary hover:text-content-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-content-secondary hover:text-content-primary">
              Terms of Service
            </Link>
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
