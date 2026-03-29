"use client";

const highlights = [
  {
    num: "01",
    title: "22,000 m² Land Plot",
    description:
      "A near-rectangular plot oriented north–south, with no major elevation differences — favorable for residential development at scale."
  },
  {
    num: "02",
    title: "6,465 m² Buildable Area",
    description:
      "Permitted buildable surface referenced for the site, supporting a premium low-rise programme without relying on mass-market density."
  },
  {
    num: "03",
    title: "200 m from Ski Lift",
    description:
      "Immediate proximity to lift infrastructure supports high seasonal occupancy, strong winter demand, and premium rental pricing power."
  },
  {
    num: "04",
    title: "Bordering Mercantour",
    description:
      "Located on the boundary of Parc National du Mercantour — an exceptional protected environment enhancing long-term desirability."
  },
  {
    num: "05",
    title: "Access via Road D28",
    description:
      "Convenient road access near D28, connecting to Nice's commercial centre, international airport, and the Mediterranean coastline."
  },
  {
    num: "06",
    title: "Year-Round Tourism",
    description:
      "Ski, hiking, golf, adventure park, and nature tourism support diversified demand well beyond winter seasonality."
  }
];

export function InvestmentHighlights() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      style={{
        border: "1px solid rgba(201,169,110,0.1)",
        gap: "1px",
        background: "rgba(201,169,110,0.06)"
      }}
    >
      {highlights.map((h) => (
        <div
          key={h.num}
          className="group p-7 transition-colors"
          style={{ background: "var(--color-ink-800)" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLDivElement).style.background =
              "var(--color-ink-700)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLDivElement).style.background =
              "var(--color-ink-800)")
          }
        >
          <p
            className="mb-4 text-[2rem] leading-none"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              color: "var(--color-gold-500)",
              opacity: 0.3
            }}
          >
            {h.num}
          </p>
          <p
            className="mb-3 text-[1.1rem] leading-snug"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 400,
              color: "var(--color-cream-50)"
            }}
          >
            {h.title}
          </p>
          <p
            className="text-[0.83rem] leading-[1.75]"
            style={{ color: "rgba(245,240,232,0.5)" }}
          >
            {h.description}
          </p>
        </div>
      ))}
    </div>
  );
}
