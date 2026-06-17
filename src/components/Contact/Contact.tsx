'use client';
import React from 'react';
import './styles.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-inner">

        {/* Left: info */}
        <div className="contact-info">
          <p className="contact-label">Get in Touch</p>
          <h2 className="contact-heading">
            Have a project<br />in mind?
          </h2>
          <p className="contact-sub">
            Let&apos;s make something great together. Tell us what you&apos;re building and we&apos;ll take it from there.
          </p>

          <div className="contact-details">
            <a href="mailto:sparks@radiantsofficial.com" className="contact-email">
              sparks@radiantsofficial.com
            </a>
            <div className="contact-socials">
              <a href="#" className="contact-social-link">Instagram</a>
              <span className="contact-social-dot">·</span>
              <a href="#" className="contact-social-link">GitHub</a>
              <span className="contact-social-dot">·</span>
              <a href="#" className="contact-social-link">LinkedIn</a>
            </div>
          </div>

          {/* Spinning badge */}
          <div className="contact-badge-wrap">
            <img src="/images/contact-circle.svg" alt="" className="contact-badge-img" />
            <span className="contact-badge-arrow">↓</span>
          </div>
        </div>

        {/* Right: form */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="contact-form-row">
            <div className="contact-field">
              <label className="contact-field-label">Name</label>
              <input
                type="text"
                className="contact-input"
                placeholder="Your name"
                autoComplete="off"
              />
            </div>
            <div className="contact-field">
              <label className="contact-field-label">Email</label>
              <input
                type="email"
                className="contact-input"
                placeholder="your@email.com"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="contact-field">
            <label className="contact-field-label">Subject</label>
            <input
              type="text"
              className="contact-input"
              placeholder="What's this about?"
              autoComplete="off"
            />
          </div>

          <div className="contact-field contact-field-grow">
            <label className="contact-field-label">Message</label>
            <textarea
              className="contact-textarea"
              placeholder="Tell us about your project, timeline, and goals..."
              rows={6}
            />
          </div>

          <div className="contact-form-footer">
            <p className="contact-form-note">
              We typically respond within 24 hours.
            </p>
            <button type="submit" className="contact-submit">
              Send Message
              <span className="contact-submit-arrow">→</span>
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};

export default Contact;
