import type { Metadata } from "next";
import { SectionBlock } from "@/components/SectionBlock";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Location",
  description:
    "Beuil – Les Launes (Alpes-Maritimes), near Parc National du Mercantour. Close to Beuil and Valberg ski stations and within ~1 hour from Nice and the Mediterranean coast."
};

export default function LocationPage() {
  return (
    <div>
      <SectionBlock
        eyebrow="Geography"
        title="South of France — alpine access<br>with <em>Mediterranean proximity</em>"
        titleAs="h1"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <p className="text-[0.95rem] leading-[1.85]" style={{ color: "rgba(245,240,232,0.65)" }}>
                The project is located in the Provence-Alpes region, in the
                Alpes-Maritimes department, in the Beuil – Les Launes area (also
                referenced locally as Le Bess). The site borders Parc National du
                Mercantour, one of France's protected national parks.
              </p>
              <ul className="mt-6 space-y-0">
                {[
                  "2 km from Beuil ski station",
                  "3.5 km from Valberg ski station",
                  "200 m from the nearest ski lift",
                  "~80 km (~1 hour) from Nice Airport and the Mediterranean coast",
                  "Road access via D28 (near the site)"
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-b py-3 text-[0.88rem]"
                    style={{
                      borderColor: "rgba(201,169,110,0.08)",
                      color: "rgba(245,240,232,0.6)"
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--color-gold-500)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div
              className="overflow-hidden"
              style={{ border: "1px solid rgba(201,169,110,0.15)" }}
            >
              {/* Illustrated map SVG */}
              <svg viewBox="0 0 560 420" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block", background: "#0d1a0f" }}>
                <defs>
                  <radialGradient id="lSiteDot" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c9a96e"/>
                    <stop offset="100%" stopColor="#c9a96e" stopOpacity="0"/>
                  </radialGradient>
                  <filter id="lGlow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                <rect width="560" height="420" fill="#0d1a0f"/>
                <path d="M0 0 L200 80 L280 20 L400 100 L560 30 L560 0Z" fill="#1a2f1a" opacity="0.8"/>
                <path d="M0 60 L150 150 L260 80 L380 160 L500 100 L560 140 L560 60Z" fill="#1f3520" opacity="0.7"/>
                <path d="M0 120 L100 200 L200 140 L320 220 L440 170 L560 210 L560 120Z" fill="#243d24" opacity="0.6"/>
                <path d="M80 0 Q120 80 160 140 Q190 190 220 250 Q250 310 280 380" stroke="#1e4d30" strokeWidth="1.5" fill="none" opacity="0.5"/>
                <path d="M350 0 Q370 60 340 120 Q320 170 350 230 Q375 285 360 360" stroke="#1e4d30" strokeWidth="1" fill="none" opacity="0.4"/>
                {[180, 240, 300, 350].map((y, i) => (
                  <path key={i} d={`M0 ${y} Q140 ${y-20} 280 ${y+10} Q420 ${y+30} 560 ${y+10}`} stroke="#2a4a2a" strokeWidth="0.5" fill="none" opacity="0.4"/>
                ))}
                <path d="M60 80 L160 40 L300 60 L420 30 L500 80 L520 180 L480 280 L400 340 L300 370 L180 360 L80 310 L40 200Z" stroke="#4a7a4a" strokeWidth="1.5" strokeDasharray="6 4" fill="#1a3a1a" fillOpacity="0.3"/>
                <text x="200" y="200" fontSize="8" fill="#4a8a4a" opacity="0.55" textAnchor="middle" fontFamily="'Jost',sans-serif" letterSpacing="2">PARC NATIONAL DU MERCANTOUR</text>
                <path d="M100 380 Q200 340 280 310 Q340 285 380 250 Q420 215 460 180 Q490 150 510 110" stroke="#8a9060" strokeWidth="2.5" fill="none" opacity="0.7"/>
                <text x="170" y="375" fontSize="8" fill="#a0a870" opacity="0.8" fontFamily="'Jost',sans-serif" letterSpacing="1.5" transform="rotate(-15,170,375)">D28</text>
                <circle cx="400" cy="180" r="5" fill="#4a7060" opacity="0.8"/>
                <circle cx="400" cy="180" r="12" fill="none" stroke="#4a7060" strokeWidth="0.8" opacity="0.5"/>
                <text x="416" y="177" fontSize="8" fill="#6a9080" opacity="0.9" fontFamily="'Jost',sans-serif" letterSpacing="1">VALBERG</text>
                <circle cx="320" cy="235" r="4" fill="#4a7060" opacity="0.7"/>
                <text x="333" y="232" fontSize="8" fill="#6a9080" opacity="0.85" fontFamily="'Jost',sans-serif" letterSpacing="1">BEUIL</text>
                <circle cx="290" cy="275" r="28" fill="url(#lSiteDot)" opacity="0.4"/>
                <rect x="279" y="264" width="22" height="22" fill="none" stroke="#c9a96e" strokeWidth="1.5" opacity="0.9"/>
                <rect x="283" y="268" width="14" height="14" fill="#c9a96e" opacity="0.2"/>
                <circle cx="290" cy="275" r="3" fill="#c9a96e" filter="url(#lGlow)"/>
                <text x="310" y="269" fontSize="9" fill="#c9a96e" fontFamily="'Cormorant Garamond',serif" letterSpacing="1.5" fontWeight="500">LES LAUNES</text>
                <text x="310" y="281" fontSize="7" fill="#c9a96e" opacity="0.65" fontFamily="'Jost',sans-serif" letterSpacing="1">22,000 m²</text>
                <line x1="290" y1="275" x2="390" y2="205" stroke="#c9a96e" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.35"/>
                <text x="326" y="244" fontSize="7" fill="#c9a96e" opacity="0.45" fontFamily="'Jost',sans-serif" transform="rotate(-30,326,244)">200m to lift</text>
                <path d="M100 380 L40 400" stroke="#8a8060" strokeWidth="1" opacity="0.5"/>
                <polygon points="40,400 55,393 50,403" fill="#8a8060" opacity="0.5"/>
                <text x="22" y="415" fontSize="8" fill="#8a8060" opacity="0.7" fontFamily="'Jost',sans-serif" letterSpacing="1">NICE ~80km</text>
                <line x1="530" y1="370" x2="530" y2="345" stroke="#c9a96e" strokeWidth="1" opacity="0.5"/>
                <polygon points="530,340 525,355 535,355" fill="#c9a96e" opacity="0.5"/>
                <text x="527" y="380" fontSize="8" fill="#c9a96e" opacity="0.5" fontFamily="'Jost',sans-serif">N</text>
                <line x1="440" y1="400" x2="520" y2="400" stroke="rgba(245,240,232,0.18)" strokeWidth="1"/>
                <line x1="440" y1="396" x2="440" y2="404" stroke="rgba(245,240,232,0.18)" strokeWidth="1"/>
                <line x1="520" y1="396" x2="520" y2="404" stroke="rgba(245,240,232,0.18)" strokeWidth="1"/>
                <text x="480" y="414" fontSize="7" fill="rgba(245,240,232,0.25)" fontFamily="'Jost',sans-serif" textAnchor="middle" letterSpacing="1">5 km</text>
              </svg>
              <p
                className="px-4 py-3 text-[0.65rem] leading-relaxed"
                style={{ color: "rgba(245,240,232,0.25)", borderTop: "1px solid rgba(201,169,110,0.08)" }}
              >
                Illustrative graphic. Exact boundaries, access, and planning context must be confirmed via due diligence and local documentation.
              </p>
            </div>
          </Reveal>
        </div>
      </SectionBlock>

      <div className="hairline h-px w-full" />

      <SectionBlock eyebrow="Ski Domain" title="A proven winter destination" dark>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Valberg–Beuil Ski Area",
              body: "The lift network serves approximately 90 km of slopes, across elevations from 1,430 m to 2,100 m. This scale and altitude range supports a strong winter tourism profile."
            },
            {
              title: "Immediate Lift Proximity",
              body: "With a ski lift approximately 200 m from the site, the location is well aligned with premium rental expectations and convenience-led pricing power."
            }
          ].map((card) => (
            <Reveal key={card.title}>
              <div className="card-dark p-6">
                <p className="mb-3 text-[1.05rem]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, color: "var(--color-cream-50)" }}>
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

      <div className="hairline h-px w-full" />

      <SectionBlock eyebrow="Four Seasons" title="Year-round tourism potential<br>beyond <em>ski season</em>">
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Nature & Hiking",
              body: "The Mercantour park environment supports strong off-peak demand through hiking, wildlife and landscape tourism, and outdoor sports."
            },
            {
              title: "Golf & Family Activities",
              body: "Local attractions include a golf club, adventure park, and sports facilities that extend the season into spring, summer, and autumn."
            },
            {
              title: "Côte d'Azur Accessibility",
              body: "Proximity to Nice and the Mediterranean coast enables a \"mountain + sea\" lifestyle and diversified buyer and renter segments."
            }
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <div className="card-dark p-6">
                <p className="mb-3 text-[1.05rem]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, color: "var(--color-cream-50)" }}>
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
