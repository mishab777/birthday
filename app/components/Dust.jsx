"use client";

import { useEffect, useState } from "react";

/** Slow-drifting gold flecks. Generated client-side so SSR stays deterministic. */
export default function Dust({ count = 26 }) {
  const [motes, setMotes] = useState([]);

  useEffect(() => {
    setMotes(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1.2 + Math.random() * 2.8,
        duration: 16 + Math.random() * 22,
        delay: -Math.random() * 30,
        opacity: 0.18 + Math.random() * 0.4,
      }))
    );
  }, [count]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {motes.map((m) => (
        <span
          key={m.id}
          className="dust"
          style={{
            left: `${m.left}%`,
            width: m.size,
            height: m.size,
            opacity: m.opacity,
            animationDuration: `${m.duration}s`,
            animationDelay: `${m.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
