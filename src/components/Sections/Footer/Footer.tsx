import React from 'react';
import Image from 'next/image';
import { site } from '@/lib/site';
import './styles.css';

const services = [
  { label: 'Agents', href: '/agents' },
  { label: 'Pixels', href: '/pixels' },
  { label: 'SaaS', href: '/saas' },
];

const studio = [
  { label: 'About', href: '/about' },
  { label: 'MailMind', href: 'https://mailmind.radiantsofficial.com', external: true },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft-sun" aria-hidden="true">
        <div className="ft-sun-glow" />
        <Image
          className="ft-sun-img"
          src="/images/golden-sun.webp"
          alt=""
          width={1254}
          height={618}
          sizes="(max-width: 900px) 150vw, (max-width: 1130px) 92vw, 1040px"
        />
      </div>
      <div className="ft-fade" aria-hidden="true" />
      <div className="ft-horizon" aria-hidden="true" />

      <div className="ft-top">
        <nav className="ft-col" aria-label="Services">
          <p className="ft-label">Services</p>
          {services.map((l) => (
            <a key={l.label} href={l.href} className="ft-link">{l.label}</a>
          ))}
        </nav>

        <div className="ft-cta">
          <p className="ft-kicker">Every day starts somewhere</p>
          <h2 className="ft-title">
            Let&apos;s make your team&apos;s<br />
            mornings <em>lighter</em>.
          </h2>
          <a className="ft-btn" href={site.calUrl} target="_blank" rel="noopener noreferrer">
            Book a 30-min call
          </a>
          <a className="ft-mail" href={`mailto:${site.email}`}>{site.email}</a>
        </div>

        <nav className="ft-col ft-col-end" aria-label="Studio">
          <p className="ft-label">Studio</p>
          {studio.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="ft-link"
              {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="ft-bottom">
        <span>Sunrise over Chennai · 13.08° N, 80.27° E</span>
        <span>© {new Date().getFullYear()} Radiants</span>
      </div>
    </footer>
  );
}
