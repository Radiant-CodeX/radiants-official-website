'use client';
import React from 'react'
import "./styles.css";
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

/* ─── Card Visuals (SVG illustrations) ───────────────────── */

const PixelsVisual = () => (
  <svg viewBox="0 0 480 288" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    {/* Browser chrome */}
    <rect x="20" y="16" width="440" height="256" rx="12" fill="rgba(26,26,26,0.06)" />
    <rect x="20" y="16" width="440" height="38" rx="12" fill="rgba(26,26,26,0.1)" />
    <circle cx="44" cy="35" r="6" fill="rgba(26,26,26,0.25)" />
    <circle cx="62" cy="35" r="6" fill="rgba(26,26,26,0.25)" />
    <circle cx="80" cy="35" r="6" fill="rgba(26,26,26,0.25)" />
    <rect x="110" y="27" width="260" height="16" rx="8" fill="rgba(26,26,26,0.08)" />
    {/* Hero image block */}
    <rect x="36" y="72" width="408" height="110" rx="8" fill="rgba(26,26,26,0.09)" />
    {/* Accent bar */}
    <rect x="36" y="72" width="200" height="110" rx="8" fill="rgba(12,172,138,0.18)" />
    <rect x="56" y="100" width="120" height="12" rx="6" fill="rgba(12,172,138,0.7)" />
    <rect x="56" y="122" width="80" height="8" rx="4" fill="rgba(12,172,138,0.4)" />
    <rect x="56" y="142" width="60" height="8" rx="4" fill="rgba(12,172,138,0.4)" />
    {/* Right image placeholder */}
    <rect x="252" y="88" width="176" height="80" rx="6" fill="rgba(26,26,26,0.12)" />
    {/* Content cards */}
    <rect x="36" y="198" width="120" height="56" rx="8" fill="rgba(26,26,26,0.08)" />
    <rect x="36" y="210" width="60" height="8" rx="4" fill="rgba(26,26,26,0.3)" />
    <rect x="36" y="226" width="80" height="6" rx="3" fill="rgba(26,26,26,0.15)" />
    <rect x="36" y="238" width="70" height="6" rx="3" fill="rgba(26,26,26,0.1)" />
    <rect x="172" y="198" width="120" height="56" rx="8" fill="rgba(26,26,26,0.08)" />
    <rect x="172" y="210" width="60" height="8" rx="4" fill="rgba(26,26,26,0.3)" />
    <rect x="172" y="226" width="80" height="6" rx="3" fill="rgba(26,26,26,0.15)" />
    <rect x="172" y="238" width="70" height="6" rx="3" fill="rgba(26,26,26,0.1)" />
    {/* CTA button */}
    <rect x="350" y="220" width="94" height="32" rx="16" fill="rgba(26,26,26,0.85)" />
    <rect x="366" y="231" width="54" height="8" rx="4" fill="rgba(235,235,235,0.7)" />
  </svg>
);

const CoresVisual = () => (
  <svg viewBox="0 0 480 288" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    {/* Grid dots background */}
    {Array.from({ length: 10 }).map((_, col) =>
      Array.from({ length: 6 }).map((_, row) => (
        <circle
          key={`${col}-${row}`}
          cx={40 + col * 44}
          cy={24 + row * 48}
          r={2}
          fill="rgba(26,26,26,0.12)"
        />
      ))
    )}
    {/* PCB traces */}
    <path d="M40 72 L160 72 L160 144" stroke="rgba(12,172,138,0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M440 120 L320 120 L320 192 L240 192" stroke="rgba(26,26,26,0.3)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M40 168 L100 168 L100 240 L160 240" stroke="rgba(26,26,26,0.2)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M320 72 L400 72 L400 168 L440 168" stroke="rgba(12,172,138,0.35)" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Via pads */}
    <circle cx="160" cy="72" r="5" fill="rgba(12,172,138,0.7)" />
    <circle cx="160" cy="144" r="4" fill="rgba(26,26,26,0.35)" />
    <circle cx="320" cy="120" r="4" fill="rgba(26,26,26,0.35)" />
    <circle cx="320" cy="72"  r="5" fill="rgba(12,172,138,0.5)" />
    <circle cx="100" cy="168" r="4" fill="rgba(26,26,26,0.3)" />
    <circle cx="240" cy="192" r="4" fill="rgba(26,26,26,0.3)" />
    {/* Main IC chip */}
    <rect x="160" y="96" width="160" height="96" rx="6" fill="rgba(26,26,26,0.85)" />
    <rect x="172" y="108" width="136" height="72" rx="3" fill="rgba(26,26,26,0.95)" />
    {/* Chip pins - left */}
    <rect x="136" y="112" width="24" height="5" rx="2.5" fill="rgba(26,26,26,0.5)" />
    <rect x="136" y="128" width="24" height="5" rx="2.5" fill="rgba(26,26,26,0.5)" />
    <rect x="136" y="144" width="24" height="5" rx="2.5" fill="rgba(26,26,26,0.5)" />
    <rect x="136" y="160" width="24" height="5" rx="2.5" fill="rgba(26,26,26,0.5)" />
    {/* Chip pins - right */}
    <rect x="320" y="112" width="24" height="5" rx="2.5" fill="rgba(26,26,26,0.5)" />
    <rect x="320" y="128" width="24" height="5" rx="2.5" fill="rgba(26,26,26,0.5)" />
    <rect x="320" y="144" width="24" height="5" rx="2.5" fill="rgba(26,26,26,0.5)" />
    <rect x="320" y="160" width="24" height="5" rx="2.5" fill="rgba(26,26,26,0.5)" />
    {/* Chip label */}
    <rect x="200" y="130" width="80" height="10" rx="5" fill="rgba(235,235,235,0.15)" />
    <rect x="210" y="148" width="60" height="8" rx="4" fill="rgba(12,172,138,0.4)" />
    {/* Small passive components */}
    <rect x="60" y="200" width="28" height="14" rx="3" fill="rgba(26,26,26,0.4)" />
    <rect x="60" y="196" width="4" height="22" rx="2" fill="rgba(26,26,26,0.3)" />
    <rect x="84" y="196" width="4" height="22" rx="2" fill="rgba(26,26,26,0.3)" />
    <rect x="390" y="60" width="28" height="14" rx="3" fill="rgba(26,26,26,0.4)" />
  </svg>
);

const AgentsVisual = () => (
  <svg viewBox="0 0 480 288" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    {/* Connection lines - layer 0 to 1 */}
    {[56, 104, 152, 200].map((y1) =>
      [80, 128, 176].map((y2) => (
        <line key={`${y1}-${y2}`} x1="100" y1={y1} x2="210" y2={y2}
          stroke="rgba(26,26,26,0.1)" strokeWidth="1.5" />
      ))
    )}
    {/* Connection lines - layer 1 to 2 */}
    {[80, 128, 176].map((y1) =>
      [72, 120, 168, 216].map((y2) => (
        <line key={`${y1}-${y2}`} x1="210" y1={y1} x2="320" y2={y2}
          stroke="rgba(26,26,26,0.1)" strokeWidth="1.5" />
      ))
    )}
    {/* Connection lines - layer 2 to 3 */}
    {[72, 120, 168, 216].map((y1) =>
      [96, 144, 192].map((y2) => (
        <line key={`${y1}-${y2}`} x1="320" y1={y1} x2="420" y2={y2}
          stroke="rgba(26,26,26,0.1)" strokeWidth="1.5" />
      ))
    )}
    {/* Highlighted active path */}
    <line x1="100" y1="104" x2="210" y2="128" stroke="rgba(12,172,138,0.5)" strokeWidth="2" />
    <line x1="210" y1="128" x2="320" y2="120" stroke="rgba(12,172,138,0.5)" strokeWidth="2" />
    <line x1="320" y1="120" x2="420" y2="144" stroke="rgba(12,172,138,0.6)" strokeWidth="2" />
    {/* Input layer nodes */}
    {[56, 104, 152, 200].map((y) => (
      <circle key={y} cx="100" cy={y} r="10"
        fill={y === 104 ? "rgba(12,172,138,0.85)" : "rgba(26,26,26,0.2)"}
        stroke={y === 104 ? "rgba(12,172,138,1)" : "rgba(26,26,26,0.35)"}
        strokeWidth="1.5" />
    ))}
    {/* Hidden layer 1 */}
    {[80, 128, 176].map((y) => (
      <circle key={y} cx="210" cy={y} r="12"
        fill={y === 128 ? "rgba(12,172,138,0.7)" : "rgba(26,26,26,0.15)"}
        stroke={y === 128 ? "rgba(12,172,138,0.9)" : "rgba(26,26,26,0.3)"}
        strokeWidth="1.5" />
    ))}
    {/* Hidden layer 2 */}
    {[72, 120, 168, 216].map((y) => (
      <circle key={y} cx="320" cy={y} r="12"
        fill={y === 120 ? "rgba(12,172,138,0.6)" : "rgba(26,26,26,0.15)"}
        stroke={y === 120 ? "rgba(12,172,138,0.8)" : "rgba(26,26,26,0.3)"}
        strokeWidth="1.5" />
    ))}
    {/* Output layer */}
    {[96, 144, 192].map((y) => (
      <circle key={y} cx="420" cy={y} r="10"
        fill={y === 144 ? "rgba(12,172,138,0.9)" : "rgba(26,26,26,0.12)"}
        stroke={y === 144 ? "rgba(12,172,138,1)" : "rgba(26,26,26,0.25)"}
        strokeWidth="1.5" />
    ))}
    {/* Layer labels */}
    <text x="100" y="240" textAnchor="middle" fontSize="10" fill="rgba(26,26,26,0.3)" fontFamily="monospace">Input</text>
    <text x="210" y="240" textAnchor="middle" fontSize="10" fill="rgba(26,26,26,0.3)" fontFamily="monospace">Hidden</text>
    <text x="320" y="240" textAnchor="middle" fontSize="10" fill="rgba(26,26,26,0.3)" fontFamily="monospace">Hidden</text>
    <text x="420" y="240" textAnchor="middle" fontSize="10" fill="rgba(26,26,26,0.3)" fontFamily="monospace">Output</text>
  </svg>
);

const SaaSVisual = () => (
  <svg viewBox="0 0 480 288" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    {/* Dashboard frame */}
    <rect x="20" y="16" width="440" height="256" rx="12" fill="rgba(26,26,26,0.05)" />
    {/* Top nav strip */}
    <rect x="20" y="16" width="440" height="36" rx="12" fill="rgba(26,26,26,0.08)" />
    <rect x="36" y="26" width="70" height="14" rx="7" fill="rgba(26,26,26,0.3)" />
    <rect x="360" y="24" width="80" height="18" rx="9" fill="rgba(12,172,138,0.7)" />
    {/* Metric cards */}
    <rect x="36" y="68" width="118" height="60" rx="8" fill="rgba(26,26,26,0.08)" />
    <rect x="44" y="78" width="50" height="8" rx="4" fill="rgba(26,26,26,0.2)" />
    <rect x="44" y="96" width="80" height="16" rx="4" fill="rgba(26,26,26,0.55)" />
    <rect x="168" y="68" width="118" height="60" rx="8" fill="rgba(26,26,26,0.08)" />
    <rect x="176" y="78" width="50" height="8" rx="4" fill="rgba(26,26,26,0.2)" />
    <rect x="176" y="96" width="80" height="16" rx="4" fill="rgba(12,172,138,0.7)" />
    <rect x="300" y="68" width="140" height="60" rx="8" fill="rgba(26,26,26,0.08)" />
    <rect x="308" y="78" width="50" height="8" rx="4" fill="rgba(26,26,26,0.2)" />
    <rect x="308" y="96" width="80" height="16" rx="4" fill="rgba(26,26,26,0.4)" />
    {/* Bar chart */}
    <rect x="36" y="148" width="250" height="104" rx="8" fill="rgba(26,26,26,0.06)" />
    <rect x="52" y="158" width="50" height="8" rx="4" fill="rgba(26,26,26,0.25)" />
    {/* Bars */}
    {[
      { x: 52,  h: 44, accent: false },
      { x: 90,  h: 60, accent: false },
      { x: 128, h: 36, accent: false },
      { x: 166, h: 72, accent: true  },
      { x: 204, h: 50, accent: false },
      { x: 242, h: 64, accent: false },
    ].map((b) => (
      <rect key={b.x} x={b.x} y={232 - b.h} width="28" height={b.h} rx="4"
        fill={b.accent ? "rgba(12,172,138,0.75)" : "rgba(26,26,26,0.2)"} />
    ))}
    {/* Right: activity list */}
    <rect x="300" y="148" width="140" height="104" rx="8" fill="rgba(26,26,26,0.06)" />
    <rect x="312" y="158" width="50" height="8" rx="4" fill="rgba(26,26,26,0.25)" />
    {[172, 190, 208, 226].map((y) => (
      <g key={y}>
        <circle cx="322" cy={y + 4} r="4" fill="rgba(26,26,26,0.2)" />
        <rect x="332" y={y} width="80" height="7" rx="3.5" fill="rgba(26,26,26,0.12)" />
      </g>
    ))}
  </svg>
);

/* ─── Card data ───────────────────────────────────────────── */
const stickyCardsData = [
  {
    index: '01',
    title: 'Pixels',
    Visual: PixelsVisual,
    description:
      'Radiant Pixels specializes in crafting visually stunning, UI-centric web and mobile applications. We bring ideas to life with pixel-perfect interfaces and seamless user experiences that blend aesthetics with performance.',
  },
  {
    index: '02',
    title: 'Cores',
    Visual: CoresVisual,
    description:
      'Radiant Cores delivers innovative hardware solutions — from embedded systems to custom-built devices. We design and engineer robust, efficient hardware tailored to meet real-world demands and integrate seamlessly with software ecosystems.',
  },
  {
    index: '03',
    title: 'Agents',
    Visual: AgentsVisual,
    description:
      'Radiant Agents powers the future with cutting-edge AI automation and intelligent software solutions. We build adaptive systems that learn, evolve, and optimize workflows, driving efficiency and unlocking new capabilities.',
  },
  {
    index: '04',
    title: 'SaaS',
    Visual: SaaSVisual,
    description:
      'Radiant SaaS turns visionary ideas into reality — delivering complete end-to-end solutions across both software and hardware. From concept to launch, we transform bold concepts into scalable products that accelerate business growth.',
  },
];

const StickyCards = () => {
  const container = useRef(null);

  useGSAP(() => {
    const stickyCards = document.querySelectorAll('.sticky-card');

    stickyCards.forEach((card, index) => {
      if (index < stickyCards.length - 1) {
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          endTrigger: stickyCards[stickyCards.length - 1],
          end: 'top top',
          pin: true,
          pinSpacing: false,
        });
      }

      if (index < stickyCards.length - 1) {
        ScrollTrigger.create({
          trigger: stickyCards[index + 1],
          start: 'top bottom',
          end: 'top top',
          onUpdate: (self) => {
            const progress = self.progress;
            const scale = 1 - progress * 0.25;
            const rotation = (index % 2 === 0 ? 5 : -5) * progress;
            const afterOpacity = progress;

            gsap.set(card, {
              scale,
              rotation,
              '--after-opacity': afterOpacity,
            });
          },
        });
      }
    });
  }, [container]);

  return (
    <div className="sticky-cards" ref={container}>
      {stickyCardsData.map((cardData, index) => (
        <div className="sticky-card" key={index}>
          <div className="sticky-card-index">
            <h1 className="h1">{cardData.index}</h1>
          </div>
          <div className="sticky-card-content">
            <div className="sticky-card-content-wrapper">
              <h1 className="sticky-card-header h1">{cardData.title}</h1>

              <div className="sticky-card-img">
                <cardData.Visual />
              </div>

              <div className="sticky-card-copy">
                <div className="sticky-card-copy-title">
                  <p className="p">(About the Sector)</p>
                </div>
                <div className="sticky-card-copy-description">
                  <p className="p">{cardData.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyCards;
