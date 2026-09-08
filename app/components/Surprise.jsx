"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import PhotoSection from "./PhotoSection";
import { ArabicWall, MovieReel } from "./Quotes";
import Letter from "./Letter";
import Popup from "./Popup";
import Dust from "./Dust";
import { SECTIONS, HER } from "../data/content";
import { sprinkle } from "./confetti";

export default function Surprise() {
  const [photo, setPhoto] = useState(null);
  const [hello, setHello] = useState(false);

  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // A short welcome popup once the surprise page settles.
  useEffect(() => {
    const t = setTimeout(() => setHello(true), 1100);
    return () => clearTimeout(t);
  }, []);

  const openPhoto = (p) => {
    setPhoto(p);
    sprinkle({ x: 0.5, y: 0.35 });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1 }}
      style={{ position: "relative" }}
    >
      {/* scroll progress */}
      <motion.div
        aria-hidden="true"
        style={{
          scaleX: bar,
          transformOrigin: "0%",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          zIndex: 70,
          background: "linear-gradient(90deg, var(--clay), var(--gold), var(--latte))",
        }}
      />

      {/* ---------------- opening banner ---------------- */}
      <header
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "72svh",
          display: "grid",
          placeItems: "center",
          textAlign: "center",
          padding: "clamp(5rem, 12vh, 8rem) 1.5rem",
          background:
            "radial-gradient(ellipse 75% 60% at 50% 35%, #4A3122 0%, #2A1B12 48%, #1B120C 100%)",
        }}
      >
        <Dust count={22} />

        <div style={{ position: "relative", zIndex: 4, maxWidth: 860 }}>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="kicker"
            style={{ margin: "0 0 1.4rem" }}
          >
            The surprise
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.45, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="display"
            style={{
              margin: "0 0 1.6rem",
              fontSize: "clamp(2.6rem, 8vw, 5.6rem)",
              color: "var(--latte)",
            }}
          >
            Eighteen years of{" "}
            <span className="foil" style={{ fontStyle: "italic" }}>
              {HER.nick}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <hr className="rule" style={{ maxWidth: 200, margin: "0 auto 1.6rem" }} />
            <p
              className="serif-body"
              style={{ margin: "0 auto", maxWidth: "46ch", fontSize: "1.1rem" }}
            >
              Scroll slowly. There are pictures, some words worth keeping, and
              something from me at the very end.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 0, opacity: 0.35 }}
            animate={{ y: [0, 10, 0], opacity: [0.35, 0.8, 0.35] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              marginTop: "clamp(2.5rem, 6vh, 4rem)",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--sand)",
            }}
          >
            Scroll &#8595;
          </motion.div>
        </div>
      </header>

      {/* ---------------- photo sections ---------------- */}
      {SECTIONS.map((s, i) => (
        <PhotoSection
          key={s.id}
          section={s}
          flip={i % 2 === 1}
          onOpenPhoto={openPhoto}
        />
      ))}

      {/* ---------------- quote sections ---------------- */}
      <ArabicWall />
      <MovieReel />

      {/* ---------------- the letter ---------------- */}
      <Letter />

      {/* ---------------- welcome popup ---------------- */}
      <Popup open={hello} onClose={() => setHello(false)} maxWidth={440}>
        <div style={{ padding: "clamp(2.4rem, 6vw, 3.2rem)", textAlign: "center" }}>
          <motion.div
            initial={{ scale: 0.3, rotate: -20, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ fontSize: "2.8rem", lineHeight: 1, marginBottom: "1rem" }}
          >
            &#127873;
          </motion.div>

          <h3
            className="display"
            style={{
              margin: "0 0 1rem",
              fontSize: "clamp(1.7rem, 5vw, 2.3rem)",
              color: "var(--latte)",
              fontStyle: "italic",
            }}
          >
            Surprise, Neju
          </h3>

          <p className="serif-body" style={{ margin: "0 0 1.8rem", fontSize: "1rem" }}>
            Tap any photo to see it properly. Keep scrolling to the end &mdash;
            that&rsquo;s where the real message is.
          </p>

          <button
            onClick={() => setHello(false)}
            style={{
              cursor: "pointer",
              border: "1px solid var(--gold-soft)",
              borderRadius: 999,
              padding: "0.8rem 2.2rem",
              background: "rgba(169,118,79,0.24)",
              color: "var(--cream)",
              fontFamily: "var(--sans)",
              fontSize: "0.68rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            Let&rsquo;s go
          </button>
        </div>
      </Popup>

      {/* ---------------- photo lightbox ---------------- */}
      <Popup open={!!photo} onClose={() => setPhoto(null)} maxWidth={760}>
        {photo && (
          <div>
            <img
              src={photo.src}
              alt={photo.section.title}
              style={{
                display: "block",
                width: "100%",
                maxHeight: "62svh",
                objectFit: "contain",
                background: "var(--espresso)",
                borderRadius: "20px 20px 0 0",
              }}
            />
            <div style={{ padding: "1.8rem clamp(1.5rem, 4vw, 2.4rem) 2.2rem" }}>
              <p className="kicker" style={{ margin: "0 0 0.7rem" }}>
                {photo.section.index} &mdash; {photo.section.kicker}
              </p>
              <h4
                className="display"
                style={{
                  margin: "0 0 0.9rem",
                  fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                  color: "var(--latte)",
                  fontStyle: "italic",
                }}
              >
                {photo.section.title}
              </h4>
              <p className="serif-body" style={{ margin: 0, fontSize: "1rem" }}>
                {photo.section.body}
              </p>
            </div>
          </div>
        )}
      </Popup>
    </motion.div>
  );
}
