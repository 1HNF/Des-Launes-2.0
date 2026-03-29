"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState, useEffect } from "react";

type NavItem = { href: string; label: string };

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = useMemo<NavItem[]>(
    () => [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/location", label: "Location" },
      { href: "/investment", label: "Investment" },
      { href: "/contact", label: "Contact" }
    ],
    []
  );

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,14,26,0.97)" : "rgba(10,14,26,0.75)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(201,169,110,0.08)"
      }}
    >
      <style>{`
        .nav-link {
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.5);
          transition: color 0.2s;
          text-decoration: none;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--color-gold-500);
        }
        .mobile-link {
          display: block;
          padding: 0.75rem 1rem;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.55);
          border-bottom: 1px solid rgba(201,169,110,0.06);
          transition: color 0.2s;
          text-decoration: none;
        }
        .mobile-link:hover, .mobile-link.active {
          color: var(--color-gold-500);
        }
      `}</style>

      <div className="container-shell">
        <div className="flex h-[72px] items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <div
              className="flex h-9 w-9 items-center justify-center"
              style={{ border: "1px solid rgba(201,169,110,0.25)", fontFamily: "var(--font-cormorant)" }}
            >
              <span className="text-[0.78rem] tracking-wider" style={{ color: "var(--color-gold-500)" }}>
                SCI
              </span>
            </div>
            <div className="leading-tight">
              <span
                className="block text-[0.8rem] tracking-[0.12em] uppercase"
                style={{ fontFamily: "var(--font-cormorant)", color: "var(--color-cream-100)" }}
              >
                Domaine des Launes
              </span>
              <span
                className="block text-[0.65rem] tracking-[0.1em] uppercase"
                style={{ color: "var(--color-gold-500)", opacity: 0.75 }}
              >
                Alpine Investment Land
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {items.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link${active ? " active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" className="btn-gold" style={{ fontSize: "0.68rem", paddingTop: "0.6rem", paddingBottom: "0.6rem" }}>
              Request Details
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex items-center justify-center p-2 md:hidden"
            style={{ border: "1px solid rgba(201,169,110,0.2)", color: "var(--color-cream-100)" }}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {open
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ borderTop: "1px solid rgba(201,169,110,0.08)", background: "rgba(10,14,26,0.98)" }}>
          <div className="container-shell py-4">
            <div className="flex flex-col">
              {items.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`mobile-link${active ? " active" : ""}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-gold mt-3 justify-center">
                Request Investment Details
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
