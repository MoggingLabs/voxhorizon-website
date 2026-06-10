"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "framer-motion";
import { cn } from "@/lib/utils";
import { cohort, navLinks } from "@/lib/content";
import { MobileMenu } from "./MobileMenu";

function isActive(pathname: string, href?: string) {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname() ?? "/";
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the flyout and mobile menu on navigation.
  useEffect(() => {
    setFlyoutOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ── TOPBAR ────────────────────────────────────────── */}
      <header className="vh-topbar">
        <Link href="/" className="vh-brand" aria-label="VoxHorizon home">
          <span className="mark-wrap">
            <svg
              width="22"
              height="22"
              viewBox="0 0 32 32"
              fill="none"
              stroke="#51B8DC"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="28" height="28" />
              <line x1="7" y1="19" x2="25" y2="19" />
              <rect x="19" y="8" width="5" height="5" fill="#51B8DC" stroke="none" />
            </svg>
          </span>
          <span className="wordmark">
            <span className="vox">Vox</span>
            <span className="dot">·</span>
            <span className="horizon">Horizon</span>
          </span>
        </Link>

        <nav className="vh-nav" aria-label="Primary">
          {navLinks.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="vh-nav__item"
                onMouseEnter={() => setFlyoutOpen(true)}
                onMouseLeave={() => setFlyoutOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={flyoutOpen}
                  aria-haspopup="true"
                  className={cn(
                    "vh-nav__trigger",
                    pathname.startsWith("/industries") && "is-active",
                  )}
                  onClick={() => setFlyoutOpen((open) => !open)}
                >
                  {item.label} <span className="caret">▾</span>
                </button>
                <AnimatePresence>
                  {flyoutOpen && (
                    <m.div
                      className="vh-flyout"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.16, ease: "easeOut" }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(isActive(pathname, child.href) && "is-active")}
                          aria-current={isActive(pathname, child.href) ? "page" : undefined}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={cn(isActive(pathname, item.href) && "is-active")}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="vh-topbar__right">
          <span className="vh-crumbs">
            {cohort.quarter} {cohort.year} ·{" "}
            <em>
              {cohort.slotsOpen} of {cohort.slotsTotal} slots open
            </em>
          </span>
          <Link href="/apply" className="vh-navcta">
            Check my zip
          </Link>
          <button
            type="button"
            className="vh-burger"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} pathname={pathname} onClose={() => setMenuOpen(false)} />
    </>
  );
}
