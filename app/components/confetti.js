// Popper / confetti helpers. All bursts use the site's brown-gold palette.
import confetti from "canvas-confetti";

const PALETTE = [
  "#D9B382", // gold
  "#A9764F", // caramel
  "#E2C9A6", // latte
  "#7A5238", // clay
  "#F2E6D6", // cream
  "#C9A57C", // sand
];

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Two angled party poppers firing in from the bottom corners. */
export function poppers() {
  if (reduced()) return;
  const shared = {
    particleCount: 70,
    spread: 62,
    startVelocity: 58,
    ticks: 240,
    gravity: 0.9,
    scalar: 1.05,
    colors: PALETTE,
    disableForReducedMotion: true,
  };
  confetti({ ...shared, angle: 58, origin: { x: 0, y: 0.95 } });
  confetti({ ...shared, angle: 122, origin: { x: 1, y: 0.95 } });
}

/** One big celebratory blast from centre — used on the surprise click. */
export function bigBlast() {
  if (reduced()) return;
  const end = Date.now() + 1400;

  confetti({
    particleCount: 160,
    spread: 130,
    startVelocity: 46,
    origin: { y: 0.62 },
    colors: PALETTE,
    scalar: 1.15,
    disableForReducedMotion: true,
  });

  (function trail() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 0.7 },
      colors: PALETTE,
      disableForReducedMotion: true,
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 0.7 },
      colors: PALETTE,
      disableForReducedMotion: true,
    });
    if (Date.now() < end) requestAnimationFrame(trail);
  })();
}

/** Slow drifting flecks — a gentle sparkle, no bang. */
export function sprinkle(origin = { x: 0.5, y: 0.4 }) {
  if (reduced()) return;
  confetti({
    particleCount: 34,
    spread: 100,
    startVelocity: 18,
    gravity: 0.42,
    decay: 0.93,
    ticks: 200,
    scalar: 0.75,
    origin,
    colors: PALETTE,
    shapes: ["circle"],
    disableForReducedMotion: true,
  });
}
