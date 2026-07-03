import gsap from "gsap";

/**
 * Magnetic hover for elements marked [data-magnetic].
 * The element is gently attracted toward the cursor and springs back on leave.
 * No-ops on touch devices and for reduced-motion users.
 */
export function attachMagnetic(root: HTMLElement | Document = document): () => void {
  if (typeof window === "undefined") return () => {};

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  if (reduced || coarse) return () => {};

  const els = Array.from(root.querySelectorAll<HTMLElement>("[data-magnetic]"));
  const cleanups: Array<() => void> = [];

  els.forEach((el) => {
    const strength = parseFloat(el.dataset.magnetic || "0.35");

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1, 0.4)" });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    cleanups.push(() => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      gsap.set(el, { x: 0, y: 0 });
    });
  });

  return () => cleanups.forEach((fn) => fn());
}
