/**
 * Lightweight text decode/scramble effect for [data-scramble] labels.
 * Reveals the original text left-to-right through a haze of glyphs.
 */
const GLYPHS = "—+*/<>#[]{}=~";

export function scrambleIn(el: HTMLElement, duration = 800): () => void {
  const finalText = el.dataset.scrambleText || el.textContent || "";
  el.dataset.scrambleText = finalText;

  const start = performance.now();
  let raf = 0;

  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    const settled = Math.floor(t * finalText.length);
    let out = finalText.slice(0, settled);
    for (let i = settled; i < finalText.length; i++) {
      const ch = finalText[i];
      out += ch === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    }
    el.textContent = out;
    if (t < 1) raf = requestAnimationFrame(tick);
    else el.textContent = finalText;
  };

  raf = requestAnimationFrame(tick);
  return () => {
    cancelAnimationFrame(raf);
    el.textContent = finalText;
  };
}
