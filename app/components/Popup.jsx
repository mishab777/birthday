"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/** Centred modal with a warm blurred scrim. Closes on backdrop click or Esc. */
export default function Popup({ open, onClose, children, maxWidth = 560 }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 80,
            display: "grid",
            placeItems: "center",
            padding: "1.25rem",
            background: "rgba(16, 10, 7, 0.78)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 18 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth,
              maxHeight: "88svh",
              overflowY: "auto",
              borderRadius: 20,
              border: "1px solid var(--line)",
              background:
                "linear-gradient(160deg, #33221799 0%, #241710f2 55%, #1B120C 100%)",
              boxShadow:
                "0 40px 90px rgba(0,0,0,0.65), inset 0 1px 0 rgba(226,201,166,0.12)",
            }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                position: "absolute",
                top: 14,
                right: 14,
                zIndex: 2,
                width: 34,
                height: 34,
                display: "grid",
                placeItems: "center",
                borderRadius: "50%",
                border: "1px solid var(--line)",
                background: "rgba(27,18,12,0.7)",
                color: "var(--sand)",
                cursor: "pointer",
                fontSize: "0.95rem",
                lineHeight: 1,
              }}
            >
              ✕
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
