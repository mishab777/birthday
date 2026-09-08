// ---------------------------------------------------------------------------
//  All the words + photos live here. Edit this one file to change the site.
// ---------------------------------------------------------------------------

export const HER = {
  name: "Nejda Mumtaz",
  nick: "Neju",
  age: 18,
  year: "2026",
  from: "Mishab",
};

// --- Background song --------------------------------------------------------
// The file lives in /public/music/. Starts on the "Open your surprise" click,
// fades in, and loops. If the file is missing the control just hides itself.
export const MUSIC = {
  src: "/music/pehla-lafz.mp3",
  title: "Pehla Lafz",
  volume: 0.42, // 0 - 1
};

// --- Arabic / Islamic quotes (rendered in a smaller font) -------------------
export const ARABIC_QUOTES = [
  {
    ar: "وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ",
    tr: "Wa 'asa an takrahu shay'an wa huwa khayrun lakum",
    en: "Perhaps you dislike a thing, and it is good for you.",
    src: "Qur'an 2:216",
  },
  {
    ar: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    tr: "Inna ma'al-'usri yusra",
    en: "Indeed, with hardship comes ease.",
    src: "Qur'an 94:6",
  },
  {
    ar: "اغْتَنِمْ خَمْسًا قَبْلَ خَمْسٍ: شَبَابَكَ قَبْلَ هَرَمِكَ",
    tr: "Ightanim khamsan qabla khams: shababaka qabla haramik",
    en: "Take advantage of five before five — your youth before your old age.",
    src: "Hadith — Al-Hakim",
  },
  {
    ar: "رَبِّ زِدْنِي عِلْمًا",
    tr: "Rabbi zidni 'ilma",
    en: "My Lord, increase me in knowledge.",
    src: "Qur'an 20:114",
  },
  {
    ar: "فَاذْكُرُونِي أَذْكُرْكُمْ",
    tr: "Fadhkuruni adhkurkum",
    en: "So remember Me; I will remember you.",
    src: "Qur'an 2:152",
  },
  {
    ar: "بَارَكَ اللَّهُ لَكِ فِي عُمْرِكِ",
    tr: "Barakallahu laki fi 'umrik",
    en: "May Allah place blessing in every year you are given.",
    src: "A du'a for you",
  },
  {
    ar: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ",
    tr: "Khayrun-nasi anfa'uhum lin-nas",
    en: "The best of people are the most beneficial to people.",
    src: "Hadith — Al-Tabarani",
  },
  {
    ar: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    tr: "Hasbunallahu wa ni'mal-wakeel",
    en: "Allah is sufficient for us, and He is the best guardian.",
    src: "Qur'an 3:173",
  },
  {
    ar: "وَبَشِّرِ الصَّابِرِينَ",
    tr: "Wa bashshiris-sabireen",
    en: "And give good news to those who are patient.",
    src: "Qur'an 2:155",
  },
];

// --- English quotes, all from films ----------------------------------------
export const MOVIE_QUOTES = [
  {
    text: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
    film: "Harry Potter and the Prisoner of Azkaban",
    year: "2004",
  },
  {
    text: "It is not our abilities that show what we truly are. It is our choices.",
    film: "Harry Potter and the Chamber of Secrets",
    year: "2002",
  },
  {
    text: "All we have to decide is what to do with the time that is given us.",
    film: "The Lord of the Rings: The Fellowship of the Ring",
    year: "2001",
  },
  {
    text: "The flower that blooms in adversity is the most rare and beautiful of all.",
    film: "Mulan",
    year: "1998",
  },
  {
    text: "Hope is a good thing, maybe the best of things, and no good thing ever dies.",
    film: "The Shawshank Redemption",
    year: "1994",
  },
  {
    text: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
    film: "Ferris Bueller's Day Off",
    year: "1986",
  },
  {
    text: "Why do we fall? So that we can learn to pick ourselves up.",
    film: "Batman Begins",
    year: "2005",
  },
  {
    text: "Some people are worth melting for.",
    film: "Frozen",
    year: "2013",
  },
  {
    text: "Adventure is out there!",
    film: "Up",
    year: "2009",
  },
];

// --- Photo sections ---------------------------------------------------------
// `span` controls the frame shape: "portrait" | "wide" | "square"
export const SECTIONS = [
  {
    id: "golden",
    index: "01",
    kicker: "Where it begins",
    title: "Golden",
    body:
      "Eighteen years of you. Somehow the world got warmer the whole way through, and nobody thought to thank you for it. So — thank you.",
    image: "/images/IMG_4933.PNG",
    span: "portrait",
    quote: { type: "ar", i: 5 },
  },
  {
    id: "flowers",
    index: "02",
    kicker: "The yellow field",
    title: "Small joys",
    body:
      "You are the kind of person who stops for a flower. That's not a small thing — most people walk straight past their own lives.",
    image: "/images/neju1.png",
    image2: "/images/neju2.png",
    span: "wide",
    quote: { type: "en", i: 5 },
  },
  {
    id: "quiet",
    index: "03",
    kicker: "Quiet evenings",
    title: "Stillness",
    body:
      "Even doing nothing at all, you look like someone thinking of something kind. That's just how you are built.",
    image: "/images/njeda.png",
    image2: "/images/nejda3.png",
    span: "wide",
    quote: { type: "ar", i: 1 },
  },
  {
    id: "white",
    index: "04",
    kicker: "In cream and light",
    title: "Grace",
    body:
      "Some people wear the colour. You wear the calm. There's a difference, and everybody notices it but you.",
    image: "/images/IMG_4932.PNG",
    span: "portrait",
    quote: { type: "en", i: 3 },
  },
  {
    id: "emerald",
    index: "05",
    kicker: "A softer frame",
    title: "Still you",
    body:
      "Different day, different colour, same girl who makes a room easier to be in.",
    image: "/images/IMG_4715.JPG.jpeg",
    image2: "/images/neju3.png",
    span: "wide",
    quote: { type: "ar", i: 2 },
  },
  {
    id: "eighteen",
    index: "06",
    kicker: "And here it is",
    title: "Eighteen",
    body:
      "One cake, two candles' worth of number, and a whole decade of the good part still ahead. Make the wish properly this time.",
    image: "/images/nejda2.png",
    span: "wide",
    quote: { type: "en", i: 8 },
  },
];

// --- The letter at the end --------------------------------------------------
export const LETTER = {
  greeting: "Neju,",
  paragraphs: [
    "A month ago you were a stranger on Snapchat. Three words — how are you? — and somehow that was the whole beginning. You actually answered it, and then you kept answering it, every single day since.",
    "We got close embarrassingly fast. Same vibes, same humour, same habit of being awake and overthinking at the exact same hour. A month shouldn't be enough time to really know someone. Somehow it was.",
    "You've trusted me with the heavy things too — the bad days, the low ones where you don't sound like yourself, the thoughts you don't hand to just anyone. I'm never going to pretend I can fix any of that. But I can listen, every time, for as long as it takes, and never once get tired of you. And I need you to believe that the low days are not the truest thing about you. They're weather. You're the sky.",
    "Then there's the other side of you — the ideas, the concepts, the plans you send me out of nowhere at odd hours. Don't ever stop sending those. I'm backing all of them, including the unrealistic ones. Especially those.",
    "So — eighteen. One month in, and I'm already certain of this much: whatever this year throws at you, you are not facing it on your own. Go be eighteen. Be a little reckless with your happiness. Text me when it's good, and text me when it isn't.",
  ],
  quote: {
    text: "I can't carry it for you, but I can carry you.",
    film: "The Lord of the Rings: The Return of the King",
  },
  signOff: "Always one message away,",
  signature: "Mishab",
  ps: "P.S. — Happy birthday, Neju. Now go eat the cake.",
};
