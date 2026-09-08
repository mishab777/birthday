"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Landing from "./components/Landing";
import Surprise from "./components/Surprise";
import MusicPlayer from "./components/MusicPlayer";

/**
 * Bare wine backdrop — identical on the server and on the first client render,
 * so hydration always matches. It is what sits behind the landing anyway
 * (every element there starts at opacity 0), so the swap is invisible.
 */
function Backdrop() {
  return (
    <div
      style={{
        minHeight: "100svh",
        background:
          "radial-gradient(ellipse 70% 55% at 50% 30%, var(--wine-lit) 0%, var(--wine) 45%, var(--wine-edge) 100%)",
      }}
    />
  );
}

export default function Page() {
  const [opened, setOpened] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  // The whole experience is animation-driven and client-only. Framer Motion
  // derives styles from the live DOM, so anything it renders on the server is
  // a guess that can disagree with the client and trip a hydration mismatch.
  // Gating on mount means the server and the first client render are both the
  // plain Backdrop above — identical by construction — and the animated tree
  // only ever mounts in the browser. Nothing here benefits from SSR.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Fired from the surprise button — a real user gesture, so audio is allowed
  // to start here (browsers block autoplay without one).
  const openSurprise = useCallback(() => {
    setOpened(true);
    setMusicOn(true);
  }, []);

  if (!mounted) return <Backdrop />;

  return (
    <main>
      <AnimatePresence mode="wait">
        {opened ? (
          <Surprise key="surprise" />
        ) : (
          <Landing key="landing" onOpen={openSurprise} />
        )}
      </AnimatePresence>

      <MusicPlayer playing={musicOn} onToggle={setMusicOn} visible={opened} />
    </main>
  );
}
