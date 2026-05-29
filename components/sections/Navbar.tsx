"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Carbon Trader chrome — network ticker + segmented topbar.
// Nav mirrors the design handoff: Home · System · Territory · Operators · Apply.
const chromeNav = [
  { label: "Home", href: "/" },
  { label: "System", href: "/system" },
  { label: "Territory", href: "/territory" },
  { label: "Operators", href: "/operators" },
  { label: "Apply", href: "/apply" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname() ?? "/";

  return (
    <>
      {/* ── TICKER ────────────────────────────────────────── */}
      <div className="vh-tick" aria-label="Network ticker">
        <span className="vh-tick__pill">
          <span className="k">ACTIVE</span>
          <span className="v">63</span>
          <span className="up">▲ +4</span>
        </span>
        <span className="vh-tick__pill">
          <span className="k">APPTS·24H</span>
          <span className="v">187</span>
          <span className="up">▲ +12%</span>
        </span>
        <span className="vh-tick__pill">
          <span className="k">AVG TKT</span>
          <span className="v">$32.4K</span>
          <span className="up">▲ +$1.8K</span>
        </span>
        <span className="vh-tick__live">● LIVE · STREAMING</span>
      </div>

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

        <nav className="vh-nav">
          {chromeNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(isActive(pathname, item.href) && "is-active")}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="vh-crumbs">
          Q3 MMXXVI · <em>12 zips open</em>
        </div>
      </header>
    </>
  );
}
