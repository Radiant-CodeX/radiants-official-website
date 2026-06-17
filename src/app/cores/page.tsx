'use client';
import React from 'react';
import PageLayout from '@/components/PageLayout/PageLayout';
import Footer from '@/components/Sections/Footer/Footer';
import CopyLines from '@/components/Copy/CopyLines';

const services = [
  {
    num: '01',
    title: 'Embedded Systems',
    desc: 'Firmware and software for microcontrollers and SoCs. We design low-level systems that are efficient, reliable, and purpose-built for real-world conditions.',
  },
  {
    num: '02',
    title: 'Custom Hardware',
    desc: 'PCB design, schematic capture, and prototype builds. From concept to working hardware — we engineer every layer of the physical stack.',
  },
  {
    num: '03',
    title: 'IoT Devices',
    desc: 'Connected devices that bridge the physical and digital worlds. Sensor integration, wireless protocols, and edge computing — all in one cohesive system.',
  },
];

const specs = [
  { label: 'Microcontrollers', items: ['ARM Cortex-M', 'ESP32 / ESP8266', 'STM32 Series', 'Arduino / AVR'] },
  { label: 'Communication', items: ['UART / SPI / I²C', 'BLE & Wi-Fi', 'LoRa / LoRaWAN', 'CAN Bus'] },
  { label: 'Design Tools', items: ['KiCad / Altium', 'FreeRTOS', 'Zephyr RTOS', 'PlatformIO'] },
];

export default function CoresPage() {
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
          Radiant Cores &nbsp;/&nbsp; Hardware Solutions
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
          Cores
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
            Innovative hardware solutions — from embedded systems to custom-built devices engineered for real-world demands.
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
          What We Engineer
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
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

      {/* Tech Stack */}
      <section
        style={{
          background: '#ebebeb',
          color: '#1a1a1a',
          padding: '6rem 8vw',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4rem' }}>
          <div style={{ flex: '0 0 auto' }}>
            <p style={{ fontFamily: 'Aeonik', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(26,26,26,0.4)', marginBottom: '1rem' }}>
              Our Stack
            </p>
            <CopyLines>
              <h2 style={{ fontFamily: 'Aeonik', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 700, maxWidth: '20ch', lineHeight: 1.3, color: '#1a1a1a' }}>
                Hardware built with the tools that matter.
              </h2>
            </CopyLines>
          </div>
          <div
            style={{
              flex: '1 1 340px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '2rem',
            }}
          >
            {specs.map((spec) => (
              <div key={spec.label} style={{ borderTop: '1px solid rgba(26,26,26,0.15)', paddingTop: '1.25rem' }}>
                <p style={{ fontFamily: 'Aeonik', fontSize: '11px', color: 'rgba(26,26,26,0.4)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  {spec.label}
                </p>
                {spec.items.map((item) => (
                  <p key={item} style={{ fontFamily: 'Aeonik', fontSize: '0.9rem', color: '#1a1a1a', lineHeight: 2 }}>
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
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
          Have hardware in mind?
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
          Let&apos;s Build
        </a>
      </section>

      <Footer />
    </PageLayout>
  );
}
