"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageLayout from "@/components/PageLayout/PageLayout";
import Footer from "@/components/Sections/Footer/Footer";
import Marquee from "@/components/Marquee/Marquee";
import { attachMagnetic } from "@/lib/magnetic";
import { scrambleIn } from "@/lib/scramble";
import styles from "@/components/Sections/Story/Story.module.scss";

export type SubPageRow = { no: string; title: string; text: string };
export type SubPageCol = { title: string; items: string[] };

export const Gold = ({ children }: { children: React.ReactNode }) => (
  <em style={{ fontStyle: "italic", color: "#f8cd7b" }}>{children}</em>
);

type SubPageProps = {
  kicker: string;
  titleLines: React.ReactNode[];
  intro: string;
  rowsKicker: string;
  rows: SubPageRow[];
  chips?: string[];
  cols?: SubPageCol[];
  marqueeText: string;
  marqueeAccent: string;
  ctaTitle: React.ReactNode[];
  ctaSub: string;
};

const SubPage = ({
  kicker,
  titleLines,
  intro,
  rowsKicker,
  rows,
  chips,
  cols,
  marqueeText,
  marqueeAccent,
  ctaTitle,
  ctaSub,
}: SubPageProps) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      new URLSearchParams(window.location.search).has("noanim");
    if (reduced || !rootRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(`.${styles.maskInner}`).forEach((line, i) => {
        gsap.fromTo(
          line,
          { yPercent: 112 },
          {
            yPercent: 0,
            duration: 1.3,
            ease: "power4.out",
            delay: i * 0.08,
            scrollTrigger: { trigger: line, start: "top 92%" },
          }
        );
      });

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
            scrollTrigger: { trigger: el, start: "top 92%" },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-scramble]").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 92%",
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
    <PageLayout>
      <div ref={rootRef} className={styles.storyRoot}>
        <section className={`${styles.section} ${styles.subHero}`}>
          <div className={styles.inner}>
            <p className={styles.kicker}>
              <span data-scramble>{kicker}</span>
            </p>
            <h1 className={styles.subTitle}>
              {titleLines.map((line, i) => (
                <span key={i} className={styles.mask}>
                  <span className={styles.maskInner}>{line}</span>
                </span>
              ))}
            </h1>
            <p className={styles.subIntro} data-reveal>
              {intro}
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.alt} ${styles.hairline}`}>
          <div className={styles.inner}>
            <p className={styles.kicker}>
              <span data-scramble>{rowsKicker}</span>
            </p>
            <div className={styles.rows}>
              {rows.map((row) => (
                <div key={row.no} className={styles.row} data-reveal>
                  <span className={styles.rowNo}>{row.no}</span>
                  <h2 className={styles.rowTitle}>{row.title}</h2>
                  <p className={styles.rowText}>{row.text}</p>
                </div>
              ))}
            </div>

            {chips && chips.length > 0 && (
              <div className={styles.chips} data-reveal>
                {chips.map((chip) => (
                  <span key={chip} className={styles.chip}>
                    {chip}
                  </span>
                ))}
              </div>
            )}

            {cols && cols.length > 0 && (
              <div className={styles.cols}>
                {cols.map((col) => (
                  <div key={col.title} className={styles.col} data-reveal>
                    <p className={styles.colTitle}>{col.title}</p>
                    {col.items.map((item) => (
                      <p key={item} className={styles.colItem}>
                        {item}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <Marquee text={marqueeText} accent={marqueeAccent} />

        <section className={`${styles.section} ${styles.alt} ${styles.cta}`}>
          <div className={styles.inner}>
            <h2 className={styles.ctaTitle}>
              {ctaTitle.map((line, i) => (
                <span key={i} className={styles.mask}>
                  <span className={styles.maskInner}>{line}</span>
                </span>
              ))}
            </h2>
            <p className={styles.ctaSub} data-reveal>
              {ctaSub}
            </p>
            <div className={styles.ctaRow} data-reveal>
              <a
                className={styles.btnGold}
                data-magnetic
                href="https://cal.com/tarunkumar-sivakumar/30-minute-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a 30-min call
              </a>
              <a className={styles.btnGhost} data-magnetic href="mailto:sparks@radiantsofficial.com">
                sparks@radiantsofficial.com
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageLayout>
  );
};

export default SubPage;
