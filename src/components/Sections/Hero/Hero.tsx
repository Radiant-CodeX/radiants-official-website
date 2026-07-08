"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { attachMagnetic } from "@/lib/magnetic";
import styles from "./Hero.module.scss";

const BOOT_LINES = [
  "radiants/beacon/ignite",
  "radiants/platform/mount",
  "radiants/ventures/load",
  "radiants/builders/sync",
  "radiants/system/radiant",
];

const HeroWithPreloader = () => {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [bootText, setBootText] = useState(BOOT_LINES[0]);

  const preRef = useRef<HTMLDivElement>(null);
  const preCountRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reducedRef = useRef(false);
  const exitedRef = useRef(false);
  const doneRef = useRef(false);
  const timersRef = useRef<ReturnType<typeof setInterval>[]>([]);

  // Preloader progress
  useEffect(() => {
    reducedRef.current =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      new URLSearchParams(window.location.search).has("noanim");

    if (reducedRef.current) {
      setProgress(100);
      setLoaded(true);
      revealInstant();
      return;
    }

    // Hide animated content only when animations will actually run —
    // the preloader covers the viewport, so this never flashes.
    if (sectionRef.current) {
      gsap.set(sectionRef.current.querySelectorAll(`.${styles.maskInner}`), { yPercent: 112 });
      gsap.set(sectionRef.current.querySelectorAll(`.${styles.fadeUp}`), { opacity: 0, y: 22 });
    }

    let tick: ReturnType<typeof setInterval>;
    let boot: ReturnType<typeof setInterval>;

    const start = () => {
      tick = setInterval(() => {
        setProgress((p) => Math.min(p + 2, 100));
      }, 28);

      let i = 0;
      boot = setInterval(() => {
        i = (i + 1) % BOOT_LINES.length;
        setBootText(BOOT_LINES[i]);
      }, 340);

      timersRef.current = [tick, boot];
    };

    if (document.readyState === "complete") start();
    else window.addEventListener("load", start);

    return () => {
      clearInterval(tick);
      clearInterval(boot);
      window.removeEventListener("load", start);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Exit the preloader exactly once when progress completes
  useEffect(() => {
    if (progress < 100 || exitedRef.current || reducedRef.current) return;
    exitedRef.current = true;
    timersRef.current.forEach(clearInterval);
    exitPreloader();

    // Safety net: never let the preloader trap the page
    const failsafe = setTimeout(() => {
      if (doneRef.current) return;
      setLoaded(true);
      revealInstant();
    }, 4500);
    return () => clearTimeout(failsafe);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  const revealInstant = () => {
    requestAnimationFrame(() => {
      if (!sectionRef.current) return;
      gsap.set(sectionRef.current.querySelectorAll(`.${styles.maskInner}`), { yPercent: 0 });
      gsap.set(sectionRef.current.querySelectorAll(`.${styles.fadeUp}`), { opacity: 1, y: 0 });
      if (videoRef.current) {
        if (reducedRef.current) videoRef.current.pause();
        else videoRef.current.play().catch(() => {});
      }
    });
  };

  const exitPreloader = () => {
    gsap.registerPlugin(CustomEase);
    if (!CustomEase.get("hop")) {
      CustomEase.create(
        "hop",
        "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1"
      );
    }

    const tl = gsap.timeline({
      onComplete: () => {
        doneRef.current = true;
        setLoaded(true);
      },
    });

    if (preCountRef.current) {
      tl.to(preCountRef.current, { yPercent: -120, opacity: 0, duration: 0.6, ease: "power3.in" });
    }
    if (preRef.current) {
      tl.to(
        preRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1.1,
          ease: "hop",
        },
        "-=0.15"
      );
    }

    tl.add(animateHero, "-=0.7");
  };

  const animateHero = () => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    attachMagnetic(sectionRef.current);

    const q = gsap.utils.selector(sectionRef.current);

    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      gsap.fromTo(
        videoRef.current,
        { scale: 1.18 },
        { scale: 1, duration: 2.6, ease: "power3.out" }
      );
    }

    gsap.to(q(`.${styles.maskInner}`), {
      yPercent: 0,
      stagger: 0.1,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.15,
    });

    gsap.to(q(`.${styles.fadeUp}`), {
      opacity: 1,
      y: 0,
      stagger: 0.08,
      duration: 1.1,
      ease: "power3.out",
      delay: 0.75,
    });

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        yPercent: -18,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "85% top",
          scrub: true,
        },
      });
    }
    if (videoRef.current) {
      gsap.to(videoRef.current, {
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  };

  return (
    <>
      {!loaded && (
        <div ref={preRef} className={styles.pre}>
          <div className={styles.preTop}>
            <Image
              src="/radiants-mark.svg"
              alt="Radiants"
              width={30}
              height={30}
              priority
              style={{ width: 30, height: 30, flexShrink: 0 }}
            />
            <span className={styles.preBoot}>{bootText}</span>
          </div>
          <div className={styles.preBar}>
            <div className={styles.preBarFill} style={{ width: `${progress}%` }} />
          </div>
          <div className={styles.preBottom}>
            <span className={styles.preCountMask}>
              <span ref={preCountRef} className={styles.preCount}>
                {progress}
              </span>
            </span>
          </div>
        </div>
      )}

      <section ref={sectionRef} className={styles.hero} aria-label="Radiants — we build what's next">
        <video
          ref={videoRef}
          className={styles.video}
          src="/hero-loop.webm"
          poster="/hero-poster.png"
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className={styles.veil} aria-hidden="true" />
        <div className={styles.grain} aria-hidden="true" />

        <div ref={contentRef} className={styles.content}>
          <p className={`${styles.kicker} ${styles.fadeUp}`}>Radiants — a venture studio</p>

          <h1 className={styles.h1}>
            <span className={styles.mask}>
              <span className={styles.maskInner}>We build</span>
            </span>
            <span className={styles.mask}>
              <span className={styles.maskInner}>
                what&apos;s <em className={styles.accent}>next</em>
              </span>
            </span>
          </h1>

          <p className={`${styles.sub} ${styles.fadeUp}`}>
            Builders become founders. Products become companies.
          </p>

          <div className={`${styles.ctas} ${styles.fadeUp}`}>
            <a
              className={styles.btnGold}
              data-magnetic
              href="https://mailmind.radiantsofficial.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              See MailMind live
            </a>
            <a className={styles.btnGhost} data-magnetic href="https://cal.com/tarunkumar-sivakumar/30-minute-discovery-call" target="_blank" rel="noopener noreferrer">
              Book a 30-min call
            </a>
          </div>
        </div>

        <div className={`${styles.meta} ${styles.fadeUp}`}>
          <span className={styles.status}>
            <span className={styles.dot} />
            MailMind — live in production
          </span>
          <span className={styles.scrollCue} aria-hidden="true">
            <span className={styles.scrollLine} />
            scroll
          </span>
          <span className={styles.coords}>Chennai — 13.08° N, 80.27° E</span>
        </div>
      </section>
    </>
  );
};

export default HeroWithPreloader;
