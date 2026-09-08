"use client";

import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Landing from "./components/Landing";
import Surprise from "./components/Surprise";
import MusicPlayer from "./components/MusicPlayer";

export default function Page() {
  const [opened, setOpened] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  // Fired from the surprise button — a real user gesture, so audio is allowed
  // to start here (browsers block autoplay without one).
  const openSurprise = useCallback(() => {
    setOpened(true);
    setMusicOn(true);
  }, []);

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
