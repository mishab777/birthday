"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArabicQuote, MovieQuote } from "./Quotes";
import { ARABIC_QUOTES, MOVIE_QUOTES } from "../data/content";

const RATIO = {
  portrait: "3 / 4",
  wide: "4 / 3",
  square: "1 / 1",
};

/** A single photo frame: warm border, inner glow, gentle zoom on hover. */
function Frame({ src, alt, ratio, onOpen, style, priority }) {
  return (
    <motion.button
      onClick={onOpen}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      aria-label={`View photo: ${alt}`}
      style={{
        display: "block",
        width: "100%",
        padding: 0,
        border: "1px solid var(--line)",
        borderRadius: 14,
        overflow: "hidden",
        cursor: "zoom-in",
        background: "var(--bark)",
        boxShadow:
          "0 28px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(226,201,166,0.05)",
        ...style,
      }}
    >
      <div style={{ position: "relative", width: "100%", aspectRatio: ratio, overflow: "hidden" }}>
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            filter: "sepia(0.16) saturate(0.94) contrast(1.03) brightness(0.97)",
          }}
        />
        {/* warm wash over the photo so it sits in the palette */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(180deg, rgba(60,38,25,0.10) 0%, transparent 35%, rgba(27,18,12,0.42) 100%)",
          }}
        />
      </div>
    </motion.button>
  );
}

export default function PhotoSection({ section, flip, onOpenPhoto }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yMain = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const ySecond = useTransform(scrollYProgress, [0, 1], ["-9%", "9%"]);
  const yIndex = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);

  const quote =
    section.quote?.type === "ar"
      ? ARABIC_QUOTES[section.quote.i]
      : MOVIE_QUOTES[section.quote?.i];

  const ratio = RATIO[section.span] || RATIO.wide;

  return (
    <section
      ref={ref}
      id={section.id}
      style={{
        position: "relative",
        padding: "clamp(5rem, 13vh, 9rem) clamp(1.25rem, 6vw, 5rem)",
        borderTop: "1px solid var(--line-soft)",
        overflow: "hidden",
      }}
    >
      {/* giant ghosted section number */}
      <motion.span
        aria-hidden="true"
        style={{
          y: yIndex,
          position: "absolute",
          top: "50%",
          [flip ? "left" : "right"]: "-0.1em",
          fontFamily: "var(--serif)",
          fontSize: "clamp(9rem, 26vw, 22rem)",
          lineHeight: 1,
          fontWeight: 300,
          color: "rgba(226,201,166,0.035)",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      >
        {section.index}
      </motion.span>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1240,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 330px), 1fr))",
          gap: "clamp(2.5rem, 6vw, 5rem)",
          alignItems: "center",
        }}
      >
        {/* ---------- photos ---------- */}
        <motion.div
          style={{
            y: yMain,
            order: flip ? 2 : 1,
            position: "relative",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Frame
              src={section.image}
              alt={`${section.title} — 1`}
              ratio={ratio}
              onOpen={() => onOpenPhoto({ src: section.image, section })}
            />
          </motion.div>

          {section.image2 && (
            <motion.div
              style={{
                y: ySecond,
                position: "absolute",
                width: "46%",
                [flip ? "left" : "right"]: "-7%",
                bottom: "-14%",
                zIndex: 2,
              }}
              initial={{ opacity: 0, scale: 0.8, rotate: flip ? 4 : -4 }}
              whileInView={{ opacity: 1, scale: 1, rotate: flip ? -2.5 : 2.5 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <Frame
                src={section.image2}
                alt={`${section.title} — 2`}
                ratio="1 / 1"
                onOpen={() => onOpenPhoto({ src: section.image2, section })}
                style={{ borderRadius: 10 }}
              />
            </motion.div>
          )}
        </motion.div>

        {/* ---------- copy ---------- */}
        <div
          style={{
            order: flip ? 1 : 2,
            paddingBottom: section.image2 ? "clamp(2rem, 8vh, 5rem)" : 0,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="kicker" style={{ margin: "0 0 1.1rem" }}>
              {section.index} — {section.kicker}
            </p>

            <h2
              className="display"
              style={{
                margin: "0 0 1.4rem",
                fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                color: "var(--latte)",
                fontStyle: "italic",
              }}
            >
              {section.title}
            </h2>

            <p className="serif-body" style={{ margin: "0 0 2.4rem", maxWidth: "42ch" }}>
              {section.body}
            </p>

            <hr className="rule" style={{ maxWidth: 120, margin: "0 0 2.2rem 0" }} />

            {section.quote?.type === "ar" ? (
              <ArabicQuote q={quote} />
            ) : (
              <MovieQuote q={quote} />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
