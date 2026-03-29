import type { Metadata } from "next";
import { SectionBlock } from "@/components/SectionBlock";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request investment details and receive an information pack for the SCI Domaine des Launes premium alpine development opportunity."
};

export default function ContactPage() {
  return (
    <div>
      <SectionBlock
        eyebrow="Get in Touch"
        title="Request the<br><em>Information Pack</em>"
        titleAs="h1"
      >
        <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
          <Reveal>
            <div className="flex flex-col gap-6">
              <p className="text-[0.9rem] leading-[1.85]" style={{ color: "rgba(245,240,232,0.6)" }}>
                Qualified investors and developers may request the full site summary,
                planning context overview, and supporting documentation. All enquiries
                are treated with strict confidentiality.
              </p>

              <div className="card-dark p-5">
                <p
                  className="mb-1 text-[0.95rem]"
                  style={{ fontFamily: "var(--font-cormorant)", color: "var(--color-cream-50)" }}
                >
                  SCI Domaine des Launes
                </p>
                <p className="text-[0.75rem] leading-relaxed" style={{ color: "rgba(245,240,232,0.35)" }}>
                  Beuil – Les Launes, Alpes-Maritimes, France
                </p>
                <p className="text-[0.75rem] leading-relaxed" style={{ color: "rgba(245,240,232,0.35)" }}>
                  Near Parc National du Mercantour
                </p>
              </div>

              <div className="space-y-2">
                {[
                  "Investor information pack on request",
                  "Planning context and buildability overview",
                  "Site access and location fundamentals"
                ].map((item) => (
                  <p key={item} className="flex items-start gap-3 text-[0.83rem]" style={{ color: "rgba(245,240,232,0.55)" }}>
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--color-gold-500)", opacity: 0.6 }} />
                    {item}
                  </p>
                ))}
              </div>

              <div
                className="p-4 text-[0.72rem] leading-relaxed"
                style={{
                  border: "1px solid rgba(201,169,110,0.1)",
                  color: "rgba(245,240,232,0.28)"
                }}
              >
                This website presents a development opportunity for information purposes
                only. Availability, planning conditions, and buildable surface are
                subject to technical studies, due diligence, and local approvals.
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-2">
            <div
              className="p-6 sm:p-8"
              style={{
                border: "1px solid rgba(201,169,110,0.12)",
                background: "rgba(245,240,232,0.02)"
              }}
            >
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </SectionBlock>
    </div>
  );
}
