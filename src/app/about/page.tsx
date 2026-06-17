'use client';
import React from 'react';
import PageLayout from '@/components/PageLayout/PageLayout';
import Footer from '@/components/Sections/Footer/Footer';
import CopyLines from '@/components/Copy/CopyLines';

const values = [
  {
    num: '01',
    title: 'Innovation',
    desc: 'We push the boundaries of what is possible — constantly exploring, experimenting, and evolving.',
  },
  {
    num: '02',
    title: 'Precision',
    desc: 'Every pixel, every circuit, every line of code is crafted with meticulous attention to detail.',
  },
  {
    num: '03',
    title: 'Speed',
    desc: 'We move fast without breaking things — delivering quality at a pace that keeps you ahead.',
  },
  {
    num: '04',
    title: 'Impact',
    desc: 'We measure success not by what we build, but by the real-world difference it makes.',
  },
];

export default function AboutPage() {
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
          EST. 2025 &nbsp;/&nbsp; Innovation Hub
        </p>

        <h1
          style={{
            fontFamily: 'Blanquotey',
            fontSize: 'clamp(5rem, 22vw, 22vw)',
            lineHeight: 0.85,
            color: '#1a1a1a',
            margin: '0 0 2rem',
          }}
        >
          About
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
            Making ideas into reality — one innovation at a time.
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
            Get in Touch →
          </a>
        </div>
      </section>

      {/* Story */}
      <section
        style={{
          background: '#1a1a1a',
          color: '#ebebeb',
          padding: '6rem 8vw',
          display: 'flex',
          gap: '6rem',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: '0 0 auto' }}>
          <p
            style={{
              fontFamily: 'Aeonik',
              fontSize: '11px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'rgba(235,235,235,0.4)',
            }}
          >
            Our Story
          </p>
        </div>
        <div style={{ flex: '1 1 340px', maxWidth: '680px' }}>
          <CopyLines>
            <h2
              style={{
                fontFamily: 'Aeonik',
                fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                fontWeight: 700,
                lineHeight: 1.45,
                color: '#ebebeb',
                marginBottom: '2rem',
              }}
            >
              Radiants was born from a simple belief: that bold ideas deserve world-class execution.
            </h2>
          </CopyLines>
          <p
            style={{
              fontFamily: 'Aeonik',
              fontSize: '1rem',
              color: 'rgba(235,235,235,0.6)',
              lineHeight: 1.85,
              marginBottom: '1.25rem',
            }}
          >
            We are a collective of engineers, designers, and builders united by a shared obsession with making things that matter. From pixel-perfect interfaces to precision hardware, from intelligent AI agents to scalable SaaS products — Radiants operates across every layer of the innovation stack.
          </p>
          <p
            style={{
              fontFamily: 'Aeonik',
              fontSize: '1rem',
              color: 'rgba(235,235,235,0.6)',
              lineHeight: 1.85,
            }}
          >
            Founded in 2025, we are building the future — one product, one system, one breakthrough at a time.
          </p>
        </div>
      </section>

      {/* Divisions */}
      <section
        style={{
          background: '#ebebeb',
          color: '#1a1a1a',
          padding: '6rem 8vw',
        }}
      >
        <p
          style={{
            fontFamily: 'Aeonik',
            fontSize: '11px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(26,26,26,0.4)',
            marginBottom: '4rem',
          }}
        >
          Our Divisions
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '0',
          }}
        >
          {[
            { href: '/pixels', label: 'Pixels', desc: 'UI-centric web & mobile experiences' },
            { href: '/cores', label: 'Cores', desc: 'Embedded systems & custom hardware' },
            { href: '/agents', label: 'Agents', desc: 'AI automation & intelligent software' },
            { href: '/saas', label: 'SaaS', desc: 'End-to-end scalable products' },
          ].map((d, i) => (
            <a
              key={d.label}
              href={d.href}
              style={{
                display: 'block',
                padding: '2rem',
                borderTop: '1px solid rgba(26,26,26,0.15)',
                borderLeft: i % 2 !== 0 ? '1px solid rgba(26,26,26,0.15)' : 'none',
                textDecoration: 'none',
                color: '#1a1a1a',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#1a1a1a0d')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <p
                style={{
                  fontFamily: 'Blanquotey',
                  fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                  lineHeight: 1,
                  marginBottom: '0.75rem',
                  color: '#1a1a1a',
                }}
              >
                {d.label}
              </p>
              <p
                style={{
                  fontFamily: 'Aeonik',
                  fontSize: '0.9rem',
                  color: 'rgba(26,26,26,0.55)',
                  lineHeight: 1.5,
                }}
              >
                {d.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Values */}
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
          What We Stand For
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {values.map((v) => (
            <div
              key={v.num}
              style={{ borderTop: '1px solid rgba(235,235,235,0.12)', paddingTop: '1.5rem' }}
            >
              <p
                style={{
                  fontFamily: 'Aeonik',
                  fontSize: '11px',
                  color: 'rgba(235,235,235,0.3)',
                  marginBottom: '0.5rem',
                  letterSpacing: '2px',
                }}
              >
                {v.num}
              </p>
              <h3
                style={{
                  fontFamily: 'Aeonik',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#ebebeb',
                  marginBottom: '0.75rem',
                }}
              >
                {v.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Aeonik',
                  fontSize: '0.9rem',
                  color: 'rgba(235,235,235,0.55)',
                  lineHeight: 1.75,
                }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
