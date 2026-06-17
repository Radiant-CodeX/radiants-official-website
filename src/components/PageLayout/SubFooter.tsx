'use client';
import React from 'react';

export default function SubFooter() {
  return (
    <footer
      style={{
        background: '#1a1a1a',
        padding: '3rem 8vw',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        borderTop: '1px solid rgba(235,235,235,0.1)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontFamily: 'Blanquotey', fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#ebebeb', margin: 0, lineHeight: 1 }}>
          radiants.
        </p>
        <a
          href="mailto:sparks@radiantsofficial.com"
          style={{ fontFamily: 'Aeonik', fontSize: '0.9rem', color: '#ebebeb80', textDecoration: 'none', letterSpacing: '1px' }}
        >
          sparks@radiantsofficial.com
        </a>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid rgba(235,235,235,0.1)',
          paddingTop: '1.5rem',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <p style={{ fontFamily: 'Aeonik', fontSize: '0.75rem', color: '#ebebeb40', margin: 0, letterSpacing: '1px', textTransform: 'uppercase' }}>
          © 2025 Radiants. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Pixels', 'Cores', 'Agents', 'SaaS'].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              style={{ fontFamily: 'Aeonik', fontSize: '0.75rem', color: '#ebebeb40', textDecoration: 'none', letterSpacing: '1px', textTransform: 'uppercase' }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
