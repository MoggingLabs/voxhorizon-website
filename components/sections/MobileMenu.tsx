"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { cn } from "@/lib/utils";
import { cohort, navLinks } from "@/lib/content";

type MobileMenuProps = {
  open: boolean;
  pathname: string;
  onClose: () => void;
};

/** Full-screen mobile nav overlay (the desktop nav hides below 960px). */
export function MobileMenu({ open, pathname, onClose }: MobileMenuProps) {
  // Lock body scroll while the overlay is up.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <m.div
          className="vh-mmenu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <nav className="vh-mmenu__nav" aria-label="Primary">
            <Link href="/" className={cn(pathname === "/" && "is-active")} onClick={onClose}>
              Home
            </Link>
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label} className="vh-mmenu__group">
                  <span className="vh-mmenu__label">{item.label}</span>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn("sub", pathname === child.href && "is-active")}
                      onClick={onClose}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={cn(pathname === item.href && "is-active")}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link href="/about" className={cn(pathname === "/about" && "is-active")} onClick={onClose}>
              About
            </Link>
          </nav>
          <div className="vh-mmenu__cta">
            <Link href="/apply" className="vh-navcta" onClick={onClose}>
              Check my zip
            </Link>
            <span className="vh-mmenu__meta">
              {cohort.quarter} closes {cohort.closesOn} · {cohort.slotsOpen} of {cohort.slotsTotal}{" "}
              slots open
            </span>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
