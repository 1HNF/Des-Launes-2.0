import type { Metadata } from "next";
import { SectionBlock } from "@/components/SectionBlock";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Company presentation and project fundamentals for SCI Domaine des Launes: a premium alpine land development opportunity in Beuil, Alpes-Maritimes, France."
};

export default function AboutPage() {
  return (
    <div>
      <SectionBlock
        eyebrow="Company"
        title="SCI Domaine des Launes —<br>focused on premium alpine development"
        titleAs="h1"
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4 text-[0.95rem] leading-[1.85]" style={{ color: "rgba(245,240,232,0.65)" }}>
              <p>
                SCI Domaine des Launes presents an exclusive development land
                opportunity in Beuil, Alpes-Maritimes, in the South of France —
                near Parc National du Mercantour.
              </p>
              <p>
                The asset is a 22,000 m² land plot (2.2 ha), close to rectangular
                in shape and oriented north–south. The site has no major elevation
                differences, which is favorable for the construction of residential
                units and on-site circulation.
              </p>
              <p>
                The land is well positioned for a high-quality, low-rise programme —
                including individual chalets and townhouse-style duplexes — designed
                for a discerning alpine buyer and rental market.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="card-dark p-6">
              <p
                className="mb-4 text-[0.7rem] tracking-[0.14em] uppercase"
                style={{ color: "var(--color-gold-500)" }}
              >
                Development Intent (Conceptual)
              </p>
              <ul className="space-y-3">
                {[
                  "Individual chalets",
                  "Duplex townhouses",
                  "Potential hospitality component (subject to permits)"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.83rem] leading-snug" style={{ color: "rgba(245,240,232,0.6)" }}>
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--color-gold-500)", opacity: 0.6 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[0.7rem] leading-relaxed" style={{ color: "rgba(245,240,232,0.3)" }}>
                Any concept is indicative and remains subject to technical studies,
                planning constraints, and approvals.
              </p>
            </div>
          </Reveal>
        </div>
      </SectionBlock>

      <div className="hairline h-px w-full" />

      <SectionBlock eyebrow="Approach" title="Investor-grade communication" dark>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Clarity",
              body: "We focus on verifiable site fundamentals — location, access, buildability, and demand drivers — supported by due diligence."
            },
            {
              title: "Alignment of Interests",
              body: "Our communication is structured for professional investors: clear positioning, conservative assumptions, and no fabricated numbers."
            }
          ].map((card) => (
            <Reveal key={card.title}>
              <div className="card-dark p-6">
                <p
                  className="mb-3 text-[1.05rem]"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, color: "var(--color-cream-50)" }}
                >
                  {card.title}
                </p>
                <p className="text-[0.85rem] leading-[1.75]" style={{ color: "rgba(245,240,232,0.5)" }}>
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionBlock>
    </div>
  );
}
