"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "@/components/Marquee/Marquee";
import { attachMagnetic } from "@/lib/magnetic";
import { scrambleIn } from "@/lib/scramble";
import styles from "./Story.module.scss";

const Story = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    // Deep-link scroll (works with Lenis, unlike raw #anchors on load)
    const target = params.get("s");
    if (target) {
      setTimeout(() => document.getElementById(target)?.scrollIntoView(), 350);
    }

    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches || params.has("noanim");
    if (reduced || !rootRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Masked serif statement lines
      gsap.utils.toArray<HTMLElement>(`.${styles.maskInner}`).forEach((line) => {
        gsap.fromTo(
          line,
          { yPercent: 112 },
          {
            yPercent: 0,
            duration: 1.3,
            ease: "power4.out",
            scrollTrigger: { trigger: line, start: "top 88%" },
          }
        );
      });

      // Generic fade-up reveals, staggered per section
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: (i % 4) * 0.06,
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });

      // Featured screenshot: clip-path unveil + parallax drift
      const browser = rootRef.current!.querySelector(`.${styles.browser}`);
      if (browser) {
        gsap.fromTo(
          browser,
          { clipPath: "inset(16% 7% 16% 7% round 14px)", scale: 0.96 },
          {
            clipPath: "inset(0% 0% 0% 0% round 14px)",
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: { trigger: browser, start: "top 78%", once: true },
          }
        );
        gsap.fromTo(
          browser,
          { y: 60 },
          {
            y: -40,
            ease: "none",
            scrollTrigger: { trigger: browser, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      }

      // The beam thread: a gold line drawing down the entire story
      const thread = rootRef.current!.querySelector(`.${styles.thread}`);
      if (thread) {
        gsap.to(thread, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 60%",
            end: "bottom bottom",
            scrub: 0.6,
          },
        });
      }

      // Mono kickers decode as they enter
      gsap.utils.toArray<HTMLElement>("[data-scramble]").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          once: true,
          onEnter: () => scrambleIn(el, 700),
        });
      });
    }, rootRef);

    const detachMagnetic = attachMagnetic(rootRef.current);

    return () => {
      ctx.revert();
      detachMagnetic();
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.storyRoot}>
      <div className={styles.thread} aria-hidden="true" />

      <Marquee text="We build what's" accent="next" />

      {/* ---------- Manifesto ---------- */}
      <section id="studio" className={`${styles.section} ${styles.hairline}`} aria-label="The studio">
        <div className={styles.inner}>
          <p className={styles.kicker}>
            <span data-scramble>The studio</span> <span className={styles.index}>01</span>
          </p>
          <h2 className={styles.statement}>
            <span className={styles.mask}>
              <span className={styles.maskInner}>We don&apos;t build a single</span>
            </span>
            <span className={styles.mask}>
              <span className={styles.maskInner}>
                product. We build <em className={styles.gold}>builders</em> —
              </span>
            </span>
            <span className={styles.mask}>
              <span className={styles.maskInner}>who build products,</span>
            </span>
            <span className={styles.mask}>
              <span className={styles.maskInner}>
                that become <em className={styles.gold}>companies</em>.
              </span>
            </span>
          </h2>

          <div className={styles.pillars}>
            <div className={styles.pillar} data-reveal>
              <span className={styles.pillarNo}>01</span>
              <h3 className={styles.pillarTitle}>Builders become founders</h3>
              <p className={styles.pillarText}>
                Ownership is the currency here. Every builder is on a documented path from first
                commit to founding a venture.
              </p>
            </div>
            <div className={styles.pillar} data-reveal>
              <span className={styles.pillarNo}>02</span>
              <h3 className={styles.pillarTitle}>One platform, many ventures</h3>
              <p className={styles.pillarText}>
                Shared authentication, AI infrastructure, and design systems — so every new product
                starts weeks ahead, not from zero.
              </p>
            </div>
            <div className={styles.pillar} data-reveal>
              <span className={styles.pillarNo}>03</span>
              <h3 className={styles.pillarTitle}>Excellence is the standard</h3>
              <p className={styles.pillarText}>
                Nothing ships unless we&apos;d proudly put our name behind it — tested, monitored,
                and secure by construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Work ---------- */}
      <section id="work" className={`${styles.section} ${styles.alt} ${styles.hairline}`} aria-label="Our work">
        <div className={styles.inner}>
          <p className={styles.kicker}>
            <span data-scramble>First light</span> <span className={styles.index}>02</span>
          </p>

          <div className={styles.workHead}>
            <h2 className={styles.workTitle} data-reveal>
              MailMind<em className={styles.gold}>.</em>
            </h2>
            <span className={styles.live} data-reveal>
              <span className={styles.liveDot} />
              Live in production
            </span>
          </div>

          <div className={styles.browser}>
            <div className={styles.browserBar}>
              <span />
              <span />
              <span />
              <span className={styles.browserUrl}>mailmind.radiantsofficial.com</span>
            </div>
            <Image
              className={styles.shot}
              src="/images/mailmind/inboxview.png"
              alt="MailMind inbox with AI triage scores on every email"
              width={1919}
              height={914}
            />
          </div>

          <div className={styles.workGrid}>
            <div className={styles.feature} data-reveal>
              <p className={styles.featureTitle}>Five-axis explainable triage</p>
              <p className={styles.featureText}>
                Every email scored across deadline, authority, sentiment, thread age, and action
                type — with the reasoning shown, never hidden.
              </p>
            </div>
            <div className={styles.feature} data-reveal>
              <p className={styles.featureTitle}>Tone DNA</p>
              <p className={styles.featureText}>
                Drafts replies in your own voice, learned from how you actually write — per
                account, not one-size-fits-all.
              </p>
            </div>
            <div className={styles.feature} data-reveal>
              <p className={styles.featureTitle}>Privacy by construction</p>
              <p className={styles.featureText}>
                Personal data is masked before any AI model call and restored after. Nothing
                sensitive ever leaves the boundary.
              </p>
            </div>
            <div className={styles.feature} data-reveal>
              <p className={styles.featureTitle}>Human-in-the-loop, enforced</p>
              <p className={styles.featureText}>
                No email is ever sent automatically. Approval is enforced at the protocol layer —
                there is no code path around it.
              </p>
            </div>
          </div>

          <div className={styles.workCtas} data-reveal>
            <a
              className={styles.btnGold}
              data-magnetic
              href="https://mailmind.radiantsofficial.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the live app
            </a>
            <a
              className={styles.btnGhost}
              data-magnetic
              href="mailto:sparks@radiantsofficial.com?subject=MailMind%20case%20study"
            >
              Request the case study
            </a>
          </div>

          <div className={styles.forge}>
            <div className={styles.forgeCard} data-reveal>
              <p className={styles.forgeLabel}>In the forge — next</p>
              <h3 className={styles.forgeTitle}>LearnForge</h3>
              <p className={styles.forgeText}>
                Learning that builds real capability, not content consumption. In discovery.
              </p>
            </div>
            <div className={styles.forgeCard} data-reveal>
              <p className={styles.forgeLabel}>Venture 03</p>
              <h3 className={styles.forgeTitle}>Being decided</h3>
              <p className={styles.forgeText}>
                Sourced from real problems we meet in client work — validated before a single
                line is written.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section id="process" className={`${styles.section} ${styles.hairline}`} aria-label="How we build">
        <div className={styles.inner}>
          <p className={styles.kicker}>
            <span data-scramble>How we build</span> <span className={styles.index}>03</span>
          </p>
          <h2 className={styles.processTitle}>
            <span className={styles.mask}>
              <span className={styles.maskInner}>Idea to production</span>
            </span>
            <span className={styles.mask}>
              <span className={styles.maskInner}>
                in <em className={styles.gold}>4–6 weeks</em>.
              </span>
            </span>
          </h2>

          <div className={styles.steps}>
            <div className={styles.step} data-reveal>
              <span className={styles.stepWeek}>Week 0</span>
              <h3 className={styles.stepTitle}>Discover</h3>
              <p className={styles.stepText}>
                We map the problem, fix the scope, and fix the price. No hourly meters, no
                surprises.
              </p>
            </div>
            <div className={styles.step} data-reveal>
              <span className={styles.stepWeek}>Week 1</span>
              <h3 className={styles.stepTitle}>Design</h3>
              <p className={styles.stepText}>
                A clickable walkthrough of the core flow — you see the product before we build it.
              </p>
            </div>
            <div className={styles.step} data-reveal>
              <span className={styles.stepWeek}>Weeks 2–4</span>
              <h3 className={styles.stepTitle}>Build</h3>
              <p className={styles.stepText}>
                A staging URL from week two, updated continuously. We work in the open, not toward
                a big reveal.
              </p>
            </div>
            <div className={styles.step} data-reveal>
              <span className={styles.stepWeek}>Weeks 5–6</span>
              <h3 className={styles.stepTitle}>Ship &amp; run</h3>
              <p className={styles.stepText}>
                Live in production — monitored, documented, and handed over with your team
                trained.
              </p>
            </div>
          </div>

          <p className={styles.processNote} data-reveal>
            Enterprise security from day one — PII masking, encrypted secrets, CI quality gates
          </p>
        </div>
      </section>

      <Marquee text="Have something to" accent="build?" />

      {/* ---------- Contact CTA ---------- */}
      <section id="contact" className={`${styles.section} ${styles.alt} ${styles.hairline} ${styles.cta}`} aria-label="Contact">
        <div className={styles.inner}>
          <p className={styles.kicker} style={{ justifyContent: "center" }}>
            <span data-scramble>Contact</span> <span className={styles.index}>04</span>
          </p>
          <h2 className={styles.ctaTitle}>
            <span className={styles.mask}>
              <span className={styles.maskInner}>Have something</span>
            </span>
            <span className={styles.mask}>
              <span className={styles.maskInner}>
                to <em className={styles.gold}>build</em>?
              </span>
            </span>
          </h2>
          <p className={styles.ctaSub} data-reveal>
            Tell us what your team is wrestling with — requests, documents, email, operations. In
            30 minutes we&apos;ll show you what it looks like solved.
          </p>
          <div className={styles.ctaRow} data-reveal>
            <a className={styles.btnGold} data-magnetic href="https://cal.com/tarunkumar-sivakumar/30-minute-discovery-call" target="_blank" rel="noopener noreferrer">
              Book a 30-min call
            </a>
            <a className={styles.btnGhost} data-magnetic href="mailto:sparks@radiantsofficial.com">
              sparks@radiantsofficial.com
            </a>
          </div>
          <div className={styles.ctaMeta} data-reveal>
            <span>Chennai — built in India</span>
            <span>Deployed globally</span>
            <span>Radiants — a venture studio</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
