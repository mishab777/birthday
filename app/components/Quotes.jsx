"use client";

import { motion } from "framer-motion";
import { ARABIC_QUOTES, MOVIE_QUOTES } from "../data/content";

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* -------------------------------------------------------------------------
   Arabic / Islamic quote — deliberately set small and quiet.
   ------------------------------------------------------------------------- */
export function ArabicQuote({ q, align = "left" }) {
  if (!q) return null;
  return (
    <motion.figure
      variants={rise}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      style={{
        margin: 0,
        textAlign: align,
        borderLeft: align === "left" ? "1px solid var(--line)" : "none",
        borderRight: align === "right" ? "1px solid var(--line)" : "none",
        paddingLeft: align === "left" ? "1.4rem" : 0,
        paddingRight: align === "right" ? "1.4rem" : 0,
      }}
    >
      <p
        dir="rtl"
        lang="ar"
        style={{
          fontFamily: "var(--arabic)",
          fontSize: "clamp(1.02rem, 1.7vw, 1.3rem)",
          lineHeight: 2,
          color: "var(--latte)",
          margin: "0 0 0.55rem",
          textAlign: align === "right" ? "right" : "left",
        }}
      >
        {q.ar}
      </p>
      <p
        style={{
          fontFamily: "var(--serif)",
          fontStyle: "italic",
          fontSize: "0.78rem",
          letterSpacing: "0.02em",
          color: "var(--ink-faint)",
          margin: "0 0 0.5rem",
        }}
      >
        {q.tr}
      </p>
      <p
        style={{
          fontFamily: "var(--sans)",
          fontSize: "0.82rem",
          lineHeight: 1.7,
          fontWeight: 300,
          color: "var(--ink-dim)",
          margin: "0 0 0.6rem",
        }}
      >
        “{q.en}”
      </p>
      <figcaption
        style={{
          fontSize: "0.58rem",
          letterSpacing: "0.26em",
          textTransform: "uppercase",
          color: "var(--sand)",
          opacity: 0.65,
        }}
      >
        {q.src}
      </figcaption>
    </motion.figure>
  );
}

/* -------------------------------------------------------------------------
   Movie quote — larger, cinematic.
   ------------------------------------------------------------------------- */
export function MovieQuote({ q, align = "left" }) {
  if (!q) return null;
  return (
    <motion.figure
      variants={rise}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      style={{ margin: 0, textAlign: align }}
    >
      <blockquote
        style={{
          margin: 0,
          fontFamily: "var(--serif)",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: "clamp(1.15rem, 2.1vw, 1.6rem)",
          lineHeight: 1.5,
          color: "var(--cream)",
        }}
      >
        “{q.text}”
      </blockquote>
      <figcaption
        style={{
          marginTop: "0.9rem",
          fontSize: "0.6rem",
          letterSpacing: "0.26em",
          textTransform: "uppercase",
          color: "var(--sand)",
          opacity: 0.7,
        }}
      >
        {q.film}
        {q.year ? ` · ${q.year}` : ""}
      </figcaption>
    </motion.figure>
  );
}

/* -------------------------------------------------------------------------
   Full section: the Arabic quote wall.
   ------------------------------------------------------------------------- */
export function ArabicWall() {
  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(6rem, 14vh, 10rem) clamp(1.25rem, 6vw, 5rem)",
        background:
          "linear-gradient(180deg, #1B120C 0%, #241710 45%, #1B120C 100%)",
        borderTop: "1px solid var(--line-soft)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <motion.header
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          style={{ textAlign: "center", marginBottom: "clamp(3rem, 7vh, 5rem)" }}
        >
          <p className="kicker" style={{ margin: "0 0 1rem" }}>
            Words to keep
          </p>
          <h2
            className="display"
            style={{
              margin: 0,
              fontSize: "clamp(2.1rem, 5.5vw, 3.6rem)",
              color: "var(--latte)",
              fontStyle: "italic",
            }}
          >
            For the years ahead
          </h2>
          <hr className="rule" style={{ maxWidth: 160, margin: "1.6rem auto 0" }} />
        </motion.header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "clamp(2rem, 4vw, 3.2rem)",
          }}
        >
          {ARABIC_QUOTES.map((q, i) => (
            <ArabicQuote key={q.src + i} q={q} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   Full section: the movie-quote reel.
   ------------------------------------------------------------------------- */
export function MovieReel() {
  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(6rem, 14vh, 10rem) clamp(1.25rem, 6vw, 5rem)",
        background:
          "linear-gradient(180deg, #1B120C 0%, #2A1B12 50%, #1B120C 100%)",
        borderTop: "1px solid var(--line-soft)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.header
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          style={{ textAlign: "center", marginBottom: "clamp(3rem, 7vh, 5rem)" }}
        >
          <p className="kicker" style={{ margin: "0 0 1rem" }}>
            Rolling credits
          </p>
          <h2
            className="display"
            style={{
              margin: 0,
              fontSize: "clamp(2.1rem, 5.5vw, 3.6rem)",
              color: "var(--latte)",
              fontStyle: "italic",
            }}
          >
            Lines worth stealing
          </h2>
          <hr className="rule" style={{ maxWidth: 160, margin: "1.6rem auto 0" }} />
        </motion.header>

        <div style={{ display: "grid", gap: "clamp(2.6rem, 6vh, 4rem)" }}>
          {MOVIE_QUOTES.map((q, i) => (
            <div
              key={q.film + i}
              style={{
                borderBottom:
                  i === MOVIE_QUOTES.length - 1 ? "none" : "1px solid var(--line-soft)",
                paddingBottom: "clamp(2.6rem, 6vh, 4rem)",
              }}
            >
              <MovieQuote q={q} align={i % 2 ? "right" : "left"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
