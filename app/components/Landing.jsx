"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Dust from "./Dust";
import { poppers, bigBlast } from "./confetti";
import { HER } from "../data/content";

const LETTERS = "Happy Birthday".split("");

export default function Landing({ onOpen }) {
  const [leaving, setLeaving] = useState(false);
  const timers = useRef([]);

  // Poppers on arrival, then a couple of encore bursts.
  useEffect(() => {
    timers.current.push(setTimeout(poppers, 550));
    timers.current.push(setTimeout(poppers, 2300));
    timers.current.push(setTimeout(poppers, 5200));
    const t = timers.current;
    return () => t.forEach(clearTimeout);
  }, []);

  const handleClick = () => {
    if (leaving) return;
    setLeaving(true);
    bigBlast();
    // let the blast breathe before we swap pages
    setTimeout(onOpen, 900);
  };

  return (
    <motion.section
      exit={{ opacity: 0, scale: 1.06, filter: "blur(14px)" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 70% 55% at 50% 30%, #4A3122 0%, #2A1B12 45%, #1B120C 100%)",
      }}
    >
      <Dust count={30} />

      {/* soft warm glow behind the title */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          width: "min(780px, 92vw)",
          height: "min(780px, 92vw)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(217,179,130,0.16) 0%, rgba(169,118,79,0.06) 45%, transparent 70%)",
          filter: "blur(30px)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 4,
          textAlign: "center",
          padding: "3rem 1.5rem",
          maxWidth: 1000,
        }}
      >
        {/* eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="kicker"
          style={{ margin: "0 0 1.6rem" }}
        >
          {HER.age}th&nbsp;&nbsp;&middot;&nbsp;&nbsp;{HER.year}
        </motion.p>

        {/* "Happy Birthday" — letter by letter */}
        <h1
          className="display"
          style={{
            margin: 0,
            fontSize: "clamp(2.6rem, 9vw, 6.4rem)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0 0.02em",
          }}
        >
          {LETTERS.map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 46, rotateX: -75 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 0.35 + i * 0.045,
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                display: "inline-block",
                whiteSpace: "pre",
                color: "var(--latte)",
              }}
            >
              {ch}
            </motion.span>
          ))}
        </h1>

        {/* the name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.86, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginTop: "0.1em" }}
        >
          <h2
            className="display foil"
            style={{
              margin: 0,
              fontSize: "clamp(5rem, 22vw, 15rem)",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 0.9,
            }}
          >
            {HER.nick}
          </h2>
        </motion.div>

        {/* rule + full name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 1 }}
          style={{ marginTop: "1.8rem" }}
        >
          <hr className="rule" style={{ maxWidth: 220, margin: "0 auto 1.1rem" }} />
          <p
            style={{
              margin: 0,
              fontFamily: "var(--serif)",
              fontSize: "clamp(0.95rem, 1.6vw, 1.15rem)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--ink-faint)",
              fontWeight: 300,
            }}
          >
            {HER.name}
          </p>
        </motion.div>

        {/* surprise button */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          style={{ marginTop: "3.2rem" }}
        >
          <motion.button
            onClick={handleClick}
            disabled={leaving}
            tabIndex={0}
            whileHover={{ scale: 1.045 }}
            whileTap={{ scale: 0.97 }}
            // `initial` must be declared, otherwise the server renders no
            // box-shadow while the client applies the first keyframe on mount
            // — that difference is a hydration mismatch.
            initial={{ boxShadow: "0 0 0 0 rgba(217,179,130,0.35)" }}
            animate={
              leaving
                ? { scale: 1.35, opacity: 0 }
                : {
                    boxShadow: [
                      "0 0 0 0 rgba(217,179,130,0.35)",
                      "0 0 0 22px rgba(217,179,130,0)",
                    ],
                  }
            }
            transition={
              leaving
                ? { duration: 0.6 }
                : { duration: 2.4, repeat: Infinity, ease: "easeOut" }
            }
            style={{
              cursor: leaving ? "default" : "pointer",
              border: "1px solid var(--gold-soft)",
              borderRadius: 999,
              padding: "1.05rem 2.9rem",
              background:
                "linear-gradient(135deg, rgba(169,118,79,0.28), rgba(85,57,42,0.18))",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              color: "var(--cream)",
              fontFamily: "var(--sans)",
              fontSize: "0.8rem",
              fontWeight: 400,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            Open your surprise
          </motion.button>

          <motion.p
            initial={{ opacity: 0.28 }}
            animate={{ opacity: [0.28, 0.62, 0.28] }}
            transition={{ duration: 3.2, repeat: Infinity }}
            style={{
              marginTop: "1.5rem",
              fontSize: "0.66rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "var(--sand)",
            }}
          >
            ♪ turn your sound on
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
