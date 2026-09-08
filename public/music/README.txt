BACKGROUND MUSIC
================

Currently playing:  pehla-lafz.mp3   ("Pehla Lafz")

The track is configured in  app/data/content.js  ->  MUSIC:

    export const MUSIC = {
      src: "/music/pehla-lafz.mp3",   // path, relative to /public
      title: "Pehla Lafz",            // shown on the control pill
      volume: 0.42,                   // 0 - 1
    };

To swap the song: drop the new file in this folder and update MUSIC.src
(and title) to match. Nothing else needs to change.

It starts playing the moment the "Open your surprise" button is clicked
(browsers only allow audio to start after a real click, so that's the trigger),
fades in over ~2.5s, and loops. The control pill sits bottom-left - click it
to pause or resume.

If the file is missing the site still works perfectly; the control just hides
itself. No error, nothing broken.
