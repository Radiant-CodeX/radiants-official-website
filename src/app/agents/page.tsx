'use client';
import React from 'react';
import PageLayout from '@/components/PageLayout/PageLayout';
import Footer from '@/components/Sections/Footer/Footer';
import CopyLines from '@/components/Copy/CopyLines';

const capabilities = [
  {
    num: '01',
    title: 'AI Automation',
    desc: 'Intelligent workflows that replace repetitive tasks with adaptive systems. We build pipelines that learn from data and optimize themselves over time.',
  },
  {
    num: '02',
    title: 'Intelligent Agents',
    desc: 'Autonomous software agents that perceive, reason, and act. From task-specific bots to complex multi-agent systems — we engineer intelligence that scales.',
  },
  {
    num: '03',
    title: 'ML Integration',
    desc: 'Bringing machine learning into production. We design, train, and deploy models that integrate seamlessly with your existing infrastructure and data pipelines.',
  },
];

const useCases = [
  { label: 'Document Processing', icon: '◈' },
  { label: 'Automated Reporting', icon: '◈' },
  { label: 'Customer Support Bots', icon: '◈' },
  { label: 'Predictive Analytics', icon: '◈' },
  { label: 'Code Generation', icon: '◈' },
  { label: 'Data Extraction', icon: '◈' },
  { label: 'Workflow Orchestration', icon: '◈' },
  { label: 'Intelligent Search', icon: '◈' },
];

export default function AgentsPage() {
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
          Radiant Agents &nbsp;/&nbsp; Intelligence at Scale
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
          Agents
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
            AI automation and intelligent software that learns, evolves, and unlocks new capabilities for your business.
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
            Explore AI Solutions →
          </a>
        </div>
      </section>

      {/* Capabilities */}
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {capabilities.map((c) => (
            <div
              key={c.num}
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
                  {c.num}
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
                  {c.title}
                </h3>
                <p style={{ fontFamily: 'Aeonik', fontSize: '0.95rem', color: 'rgba(235,235,235,0.55)', lineHeight: 1.8, maxWidth: '60ch' }}>
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section
        style={{
          background: '#ebebeb',
          color: '#1a1a1a',
          padding: '6rem 8vw',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4rem', marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'Aeonik', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(26,26,26,0.4)' }}>
            Use Cases
          </p>
          <CopyLines>
            <h2 style={{ fontFamily: 'Aeonik', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 700, maxWidth: '26ch', lineHeight: 1.3, color: '#1a1a1a', textAlign: 'right' }}>
              Agents that solve real problems across every industry.
            </h2>
          </CopyLines>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0',
          }}
        >
          {useCases.map((uc) => (
            <div
              key={uc.label}
              style={{
                flex: '1 1 calc(25% - 0px)',
                minWidth: '200px',
                padding: '1.5rem 0',
                borderTop: '1px solid rgba(26,26,26,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <span style={{ color: 'rgba(26,26,26,0.25)', fontSize: '0.7rem' }}>{uc.icon}</span>
              <p style={{ fontFamily: 'Aeonik', fontSize: '1rem', color: '#1a1a1a', fontWeight: 600 }}>{uc.label}</p>
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
          Ready to automate the future?
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
          Let's Talk AI
        </a>
      </section>

      <Footer />
    </PageLayout>
  );
}
