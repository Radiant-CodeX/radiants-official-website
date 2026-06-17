'use client';
import React from 'react';
import PageLayout from '@/components/PageLayout/PageLayout';
import Footer from '@/components/Sections/Footer/Footer';
import CopyLines from '@/components/Copy/CopyLines';

const services = [
  {
    num: '01',
    title: 'Web Development',
    desc: 'Full-stack web applications built for performance and scale. From landing pages to complex platforms — crafted with modern frameworks and pixel-perfect precision.',
  },
  {
    num: '02',
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile experiences that feel at home on any device. Seamless, fast, and beautifully designed for every screen size.',
  },
  {
    num: '03',
    title: 'UI / UX Design',
    desc: 'Interfaces that don\'t just look good — they work beautifully. We design with clarity, intent, and a deep understanding of how people interact with digital products.',
  },
];

const process = [
  { step: '01', label: 'Discover', note: 'Understanding your goals, users, and constraints.' },
  { step: '02', label: 'Design', note: 'Wireframes, prototypes, and visual systems.' },
  { step: '03', label: 'Develop', note: 'Clean, maintainable code built to last.' },
  { step: '04', label: 'Deploy', note: 'Ship fast, monitor carefully, iterate often.' },
];

export default function PixelsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section
        style={{
          height: '100vh',
          background: '#ebebeb',
          color: '#1a1a1a',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '0 8vw 4rem',
          position: 'relative',
        }}
      >
        <p
          style={{
            position: 'absolute',
            top: '120px',
            left: '8vw',
            fontFamily: 'Aeonik',
            fontSize: '11px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(26,26,26,0.45)',
          }}
        >
          Radiant Pixels &nbsp;/&nbsp; Digital Experiences
        </p>

        <h1
          style={{
            fontFamily: 'Blanquotey',
            fontSize: 'clamp(5rem, 24vw, 24vw)',
            lineHeight: 0.85,
            color: '#1a1a1a',
            margin: '0 0 2rem',
          }}
        >
          Pixels
        </h1>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: 'Aeonik',
              fontSize: 'clamp(0.9rem, 1.5vw, 1.25rem)',
              color: 'rgba(26,26,26,0.7)',
              maxWidth: '38ch',
              lineHeight: 1.6,
            }}
          >
            We craft visually stunning, UI-centric web and mobile applications that blend aesthetics with performance.
          </p>
          <a
            href="mailto:sparks@radiantsofficial.com"
            style={{
              fontFamily: 'Aeonik',
              fontSize: '0.85rem',
              color: '#1a1a1a',
              textDecoration: 'none',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              borderBottom: '1px solid #1a1a1a',
              paddingBottom: '2px',
            }}
          >
            Start a Project →
          </a>
        </div>
      </section>

      {/* Services */}
      <section
        style={{
          background: '#1a1a1a',
          color: '#ebebeb',
          padding: '6rem 8vw',
        }}
      >
        <p
          style={{
            fontFamily: 'Aeonik',
            fontSize: '11px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(235,235,235,0.4)',
            marginBottom: '4rem',
          }}
        >
          What We Build
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {services.map((s) => (
            <div
              key={s.num}
              style={{
                display: 'flex',
                gap: '4rem',
                padding: '2.5rem 0',
                borderTop: '1px solid rgba(235,235,235,0.1)',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ flex: '0 0 5rem' }}>
                <p style={{ fontFamily: 'Aeonik', fontSize: '11px', color: 'rgba(235,235,235,0.3)', letterSpacing: '2px' }}>
                  {s.num}
                </p>
              </div>
              <div style={{ flex: '1 1 200px' }}>
                <h3
                  style={{
                    fontFamily: 'Aeonik',
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    fontWeight: 700,
                    color: '#ebebeb',
                    marginBottom: '1rem',
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontFamily: 'Aeonik', fontSize: '0.95rem', color: 'rgba(235,235,235,0.55)', lineHeight: 1.8, maxWidth: '60ch' }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section
        style={{
          background: '#ebebeb',
          color: '#1a1a1a',
          padding: '6rem 8vw',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'Aeonik', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(26,26,26,0.4)' }}>
            How We Work
          </p>
          <CopyLines>
            <h2 style={{ fontFamily: 'Aeonik', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 700, maxWidth: '24ch', lineHeight: 1.3, textAlign: 'right', color: '#1a1a1a' }}>
              A clear process for delivering great work.
            </h2>
          </CopyLines>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0',
          }}
        >
          {process.map((p) => (
            <div key={p.step} style={{ padding: '2rem', borderTop: '1px solid rgba(26,26,26,0.15)' }}>
              <p style={{ fontFamily: 'Aeonik', fontSize: '11px', color: 'rgba(26,26,26,0.35)', letterSpacing: '2px', marginBottom: '1rem' }}>
                {p.step}
              </p>
              <h3 style={{ fontFamily: 'Blanquotey', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#1a1a1a', marginBottom: '0.75rem', lineHeight: 1 }}>
                {p.label}
              </h3>
              <p style={{ fontFamily: 'Aeonik', fontSize: '0.85rem', color: 'rgba(26,26,26,0.55)', lineHeight: 1.7 }}>
                {p.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section
        style={{
          background: '#1a1a1a',
          padding: '5rem 8vw',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        <h2 style={{ fontFamily: 'Blanquotey', fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#ebebeb', margin: 0, lineHeight: 1 }}>
          Ready to build something beautiful?
        </h2>
        <a
          href="mailto:sparks@radiantsofficial.com"
          style={{
            fontFamily: 'Aeonik',
            fontSize: '0.9rem',
            color: '#1a1a1a',
            background: '#ebebeb',
            textDecoration: 'none',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            padding: '1rem 2rem',
            borderRadius: '9999px',
            whiteSpace: 'nowrap',
          }}
        >
          Let&apos;s Talk
        </a>
      </section>

      <Footer />
    </PageLayout>
  );
}
