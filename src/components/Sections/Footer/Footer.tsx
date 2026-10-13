'use client';
import React from 'react';
import { site } from '@/lib/site';
import './styles.css';

const navCols = [
  {
    title: 'Services',
    links: [
      { label: 'Agents — AI automation', href: '/agents' },
      { label: 'Pixels — websites & apps', href: '/pixels' },
      { label: 'SaaS — AI products', href: '/saas' },
    ],
  },
  {
    title: 'Studio',
    links: [
      { label: 'About', href: '/about' },
      { label: 'MailMind', href: 'https://mailmind.radiantsofficial.com' },
      { label: 'Book a call', href: site.calUrl },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer-outer">
      <div className="footer-card">
        <div className="footer-top">
          <div className="footer-tagline">
            <h2 className="footer-tagline-heading">
              Radiants, building AI that does the work.
            </h2>
            <p className="footer-tagline-sub">Built in India. Deployed Globally.</p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            {navCols.map((col) => (
              <div key={col.title} className="footer-nav-col">
                <p className="footer-nav-col-title">{col.title}</p>
                {col.links.map((link) => {
                  const external = link.href.startsWith('http');
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="footer-nav-link"
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>

        <div className="footer-contact-row">
          <a href={`mailto:${site.email}`} className="footer-contact-link">
            {site.email}
          </a>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Radiants</p>
          <div className="footer-bottom-links">
            <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
            <a href="/terms" className="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
