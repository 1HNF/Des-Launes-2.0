"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

type HeroSectionProps = {
  title: string;
  titleItalic?: string;
  subtitle: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

const stats = [
  { num: "22,000", label: "m² Land Plot" },
  { num: "6,465", label: "m² Buildable" },
  { num: "200 m", label: "To Ski Lift" },
  { num: "~1 hr", label: "From Nice" }
];

export function HeroSection({
  title,
  titleItalic,
  subtitle,
  primaryCta,
  secondaryCta
}: HeroSectionProps) {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-end overflow-hidden"
      style={{
        padding: "0 clamp(1.5rem,5vw,4rem) clamp(3rem,6vw,5rem)"
      }}
    >
      {/* Alpine background illustration */}
      <div className="absolute inset-0 z-0">
        <AlpineSVG />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,14,26,0.2) 0%, rgba(10,14,26,0.05) 35%, rgba(10,14,26,0.65) 65%, rgba(10,14,26,0.96) 100%)"
        }}
      />

      {/* Content */}
      <div className="relative z-[2] max-w-4xl">
        <div
          className="mb-6 flex items-center gap-3 text-[0.68rem] tracking-[0.2em] uppercase"
          style={{
            color: "var(--color-gold-500)",
            animation: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s both"
          }}
        >
          <span className="h-px w-7 bg-current opacity-50" />
          Premium Alpine Investment · French Alps
        </div>

        <h1
          className="mb-5 text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.05]"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 300,
            color: "var(--color-cream-50)",
            animation: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s both"
          }}
        >
          {title}
          {titleItalic && (
            <>
              <br />
              <em style={{ color: "var(--color-gold-300)", fontStyle: "italic" }}>
                {titleItalic}
              </em>
            </>
          )}
        </h1>

        <p
          className="mb-8 max-w-xl text-[clamp(0.9rem,1.5vw,1.05rem)] leading-[1.75]"
          style={{
            color: "rgba(245,240,232,0.6)",
            animation: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.7s both"
          }}
        >
          {subtitle}
        </p>

        <div
          className="mb-10 flex flex-wrap gap-3"
          style={{ animation: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.9s both" }}
        >
          {primaryCta && (
            <Link href={primaryCta.href} className="btn-gold">
              {primaryCta.label}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          )}
          {secondaryCta && (
            <Link href={secondaryCta.href} className="btn-outline">
              {secondaryCta.label}
            </Link>
          )}
        </div>

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4"
          style={{
            border: "1px solid rgba(201,169,110,0.12)",
            background: "rgba(10,14,26,0.65)",
            backdropFilter: "blur(16px)",
            animation: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 1.1s both"
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="px-5 py-4"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid rgba(201,169,110,0.1)" : "none"
              }}
            >
              <p
                className="text-[1.5rem] leading-none"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 300,
                  color: "var(--color-gold-300)"
                }}
              >
                {s.num}
              </p>
              <p className="mt-1 text-[0.62rem] tracking-[0.12em] uppercase" style={{ color: "rgba(245,240,232,0.35)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 right-10 z-[2] flex flex-col items-center gap-2"
        style={{ animation: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 1.5s both" }}
      >
        <span
          className="text-[0.58rem] tracking-[0.18em] uppercase"
          style={{ writingMode: "vertical-rl", color: "rgba(245,240,232,0.25)" }}
        >
          Scroll
        </span>
        <div
          className="w-px"
          style={{
            height: "40px",
            background: "linear-gradient(to bottom, var(--color-gold-500), transparent)",
            animation: "scrollPulse 2s ease-in-out infinite"
          }}
        />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}

function AlpineSVG() {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1528"/>
          <stop offset="45%" stopColor="#1a2a4a"/>
          <stop offset="100%" stopColor="#2d3f5e"/>
        </linearGradient>
        <linearGradient id="hSnow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8e4dc"/>
          <stop offset="30%" stopColor="#c8c2b4"/>
          <stop offset="100%" stopColor="#8a9aaa"/>
        </linearGradient>
        <linearGradient id="hMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6b7d6a"/>
          <stop offset="100%" stopColor="#3d4a3e"/>
        </linearGradient>
        <linearGradient id="hForest" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2d3d2e"/>
          <stop offset="100%" stopColor="#1a2518"/>
        </linearGradient>
        <radialGradient id="hMoonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c9a96e" stopOpacity="0.12"/>
          <stop offset="100%" stopColor="#c9a96e" stopOpacity="0"/>
        </radialGradient>
        <filter id="hBlur"><feGaussianBlur stdDeviation="3"/></filter>
      </defs>

      {/* Sky */}
      <rect width="1440" height="900" fill="url(#hSky)"/>

      {/* Stars — fixed opacity, no Math.random (avoids hydration mismatch) */}
      {([
        [120,80,1,0.75],[240,55,0.8,0.55],[380,90,1.2,0.65],[520,45,0.7,0.70],[680,70,1,0.50],
        [820,40,0.9,0.80],[960,85,1.1,0.60],[1100,50,0.7,0.72],[1250,75,1,0.58],[1380,35,0.8,0.63],
        [160,130,0.6,0.50],[440,115,0.8,0.68],[750,120,0.6,0.52],[1050,110,0.9,0.75],[1320,100,0.7,0.60]
      ] as [number,number,number,number][]).map(([cx,cy,r,op], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#e8d5a3" opacity={op}/>
      ))}
      {/* Moon */}
      <ellipse cx="1150" cy="110" rx="110" ry="110" fill="url(#hMoonGlow)" filter="url(#hBlur)"/>
      <circle cx="1150" cy="110" r="18" fill="#f5f0e8" opacity="0.88"/>

      {/* Distant mountains */}
      <path d="M0 380 L120 260 L240 310 L360 230 L480 280 L600 200 L720 260 L840 190 L960 250 L1080 180 L1200 240 L1320 200 L1440 260 L1440 900 L0 900Z" fill="#3d5068" opacity="0.45"/>

      {/* Main snow peaks */}
      <path d="M-50 500 L180 220 L260 280 L360 160 L440 210 L520 180 L600 230 L720 130 L820 200 L900 150 L980 210 L1080 120 L1160 185 L1260 160 L1360 210 L1490 290 L1490 900 L-50 900Z" fill="url(#hSnow)"/>

      {/* Snow highlights */}
      <path d="M360 160 L440 210 L425 232 L388 212Z" fill="white" opacity="0.55"/>
      <path d="M720 130 L820 200 L800 218 L748 188Z" fill="white" opacity="0.65"/>
      <path d="M1080 120 L1160 185 L1142 200 L1102 168Z" fill="white" opacity="0.6"/>

      {/* Mid mountains */}
      <path d="M-50 560 L150 380 L280 430 L420 360 L560 410 L680 340 L800 390 L940 320 L1060 380 L1200 340 L1340 400 L1490 360 L1490 900 L-50 900Z" fill="url(#hMid)"/>

      {/* Forest treeline */}
      <path d="M-50 640 L0 580 L50 620 L80 560 L130 620 L160 570 L210 635 L240 575 L290 645 L320 590 L370 655 L400 605 L450 665 L490 620 L540 670 L580 625 L620 680 L660 640 L710 690 L750 650 L800 700 L840 660 L890 710 L930 665 L980 720 L1020 675 L1070 725 L1110 680 L1160 735 L1200 690 L1250 745 L1290 700 L1340 755 L1380 710 L1440 760 L1490 720 L1490 900 L-50 900Z" fill="url(#hForest)"/>

      {/* Pine silhouettes */}
      <g fill="#1a2518">
        <polygon points="50,760 70,680 90,760"/>
        <polygon points="40,780 65,700 90,780"/>
        <polygon points="90,750 115,665 140,750"/>
        <polygon points="250,755 275,670 300,755"/>
        <polygon points="265,775 292,690 318,775"/>
        <polygon points="580,760 605,675 630,760"/>
        <polygon points="568,780 598,695 628,780"/>
        <polygon points="620,745 648,658 676,745"/>
        <polygon points="1100,750 1128,660 1156,750"/>
        <polygon points="1090,775 1120,690 1150,775"/>
        <polygon points="1150,745 1180,658 1210,745"/>
        <polygon points="1280,760 1308,672 1336,760"/>
      </g>

      {/* Ground */}
      <path d="M0 820 Q360 790 720 830 Q1080 865 1440 820 L1440 900 L0 900Z" fill="#111a10"/>

      {/* Subtle lift cables */}
      <line x1="700" y1="430" x2="500" y2="650" stroke="#c9a96e" strokeWidth="0.5" opacity="0.18"/>
      <line x1="700" y1="430" x2="900" y2="640" stroke="#c9a96e" strokeWidth="0.5" opacity="0.18"/>
      <line x1="580" y1="545" x2="580" y2="578" stroke="#c9a96e" strokeWidth="1" opacity="0.2"/>
      <line x1="700" y1="430" x2="700" y2="473" stroke="#c9a96e" strokeWidth="1.2" opacity="0.25"/>
      <line x1="820" y1="535" x2="820" y2="568" stroke="#c9a96e" strokeWidth="1" opacity="0.2"/>
    </svg>
  );
}
