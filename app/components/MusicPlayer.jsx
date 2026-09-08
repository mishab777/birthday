"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MUSIC } from "../data/content";

/**
 * Background song — the track is configured in data/content.js (MUSIC).
 * If the file is missing or the browser blocks playback, the control quietly
 * hides itself instead of showing a broken UI.
 */
export default function MusicPlayer({ playing, onToggle, visible }) {
  const audioRef = useRef(null);
  const fadeRef = useRef(null);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const el = audioRef.current;
    if (!el || !available) return;

    // cancel any fade still running from a previous play/pause
    clearInterval(fadeRef.current);

    if (!playing) {
      el.pause();
      return;
    }

    // ease the volume up so the song doesn't slam in
    const fadeIn = () => {
      const target = MUSIC.volume;
      const step = target / 40;
      fadeRef.current = setInterval(() => {
        const a = audioRef.current;
        if (!a || a.paused || a.volume >= target - step) {
          clearInterval(fadeRef.current);
          if (a && !a.paused) a.volume = target;
          return;
        }
        a.volume = Math.min(target, a.volume + step);
      }, 60);
    };

    el.volume = 0;
    const p = el.play();
    if (p?.then) {
      p.then(fadeIn).catch(() => onToggle(false));
    } else {
      fadeIn();
    }

    return () => clearInterval(fadeRef.current);
  }, [playing, available, onToggle]);

  return (
    <>
      <audio
        ref={audioRef}
        src={MUSIC.src}
        loop
        preload="auto"
        onError={() => setAvailable(false)}
      />

      <AnimatePresence>
        {visible && available && (
          <motion.button
            key="music"
            onClick={() => onToggle(!playing)}
            tabIndex={0}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 26 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            aria-label={
              playing ? `Pause ${MUSIC.title}` : `Play ${MUSIC.title}`
            }
            style={{
              position: "fixed",
              left: "clamp(1rem, 3vw, 2rem)",
              bottom: "clamp(1rem, 3vw, 2rem)",
              zIndex: 60,
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
              padding: "0.65rem 1.15rem 0.65rem 0.95rem",
              borderRadius: 999,
              border: "1px solid var(--line)",
              background: "rgba(27, 18, 12, 0.72)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              color: "var(--sand)",
              cursor: "pointer",
              fontFamily: "var(--sans)",
              fontSize: "0.6rem",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
            }}
          >
            {/* equaliser bars */}
            <span style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 14 }}>
              {[0, 1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  initial={{ scaleY: 0.22 }}
                  animate={
                    playing
                      ? { scaleY: [0.3, 1, 0.5, 0.85, 0.3] }
                      : { scaleY: 0.22 }
                  }
                  transition={
                    playing
                      ? {
                          duration: 1.1 + i * 0.17,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                      : { duration: 0.3 }
                  }
                  style={{
                    width: 2.5,
                    height: 14,
                    borderRadius: 2,
                    background: "var(--gold)",
                    transformOrigin: "bottom",
                    display: "block",
                  }}
                />
              ))}
            </span>
            <span style={{ opacity: playing ? 1 : 0.55, transition: "opacity .3s" }}>
              {MUSIC.title}
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
