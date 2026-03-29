import type { Metadata } from "next";
import Link from "next/link";
import { SectionBlock } from "@/components/SectionBlock";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Investment",
  description:
    "An investor-focused overview of the development concept, target market, demand drivers, and local infrastructure for the SCI Domaine des Launes alpine land opportunity."
};

const investCards = [
  {
    title: "Residential Format",
    body: "Individual chalets and duplex townhouses designed for a discerning alpine buyer and rental market. Low-rise programme without mass-market density."
  },
  {
    title: "Four-Season Demand",
    body: "Short-term ski rentals, summer hiking and nature tourism, golf, and proximity to the Côte d'Azur support diversified cash flow across seasons."
  },
  {
    title: "Park-Adjacent Scarcity",
    body: "Sites of this size, profile, and proximity to a national park boundary are exceptionally rare. Scarcity of development land adjacent to Mercantour is a long-term value driver."
  },
  {
    title: "Local Infrastructure",
    body: "The area supports ~10 hotels, ~30 restaurants, a golf club, adventure park, and flying club — an established ecosystem that supports visitor confidence."
  },
  {
    title: "Strategy Flexibility",
    body: "Options include phased delivery, build-to-sell, or a hybrid model combining sales and professionally managed rentals — adaptable to market conditions."
  },
  {
    title: "Conservative Approach",
    body: "No fabricated revenue projections. Value creation potential is framed around verifiable fundamentals: location, access, buildability, and proven tourism flows."
  }
];

export default function InvestmentPage() {
  return (
    <div>
      <SectionBlock
        eyebrow="Investment Thesis"
        title="Positioned for premium alpine<br>residential <em>demand</em>"
        titleAs="h1"
        cta={{ href: "/contact", label: "Request investment details" }}
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4 text-[0.95rem] leading-[1.85]" style={{ color: "rgba(245,240,232,0.65)" }}>
              <p>
                This opportunity is structured for investors seeking exposure to a
                scarce, park-adjacent alpine location with established winter
                tourism and credible year-round activity drivers. The site's scale,
                access, and proximity to ski lifts support a premium positioning
                strategy without relying on mass-market density.
              </p>
              <p>
                We do not present speculative revenue projections on this website.
                Instead, the thesis is framed around fundamentals: location
                scarcity, infrastructure proximity, and the proven ability of the
                surrounding area to attract tourism flows.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="card-dark p-6">
              <p
                className="mb-5 text-[0.7rem] tracking-[0.14em] uppercase"
                style={{ color: "var(--color-gold-500)" }}
              >
                Investor-Ready Next Steps
              </p>
              <ol className="space-y-4">
                {[
                  "Receive the information pack and site summary",
                  "Review planning context and buildability",
                  "Align on strategy: hold, develop, or phased delivery"
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[0.65rem]"
                      style={{
                        border: "1px solid rgba(201,169,110,0.3)",
                        fontFamily: "var(--font-cormorant)",
                        color: "var(--color-gold-500)"
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-[0.83rem] leading-snug" style={{ color: "rgba(245,240,232,0.6)" }}>
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
              <Link href="/contact" className="btn-gold mt-6 w-full justify-center text-[0.68rem]!">
                Request the Pack
              </Link>
            </div>
          </Reveal>
        </div>
      </SectionBlock>

      <div className="hairline h-px w-full" />

      <SectionBlock
        eyebrow="Development Concept"
        title="A premium, low-rise programme<br>aligned with the <em>local market</em>"
        dark
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {investCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 80}>
              <div
                className="card-dark p-6 transition-colors"
                style={{ height: "100%" }}
              >
                <p
                  className="mb-3 text-[1.05rem]"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, color: "var(--color-cream-50)" }}
                >
                  {card.title}
                </p>
                <p className="text-[0.83rem] leading-[1.75]" style={{ color: "rgba(245,240,232,0.5)" }}>
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionBlock>

      <div className="hairline h-px w-full" />

      <SectionBlock eyebrow="Local Infrastructure" title="Amenities and tourism ecosystem<br>supporting <em>demand</em>">
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Hospitality Base",
              body: "In the local environment: 10 hotels with ~160 rooms in total, primarily small properties near ski stations."
            },
            {
              title: "Dining & Services",
              body: "Approximately 30 restaurants and cafés, including venues linked to hotels — supporting visitor experience and rental attractiveness."
            },
            {
              title: "Four-Season Attractions",
              body: "Golf club, adventure park, sports park, and a flying club contribute to diversified tourism flows."
            }
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <div className="card-dark p-6">
                <p className="mb-3 text-[1.05rem]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, color: "var(--color-cream-50)" }}>
                  {card.title}
                </p>
                <p className="text-[0.83rem] leading-[1.75]" style={{ color: "rgba(245,240,232,0.5)" }}>
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div
            className="mt-6 p-6"
            style={{
              background: "rgba(245,240,232,0.03)",
              border: "1px solid rgba(201,169,110,0.1)"
            }}
          >
            <p
              className="mb-2 text-[0.7rem] tracking-[0.14em] uppercase"
              style={{ color: "var(--color-gold-500)" }}
            >
              Financial Positioning (No Fabricated Numbers)
            </p>
            <p className="text-[0.85rem] leading-[1.8]" style={{ color: "rgba(245,240,232,0.55)" }}>
              Value creation may be driven by premium unit positioning, proximity
              to lift infrastructure, and the scarcity of development land adjacent
              to a protected national park. Strategy options typically include
              phased delivery, build-to-sell, or a hybrid model combining sales
              and professionally managed rentals — subject to market and regulatory
              conditions.
            </p>
          </div>
        </Reveal>
      </SectionBlock>
    </div>
  );
}
