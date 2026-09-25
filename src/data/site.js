/**
 * Single source of truth for brand, content and SEO copy.
 * Everything the marketing site renders is driven from here.
 */

const siteConfig = {
  name: "Super Luck",
  legalName: "Super Luck",
  tagline: "Change Your Luck. Energize Your Luck.",
  alternateTagline: "Create. Support. Believe.",
  url: "https://www.superluck.co.in/",

  title: "Super Luck — Wish, Pray & Manifest with a Global Community",
  description:
    "Super Luck is a social lifestyle app for wishes, prayers, blessings and positive intentions. Create a personalised sky lantern for yourself or a loved one, send Pray, Bless, Manifest and Evil Eye Protection energy, and let a worldwide community support your wish. Free on Android and iOS.",

  shortDescription:
    "Create wishes, send positive energy and let a worldwide community support your journey.",

  keywords: [
    "Super Luck",
    "Super Luck app",
    "wish app",
    "sky lantern app",
    "send prayers app",
    "blessings app",
    "manifestation app",
    "law of attraction app",
    "evil eye protection app",
    "positive intentions app",
    "digital lantern",
    "wish and blessing community",
    "spiritual lifestyle app",
    "prayer community app",
    "luck app",
  ],

  app: {
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.superbillionaire.game",
    appStoreUrl: "https://apps.apple.com/sa/app/super-luck-wish/id6768231229",
    category: "Lifestyle",
    operatingSystem: "Android, iOS",
    priceLabel: "Free · optional in-app purchases",
    platforms: ["Android", "iOS"],
    contentRating: "Teen",
  },

  contact: {
    email: "superluck.app@gmail.com",
    phone: "+91 74838 94715",
    phoneHref: "+917483894715",
    location: "Global community hub · Digital world",
    supportHours: "Replies within 24–48 hours on business days",
  },

  /* Placeholder brand channels — swap the "#" for the real profile URLs. */
  socials: [
    { id: "youtube", label: "YouTube", href: "#" },
    { id: "instagram", label: "Instagram", href: "#" },
    { id: "facebook", label: "Facebook", href: "#" },
  ],

  developer: {
    name: "Anwar",
    url: "https://www.instagram.com/mohammed_anwar_abbas",
    creditPrefix: "Website developed by",
  },

  legal: {
    effectiveDate: "21 September 2026",
    lastUpdated: "21 September 2026",
    governingLaw: "India",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Download", href: "/download" },
    { label: "Contact", href: "/contact" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],

  /* ------------------------------------------------------------------ */
  /* The four energy experiences — the heart of the product              */
  /* ------------------------------------------------------------------ */
  energies: [
    {
      id: "pray",
      name: "Pray",
      script: "Send a prayer",
      icon: "HandHeart",
      color: "var(--energy-pray)",
      tagline: "A prayer that travels further than you think.",
      image: "/images/pray.webp",
    },
    {
      id: "bless",
      name: "Bless",
      script: "Send blessings",
      icon: "Sparkles",
      color: "var(--energy-bless)",
      tagline: "Blessings look better when they are shared.",
      image: "/images/bless.webp",
    },
    {
      id: "manifest",
      name: "Manifest",
      script: "Set your intent",
      icon: "Sparkle",
      color: "var(--energy-manifest)",
      tagline: "Write it down. Hold it close. Return to it daily.",
      image: "/images/manifest.webp",
    },
    {
      id: "evil-eye-protection",
      name: "Evil Eye Protection",
      script: "Shield your circle",
      icon: "ShieldCheck",
      color: "var(--energy-protect)",
      tagline: "A symbolic shield for the things you treasure.",
      image: "/images/evil-eye-protection.webp",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* How it works                                                        */
  /* ------------------------------------------------------------------ */
  steps: [
    {
      step: "01",
      title: "Create your wish",
      icon: "PencilLine",
      description:
        "Name what you are hoping for — for yourself or for someone you love. Add a photo, choose a lantern and make it yours.",
    },
    {
      step: "02",
      title: "Choose your energy",
      icon: "WandSparkles",
      description:
        "Attach Pray, Bless, Manifest or Evil Eye Protection. Each one changes the ritual, the visuals and the feeling.",
    },
    {
      step: "03",
      title: "Release the lantern",
      icon: "Send",
      description:
        "Set your lantern free into the sky. Keep it private, or share it so the community can see what you are hoping for.",
    },
    {
      step: "04",
      title: "Receive support",
      icon: "HeartHandshake",
      description:
        "Watch positive intentions arrive from around the world — and send yours toward the wishes that move you.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Feature grid                                                        */
  /* ------------------------------------------------------------------ */
  features: [
    {
      title: "Luck for loved ones",
      icon: "Heart",
      description:
        "Create a lantern for a parent, a partner, a friend or a child. Caring for someone else's wish takes seconds.",
    },
    {
      title: "Personal sky lanterns",
      icon: "Flame",
      description:
        "Premium lantern designs, glitter details and a LUCK emblem on every lantern you release.",
    },
    {
      title: "You control the audience",
      icon: "LockKeyhole",
      description:
        "Keep a wish completely private, or share it publicly with the Super Luck community. Your call, every time.",
    },
    {
      title: "Community wishes",
      icon: "Users",
      description:
        "Explore publicly shared lanterns and send your support to strangers who could use it today.",
    },
    {
      title: "Profile personalisation",
      icon: "ImagePlus",
      description:
        "Add and update your profile picture so your wish has a face — and so people know who they are supporting.",
    },
    {
      title: "Gentle reminders",
      icon: "BellRing",
      description:
        "Optional notifications for lantern activity, community support and moments worth returning to.",
    },
    {
      title: "Share anywhere",
      icon: "Share2",
      description:
        "Send a wish to friends and family directly, or spread it across your own channels.",
    },
    {
      title: "Built for peace of mind",
      icon: "ShieldCheck",
      description:
        "Clear terms, moderation and an account-deletion path available inside the app and on this website.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Social proof (numbers from the brand's own creative)                */
  /* ------------------------------------------------------------------ */
  stats: [
    { value: 1000, suffix: "K/1M+", label: "Prayers & blessings completed" },
    { value: 4, suffix: "", label: "Energy experiences to send" },
    { value: 10, suffix: "+", label: "Wish categories to create" },
    { value: 24, suffix: "/7", label: "Community support flowing" },
  ],

  /* A wall of the kinds of wishes people create — no testimonials invented. */
  wishes: [
    "Financial success",
    "Good health",
    "Dream job",
    "Business growth",
    "Exams & results",
    "Love & marriage",
    "Family peace",
    "Safe travel",
    "New beginnings",
    "Career breakthrough",
    "Peace of mind",
    "Protection from negativity",
    "A happy home",
    "Confidence",
    "Healing",
    "A fresh start",
    "Courage",
    "Gratitude",
  ],

  /* ------------------------------------------------------------------ */
  /* Download                                                           */
  /* ------------------------------------------------------------------ */
  download: {
    android: [
      { title: "Open Google Play", description: "Tap the Google Play button on this page to open the Super Luck listing." },
      { title: "Install the app", description: "Super Luck installs like any other app — no account is required until you want one." },
      { title: "Sign in and create", description: "Add a profile picture, write your first wish and choose an energy to release it with." },
    ],
    ios: [
      { title: "Open the App Store", description: "Tap the App Store button to open Super Luck — Wish on the App Store." },
      { title: "Get the app", description: "Download the app on iPhone or iPad. Super Luck is free to start." },
      { title: "Sign in and create", description: "Personalise your profile and release your first sky lantern in under a minute." },
    ],
    highlights: [
      { icon: "Sparkles", label: "Free to download", detail: "Optional in-app purchases" },
      { icon: "Smartphone", label: "Android & iOS", detail: "Phone and tablet friendly" },
      { icon: "Globe", label: "Worldwide community", detail: "Support from anywhere" },
      { icon: "ShieldCheck", label: "Clear & open", detail: "Terms and privacy published" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* FAQ — also emitted as FAQPage structured data                       */
  /* ------------------------------------------------------------------ */
  faqs: [
    {
      question: "Is Super Luck gambling or betting?",
      answer:
        "No. Super Luck is a lifestyle and social application. Payments inside the app are for optional digital features and experiences — they are not bets, wagers, lottery entries or investments, and no purchase promises a cash return.",
    },
    {
      question: "Does Super Luck guarantee that my wish will come true?",
      answer:
        "No, and no honest app can. Super Luck does not promise any specific outcome — financial, professional, academic, relationship or health related. Animations, energy concepts and luck indicators are part of the digital experience. Your own effort and decisions always matter most.",
    },
    {
      question: "Is Super Luck free?",
      answer:
        "Yes, the app is free to download and free to start using. Some optional digital features and experiences are available as paid items, with the price shown before you buy.",
    },
    {
      question: "Who can use Super Luck?",
      answer:
        "Super Luck is intended for users who are 18 years or older, unless the law in your country or region requires a different minimum age. You confirm you are legally permitted to use the services in your jurisdiction.",
    },
    {
      question: "Can I create a wish for someone else?",
      answer:
        "Yes. You can create luck for family, friends and other people you care about. If you include another person's name or photograph, you confirm you have their permission or another lawful basis to do so.",
    },
    {
      question: "Will my wishes be public?",
      answer:
        "Only if you choose that. Public wishes may be visible to other Super Luck users, including your username and profile photo depending on your settings. Private wishes are handled according to the privacy controls shown to you.",
    },
    {
      question: "How do I delete my account and data?",
      answer:
        "You can request deletion through the account-deletion feature inside the app or through the account and data deletion process on this website. Some records may be retained where the law, security or fraud prevention requires it.",
    },
    {
      question: "How do refunds work for in-app purchases?",
      answer:
        "Purchases made through Google Play or the Apple App Store follow that platform's payment, cancellation and refund rules. Start with the app store's refund or support process, then reach out to us through the contact page if you still need help.",
    },
    {
      question: "Does Super Luck use my location?",
      answer:
        "Only when a feature needs it and only with your permission. You stay in control through your device settings, and we do not require location access unless a feature you choose to use depends on it.",
    },
  ],

  /* A short, honest safety note shown on the home page and in the footer. */
  disclaimer:
    "Super Luck is a digital lifestyle and social experience. It does not guarantee any real-world outcome, and it is not a substitute for medical, legal, financial or psychological advice.",
};

export default siteConfig;
