import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600"],
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SCI Domaine des Launes | Premium Alpine Development Opportunity",
    template: "%s | SCI Domaine des Launes"
  },
  description:
    "Premium real estate investment opportunity: a 22,000 m² alpine land development project near Parc National du Mercantour, close to ski lifts and within reach of Nice.",
  openGraph: {
    type: "website",
    siteName: "SCI Domaine des Launes",
    title: "SCI Domaine des Launes | Premium Alpine Development Opportunity",
    description:
      "22,000 m² investment land in the French Alps near Mercantour National Park, with strong year-round tourism fundamentals.",
    url: "/"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jost.variable} ${cormorant.variable} h-full`}>
      <body className="min-h-full">
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
