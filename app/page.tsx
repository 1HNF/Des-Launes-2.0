import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { SectionBlock } from "@/components/SectionBlock";
import { InvestmentHighlights } from "@/components/InvestmentHighlights";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premium Alpine Development Opportunity",
  description:
    "SCI Domaine des Launes presents a 22,000 m² investment land opportunity near Parc National du Mercantour, close to ski lifts and within reach of Nice Airport."
};

export default function HomePage() {
  return (
    <div>
      <HeroSection
        title="A Rare Alpine Land Opportunity"
        titleItalic="in the French Alps"
        subtitle="22,000 m² bordering Parc National du Mercantour — 200 m from ski lifts, ~1 hour from Nice and the Mediterranean coast. A site of exceptional scarcity."
        primaryCta={{ href: "/contact", label: "Request Investment Details" }}
        secondaryCta={{ href: "/investment", label: "View Investment Thesis" }}
      />

      {/* Overview */}
      <SectionBlock
        eyebrow="Project Overview"
        title="A strategically located alpine<br>development opportunity"
        cta={{ href: "/location", label: "Explore the location" }}
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div>
              <p className="text-[0.95rem] leading-[1.85]" style={{ color: "rgba(245,240,232,0.65)" }}>
                SCI Domaine des Launes presents an exclusive land opportunity in
                Beuil – Les Launes (Alpes-Maritimes), in the South of France. The
                plot measures 22,000 m² (2.2 ha), is close to rectangular, and
                benefits from the absence of significant elevation differences — an
                advantageous profile for residential construction.
              </p>
              <p className="mt-4 text-[0.95rem] leading-[1.85]" style={{ color: "rgba(245,240,232,0.65)" }}>
                The site is positioned for premium chalet and townhouse concepts,
                supporting ski-driven seasonality as well as year-round tourism
                anchored by protected nature, hiking, and regional attractions.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="card-dark p-6">
              <p
                className="mb-4 text-[0.7rem] tracking-[0.14em] uppercase"
                style={{ color: "var(--color-gold-500)" }}
              >
                Key Investment Lens
              </p>
              <ul className="space-y-3">
                {[
                  "Scarcity value: park-adjacent alpine setting",
                  "Access: ~80 km from Nice and Mediterranean coast",
                  "Demand drivers: ski domain + summer activities",
                  "Premium chalet & townhouse development concept"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.83rem] leading-snug" style={{ color: "rgba(245,240,232,0.6)" }}>
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--color-gold-500)", opacity: 0.6 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-gold mt-6 w-full justify-center text-[0.68rem]!">
                Request Details
              </Link>
            </div>
          </Reveal>
        </div>
      </SectionBlock>

      <div className="hairline h-px w-full" />

      {/* Highlights */}
      <SectionBlock
        eyebrow="What Makes This Exceptional"
        title="Six reasons this site stands apart<br>in the <em>alpine market</em>"
        cta={{ href: "/contact", label: "Request an information pack" }}
        dark
      >
        <Reveal>
          <InvestmentHighlights />
        </Reveal>
      </SectionBlock>
    </div>
  );
}
