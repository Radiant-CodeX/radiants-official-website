'use client';
import React from 'react';
import './styles.css';

const navCols = [
  {
    title: 'Explore',
    links: [
      { label: 'Pixels', href: '/pixels' },
      { label: 'Cores', href: '/cores' },
      { label: 'Agents', href: '/agents' },
      { label: 'SaaS', href: '/saas' },
      { label: 'About', href: '/about' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Instagram', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'YouTube', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer-outer">
      <div className="footer-card">
        {/* Top: Tagline + Nav */}
        <div className="footer-top">
          <div className="footer-tagline">
            <h2 className="footer-tagline-heading">
              Radiants, building a world where ideas become reality.
            </h2>
            <p className="footer-tagline-sub">Built in India. Deployed Globally.</p>
          </div>

          <nav className="footer-nav">
            {navCols.map((col) => (
              <div key={col.title} className="footer-nav-col">
                <p className="footer-nav-col-title">{col.title}</p>
                {col.links.map((link) => (
                  <a key={link.label} href={link.href} className="footer-nav-link">
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>

        {/* Contact link */}
        <div className="footer-contact-row">
          <a href="mailto:sparks@radiantsofficial.com" className="footer-contact-link">
            sparks@radiantsofficial.com
          </a>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Radiants Inc.</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
