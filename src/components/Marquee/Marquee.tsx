"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Marquee.module.scss";

type MarqueeProps = {
  text: string;
  accent?: string;
};

/**
 * Infinite serif marquee divider. Outline text with one gold italic word,
 * whose speed and direction react to scroll velocity.
 */
const Marquee = ({ text, accent }: MarqueeProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      new URLSearchParams(window.location.search).has("noanim");
    if (reduced || !trackRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const tween = gsap.to(trackRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 28,
      ease: "none",
    });

    const st = ScrollTrigger.create({
      onUpdate: (self) => {
        const v = gsap.utils.clamp(-6, 6, self.getVelocity() / 220);
        gsap.to(tween, {
          timeScale: v === 0 ? 1 : v,
          duration: 0.4,
          overwrite: true,
        });
        gsap.to(tween, { timeScale: v < 0 ? -1 : 1, duration: 1.2, delay: 0.4 });
      },
    });

    return () => {
      st.kill();
      tween.kill();
    };
  }, []);

  const chunk = (
    <>
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} className={styles.item}>
          {text} {accent ? <em className={styles.accent}>{accent}</em> : null}
          <span className={styles.star} aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </>
  );

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div ref={trackRef} className={styles.track}>
        <div className={styles.chunk}>{chunk}</div>
        <div className={styles.chunk}>{chunk}</div>
      </div>
    </div>
  );
};

export default Marquee;
