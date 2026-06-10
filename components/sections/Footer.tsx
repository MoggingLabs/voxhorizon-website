import Link from "next/link";
import { cohort, footerColumns } from "@/lib/content";

// Four-column sitemap footer: brand · program · company · apply block.
export function Footer() {
  return (
    <footer className="vh-footer">
      <div className="vh-footer__grid">
        <div className="vh-footer__brand">
          <span className="word">
            <b>Vox</b>
            <i>·</i>
            <s>Horizon</s>
          </span>
          <p className="tagline">
            The end of the shared lead. Exclusive territory, pre-qualified appointments, paid per
            signature.
          </p>
          <a href="mailto:operators@voxhorizon.io" className="mail">
            operators@voxhorizon.io
          </a>
          <span className="press">Featured across 400+ news outlets</span>
        </div>

        {footerColumns.map((column) => (
          <nav key={column.title} className="vh-footer__col" aria-label={column.title}>
            <span className="t">{column.title}</span>
            {column.links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        ))}

        <div className="vh-footer__apply">
          <span className="t">Your zip</span>
          <p>
            One operator per zip code, secured for the year. {cohort.slotsOpen} of{" "}
            {cohort.slotsTotal} {cohort.quarter} slots remain.
          </p>
          <Link href="/apply" className="vh-navcta">
            Check my zip
          </Link>
        </div>
      </div>

      <div className="vh-footer__bottom">
        <span>© {cohort.year} VoxHorizon LLC</span>
        <span>
          <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
        </span>
      </div>
    </footer>
  );
}
