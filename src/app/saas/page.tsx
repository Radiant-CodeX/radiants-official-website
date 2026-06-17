'use client';
import React from 'react';
import PageLayout from '@/components/PageLayout/PageLayout';
import Footer from '@/components/Sections/Footer/Footer';
import CopyLines from '@/components/Copy/CopyLines';

const offerings = [
  {
    num: '01',
    title: 'End-to-End Development',
    desc: 'From concept to production — we handle the entire product lifecycle. Architecture, design, development, deployment, and ongoing maintenance all under one roof.',
  },
  {
    num: '02',
    title: 'Product Strategy',
    desc: 'We don\'t just build what you ask for — we help you figure out what to build. Roadmapping, user research, and competitive analysis to position your product for success.',
  },
  {
    num: '03',
    title: 'Scalable Infrastructure',
    desc: 'SaaS platforms built to grow with you. Cloud-native architectures, CI/CD pipelines, and monitoring systems that handle scale from day one.',
  },
];

const features = [
  { label: 'Multi-tenant Architecture' },
  { label: 'Authentication & Authorization' },
  { label: 'Subscription & Billing' },
  { label: 'Analytics & Dashboards' },
  { label: 'API-first Design' },
  { label: 'Real-time Features' },
  { label: 'White-labeling' },
  { label: 'Compliance & Security' },
];

export default function SaaSPage() {
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
          Radiant SaaS &nbsp;/&nbsp; Products That Scale
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
          SaaS
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
            Turning visionary ideas into complete, scalable software products — from concept to launch and beyond.
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
            Build Your Product →
          </a>
        </div>
      </section>

      {/* Offerings */}
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
          What We Deliver
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {offerings.map((o) => (
            <div
              key={o.num}
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
                  {o.num}
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
                  {o.title}
                </h3>
                <p style={{ fontFamily: 'Aeonik', fontSize: '0.95rem', color: 'rgba(235,235,235,0.55)', lineHeight: 1.8, maxWidth: '60ch' }}>
                  {o.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section
        style={{
          background: '#ebebeb',
          color: '#1a1a1a',
          padding: '6rem 8vw',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4rem', marginBottom: '4rem' }}>
          <div>
            <p style={{ fontFamily: 'Aeonik', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(26,26,26,0.4)', marginBottom: '1rem' }}>
              Built-in Features
            </p>
            <CopyLines>
              <h2 style={{ fontFamily: 'Aeonik', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 700, maxWidth: '22ch', lineHeight: 1.3, color: '#1a1a1a' }}>
                Everything a great SaaS product needs.
              </h2>
            </CopyLines>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '0',
          }}
        >
          {features.map((f) => (
            <div
              key={f.label}
              style={{
                padding: '1.5rem 0',
                borderTop: '1px solid rgba(26,26,26,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#1a1a1a',
                  flexShrink: 0,
                }}
              />
              <p style={{ fontFamily: 'Aeonik', fontSize: '1rem', color: '#1a1a1a', fontWeight: 600 }}>{f.label}</p>
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
          Have a product idea?
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
          Let&apos;s Build It
        </a>
      </section>

      <Footer />
    </PageLayout>
  );
}
