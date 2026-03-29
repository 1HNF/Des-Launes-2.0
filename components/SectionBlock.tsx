import Link from "next/link";
import { ReactNode } from "react";

type SectionBlockProps = {
  eyebrow?: string;
  title: string;
  titleAs?: "h1" | "h2";
  children: ReactNode;
  cta?: { href: string; label: string };
  dark?: boolean;
};

export function SectionBlock({
  eyebrow,
  title,
  titleAs = "h2",
  children,
  cta,
  dark = false
}: SectionBlockProps) {
  const TitleTag = titleAs;

  return (
    <section
      className="py-16 sm:py-20"
      style={dark ? { background: "var(--color-ink-800)" } : undefined}
    >
      <div className="container-shell">
        {eyebrow && (
          <p className="eyebrow-label mb-4">{eyebrow}</p>
        )}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <TitleTag
            className="max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              color: "var(--color-cream-50)"
            }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {cta && (
            <Link href={cta.href} className="btn-outline shrink-0">
              {cta.label}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          )}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
