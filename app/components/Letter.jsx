"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Popup from "./Popup";
import Dust from "./Dust";
import { LETTER, HER } from "../data/content";
import { sprinkle, poppers } from "./confetti";

export default function Letter() {
  const [wish, setWish] = useState(false);

  const openWish = () => {
    setWish(true);
    sprinkle({ x: 0.5, y: 0.5 });
    setTimeout(poppers, 350);
  };

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(6rem, 15vh, 11rem) clamp(1.25rem, 6vw, 5rem)",
        background:
          "radial-gradient(ellipse 80% 60% at 50% 30%, #3B281C 0%, #241710 50%, #1B120C 100%)",
        borderTop: "1px solid var(--line-soft)",
      }}
    >
      <Dust count={18} />

      <div style={{ position: "relative", zIndex: 4, maxWidth: 720, margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="kicker"
          style={{ margin: "0 0 1.2rem", textAlign: "center" }}
        >
          From your best friend
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="display foil"
          style={{
            margin: "0 0 3rem",
            textAlign: "center",
            fontSize: "clamp(2.4rem, 7vw, 4.6rem)",
            fontStyle: "italic",
          }}
        >
          A few words
        </motion.h2>

        {/* the card */}
        <motion.article
          initial={{ opacity: 0, y: 46, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            padding: "clamp(2rem, 5vw, 3.6rem)",
            borderRadius: 18,
            border: "1px solid var(--line)",
            background:
              "linear-gradient(155deg, rgba(85,57,42,0.35) 0%, rgba(36,23,16,0.9) 55%, rgba(27,18,12,0.96) 100%)",
            boxShadow:
              "0 40px 90px rgba(0,0,0,0.55), inset 0 1px 0 rgba(226,201,166,0.1)",
          }}
        >
          <p
            style={{
              margin: "0 0 1.8rem",
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)",
              fontStyle: "italic",
              color: "var(--latte)",
            }}
          >
            {LETTER.greeting}
          </p>

          {LETTER.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.12 * i }}
              className="serif-body"
              style={{ margin: "0 0 1.5rem" }}
            >
              {p}
            </motion.p>
          ))}

          {/* pull-quote */}
          <figure
            style={{
              margin: "2.6rem 0",
              padding: "1.6rem 0",
              borderTop: "1px solid var(--line)",
              borderBottom: "1px solid var(--line)",
              textAlign: "center",
            }}
          >
            <blockquote
              style={{
                margin: 0,
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: "clamp(1.1rem, 2.4vw, 1.5rem)",
                lineHeight: 1.5,
                color: "var(--cream)",
              }}
            >
              &ldquo;{LETTER.quote.text}&rdquo;
            </blockquote>
            <figcaption
              style={{
                marginTop: "0.8rem",
                fontSize: "0.58rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--sand)",
                opacity: 0.7,
              }}
            >
              {LETTER.quote.film}
            </figcaption>
          </figure>

          <p
            style={{
              margin: "0 0 0.5rem",
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              color: "var(--ink-dim)",
              fontSize: "1.05rem",
            }}
          >
            {LETTER.signOff}
          </p>
          <p
            className="foil"
            style={{
              margin: 0,
              fontFamily: "var(--serif)",
              fontSize: "clamp(2rem, 5vw, 2.9rem)",
              fontStyle: "italic",
              lineHeight: 1.1,
            }}
          >
            {LETTER.signature}
          </p>

          <p
            style={{
              margin: "2.2rem 0 0",
              fontSize: "0.8rem",
              fontFamily: "var(--sans)",
              fontWeight: 300,
              color: "var(--ink-faint)",
              fontStyle: "italic",
            }}
          >
            {LETTER.ps}
          </p>
        </motion.article>

        {/* final popup trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ textAlign: "center", marginTop: "clamp(3rem, 8vh, 5rem)" }}
        >
          <motion.button
            onClick={openWish}
            tabIndex={0}
            whileHover={{ scale: 1.045 }}
            whileTap={{ scale: 0.97 }}
            style={{
              cursor: "pointer",
              border: "1px solid var(--gold-soft)",
              borderRadius: 999,
              padding: "1rem 2.6rem",
              background:
                "linear-gradient(135deg, rgba(169,118,79,0.3), rgba(85,57,42,0.16))",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              color: "var(--cream)",
              fontFamily: "var(--sans)",
              fontSize: "0.74rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            Make a wish
          </motion.button>
        </motion.div>

        {/* footer */}
        <p
          style={{
            marginTop: "clamp(4rem, 10vh, 7rem)",
            textAlign: "center",
            fontSize: "0.58rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--ink-faint)",
          }}
        >
          Made for {HER.name} &middot; with {HER.from}&rsquo;s whole heart
        </p>
      </div>

      {/* ---- the wish popup ---- */}
      <Popup open={wish} onClose={() => setWish(false)} maxWidth={480}>
        <div style={{ padding: "clamp(2.4rem, 6vw, 3.4rem)", textAlign: "center" }}>
          <motion.div
            initial={{ scale: 0.4, rotate: -12, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ fontSize: "3rem", lineHeight: 1, marginBottom: "1.2rem" }}
          >
            &#128367;&#65039;
          </motion.div>

          <p className="kicker" style={{ margin: "0 0 1rem" }}>
            Close your eyes
          </p>

          <h3
            className="display foil"
            style={{
              margin: "0 0 1.4rem",
              fontSize: "clamp(1.9rem, 6vw, 2.8rem)",
              fontStyle: "italic",
            }}
          >
            Happy 18th, Neju
          </h3>

          <p
            dir="rtl"
            lang="ar"
            style={{
              fontFamily: "var(--arabic)",
              fontSize: "1.15rem",
              lineHeight: 2,
              color: "var(--latte)",
              margin: "0 0 0.6rem",
            }}
          >
            &#1603;&#1615;&#1604;&#1617;&#1615; &#1593;&#1614;&#1575;&#1605;&#1613; &#1608;&#1614;&#1571;&#1614;&#1606;&#1618;&#1578;&#1616; &#1576;&#1616;&#1582;&#1614;&#1610;&#1585;
          </p>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontSize: "0.8rem",
              color: "var(--ink-faint)",
              margin: "0 0 1.8rem",
            }}
          >
            Kullu &lsquo;aamin wa anti bi-khayr &mdash; may every year find you well.
          </p>

          <hr className="rule" style={{ maxWidth: 120, margin: "0 auto 1.8rem" }} />

          <p className="serif-body" style={{ margin: 0, fontSize: "1rem" }}>
            Whatever you just wished for &mdash; I hope it finds you. And if it
            takes a while, I hope you know you&rsquo;re already enough while you
            wait.
          </p>
        </div>
      </Popup>
    </section>
  );
}
