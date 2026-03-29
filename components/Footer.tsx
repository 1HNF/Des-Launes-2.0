import Link from "next/link";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/location", label: "Location" },
  { href: "/investment", label: "Investment" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(201,169,110,0.08)" }}>
      <style>{`
        .footer-link {
          color: rgba(245,240,232,0.3);
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: var(--color-gold-500);
        }
      `}</style>

      <div className="container-shell py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p
              className="text-[0.85rem] tracking-[0.1em] uppercase"
              style={{ fontFamily: "var(--font-cormorant)", color: "rgba(245,240,232,0.6)" }}
            >
              SCI Domaine des Launes
            </p>
            <p className="mt-1 text-[0.72rem] tracking-[0.04em]" style={{ color: "rgba(245,240,232,0.3)" }}>
              Beuil – Les Launes, Alpes-Maritimes, France · Near Parc National du Mercantour
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="footer-link text-[0.7rem] tracking-[0.1em] uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div
          className="mt-8 flex flex-col gap-2 pt-6 text-[0.65rem] leading-relaxed md:flex-row md:items-center md:justify-between"
          style={{ borderTop: "1px solid rgba(201,169,110,0.06)", color: "rgba(245,240,232,0.2)" }}
        >
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} SCI Domaine des Launes. All rights reserved.
          </p>
          <p className="max-w-lg md:text-right">
            This website presents a development opportunity. Availability and planning conditions are subject to due diligence and local approvals.
          </p>
        </div>
      </div>
    </footer>
  );
}
