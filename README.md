# Happy Birthday, Neju

A frontend-only Next.js birthday site for **Nejda Mumtaz (Neju)** — her 18th.
Brown / mocha aesthetic, animations, popups, no backend.

## Run it

```bash
npm run dev      # http://localhost:3000
npm run build    # production build (fully static)
npm start
```

## Music

The background song is `public/music/pehla-lafz.mp3`, configured in
`app/data/content.js` under `MUSIC` (`src`, `title`, `volume`).

It starts on the "Open your surprise" click - browsers only let audio start
after a real click, which is why that is the trigger - then fades in and loops.
A control pill sits bottom-left. To swap the track, drop a new file in
`public/music/` and point `MUSIC.src` at it.

## Editing the words

Everything she reads lives in **`app/data/content.js`**:

| Export | What it is |
| --- | --- |
| `HER` | Her name, nickname, age, year, your name |
| `ARABIC_QUOTES` | 9 Qur'an / hadith quotes — Arabic, transliteration, meaning, source |
| `MOVIE_QUOTES` | 9 English film quotes |
| `SECTIONS` | The 6 photo sections — photo, heading, paragraph, attached quote |
| `LETTER` | Your letter at the end — **change this to your own words** |

The letter is the part worth rewriting in your own voice. Mine is a starting
point, not the real thing.

## Photos

Copied from `assets/` into `public/images/`. To swap which photo goes where,
edit the `image` / `image2` fields in `SECTIONS`.

## The flow

1. **Landing** — "Happy Birthday" animates in letter by letter, `Neju` in gold
   foil, party poppers fire on arrival and twice more. One button.
2. **Click** — big confetti blast, page dissolves, music starts.
3. **Surprise page** — welcome popup, then 6 photo sections with parallax and
   alternating layout. Every photo opens in a lightbox popup.
4. **Quote sections** — the Arabic wall (small type, as asked), then the film reel.
5. **The letter** — from you, with a "Make a wish" popup at the end.

## Structure

```
app/
  page.js                 stage switch: landing <-> surprise
  layout.js               fonts (Cormorant Garamond, Jost, Amiri)
  globals.css             brown palette, grain, vignette, gold foil
  data/content.js         ALL the words
  components/
    Landing.jsx           title + poppers + surprise button
    Surprise.jsx          assembles the scroll page
    PhotoSection.jsx      one photo section, parallax
    Quotes.jsx            quote blocks + the two quote sections
    Letter.jsx            your letter + wish popup
    Popup.jsx             reusable modal
    MusicPlayer.jsx       background song
    confetti.js           popper / blast / sprinkle
    Dust.jsx              floating gold flecks
```

Respects `prefers-reduced-motion` — animations stand down for anyone who's
asked their system to reduce motion.
