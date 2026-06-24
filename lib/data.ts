/**
 * Single source of truth for all site content.
 * Replace placeholder values marked with  [REPLACE]  with Radhika's real details.
 */

export const site = {
  name: "Radhika Gondaliya",
  role: "UI/UX Designer",
  tagline: "I design calm, human interfaces that make complex products feel effortless.",
  location: "Ahmedabad, India · Working globally",
  email: "radhikagondaliya2106@gmail.com",
  photo: "/radhika.jpg", // save the provided portrait here → public/radhika.jpg
  resumeUrl: "/radhika-resume.pdf", // [REPLACE] drop a PDF in /public
  availability: true, // toggles the "Available for work" pill
  availabilityNote: "Available for select projects — Q3 2026",
  // Get a free key at https://web3forms.com (register it with the email above).
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY", // [REPLACE] required for the contact form
  socials: {
    linkedin: "https://www.linkedin.com/in/radhika-g-33b172249/",
    dribbble: "https://dribbble.com/R_Gondaliya",
  },
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "6+", label: "Years designing" },
  { value: "40+", label: "Products shipped" },
  { value: "4.9", label: "Avg client rating" },
];

// "Trusted by" wordmarks — text logos stand in for real client logos. [REPLACE]
export const brands = [
  "Lumen",
  "Atlas Health",
  "Terra",
  "North",
  "Veda Labs",
  "Orbit",
  "Solstice",
  "Meridian",
];

// "What I do" — capability offering. Recruiters scan this to match roles fast.
export const services = [
  {
    no: "01",
    title: "UX Research & Strategy",
    body: "I uncover what users actually need through interviews, testing, and journey mapping — then turn insight into a clear product direction.",
    deliverables: ["User interviews", "Journey maps", "Usability testing", "Product strategy"],
  },
  {
    no: "02",
    title: "Product & Interface Design",
    body: "High-fidelity, accessible UI with a strong point of view on hierarchy, type, and rhythm — interfaces that feel inevitable.",
    deliverables: ["UI design", "Responsive layouts", "Accessibility (WCAG)", "Visual identity"],
  },
  {
    no: "03",
    title: "Design Systems",
    body: "Scalable component libraries and design tokens that keep teams fast, consistent, and aligned across products.",
    deliverables: ["Component libraries", "Design tokens", "Documentation", "Design ops"],
  },
  {
    no: "04",
    title: "Prototyping & Motion",
    body: "Interactive, motion-true prototypes that communicate intent, win stakeholder buy-in, and de-risk engineering.",
    deliverables: ["Interactive prototypes", "Microinteractions", "Motion specs", "Handoff"],
  },
];

// Aggregate impact band — the proof, in numbers. [REPLACE] with real figures.
export const impactStats = [
  { value: "2.4M+", label: "Users reached across shipped products" },
  { value: "38%", label: "Avg. lift in activation & conversion" },
  { value: "60+", label: "Reusable components designed" },
  { value: "12", label: "Industries, from fintech to health" },
];

export const ctaBand = {
  eyebrow: "Have an idea?",
  heading: "Let's create thoughtful digital experiences.",
  body: "Whether it's a full product or a focused redesign, I'd love to hear what you're working on.",
};

export const about = {
  eyebrow: "About",
  heading: "Design that respects people's time, attention, and intent.",
  paragraphs: [
    "I'm a product designer who lives in the space between research and craft. I start with the messy reality of real users — their goals, frustrations, and context — then shape it into interfaces that feel obvious in hindsight.",
    "My work spans UX research, interaction design, and design systems. I care about the small things: the easing on a transition, the rhythm of a layout, the one word that makes a button click. Good design should feel quiet, confident, and kind.",
    "I partner closely with engineers and PMs, because the best experiences are built, not just drawn. I prototype early, test often, and let evidence — not ego — lead the decision.",
  ],
  values: [
    { title: "User-led", body: "Decisions grounded in research, not assumptions." },
    { title: "Systems-minded", body: "Scalable components over one-off screens." },
    { title: "Craft-obsessed", body: "Motion, spacing, and type tuned to the pixel." },
  ],
  // Quick scannable facts beside the portrait. [REPLACE]
  facts: [
    { label: "Based in", value: "Ahmedabad, India" },
    { label: "Focus", value: "Product · Web · Mobile" },
    { label: "Experience", value: "6+ years" },
    { label: "Currently", value: "Open to new work" },
  ],
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  problem: string;
  role: string;
  tools: string[];
  outcome: string;
  outcomeMetric: string;
  accent: string; // tailwind gradient classes — used as the cover fallback
  cover: string; // drop a cover image at this path → public/projects/<slug>.jpg
  liveUrl?: string; // live website link
  designUrl?: string; // design / case-study link (Dribbble, Behance, Adobe)
  // Extended case-study fields (shown in modal) — [REPLACE] with real content
  overview: string;
  challenges: string[];
  approach: string[];
  results: string[];
};

export const projects: Project[] = [
  {
    slug: "prega-center",
    name: "Prega Center",
    category: "Healthcare · Mobile App", // [REPLACE if needed]
    year: "2024",
    problem:
      "Expecting mothers juggled appointments, health metrics, and trimester guidance across scattered tools.",
    role: "UI/UX Designer",
    tools: ["Figma", "FigJam", "Maze"],
    outcome: "A calm companion app that organizes the whole pregnancy journey in one place.",
    outcomeMetric: "Maternity care",
    accent: "from-blush via-gold-soft to-lilac",
    cover: "/projects/prega-center.png",
    liveUrl: "https://bit.ly/4jLbWme",
    overview:
      "Prega Center supports parents-to-be through every trimester — appointments, wellness, and trusted guidance in a reassuring interface. [REPLACE with real summary]",
    challenges: [
      "Critical info was scattered across notes, apps, and paper.",
      "Medical content felt clinical and anxiety-inducing.",
      "Users needed quick, glanceable progress at every stage.",
    ],
    approach: [
      "Mapped the full pregnancy journey into clear, supportive stages.",
      "Designed a warm, legible system with gentle guidance moments.",
      "Prioritized appointments and health tracking on the home screen.",
    ],
    results: [
      "One calm home for the entire pregnancy journey.",
      "Glanceable trimester progress and reminders.",
      "A reassuring, accessible visual language.",
    ],
  },
  {
    slug: "salon-pwa",
    name: "Salon PWA",
    category: "Beauty · Progressive Web App",
    year: "2024",
    problem:
      "Salon clients dropped off in clunky booking flows and no-showed without timely reminders.",
    role: "Product Designer",
    tools: ["Figma", "Framer", "PWA"],
    outcome: "An installable booking PWA with fast rebooking and smart reminders.",
    outcomeMetric: "Booking PWA",
    accent: "from-lilac via-blush to-gold-soft",
    cover: "/projects/salon-pwa.svg",
    liveUrl: "https://bit.ly/4bnAtc1",
    overview:
      "A progressive web app that makes booking salon services effortless and installable — no app store required. [REPLACE with real summary]",
    challenges: [
      "Multi-step booking caused fall-off before confirmation.",
      "No reliable reminder loop led to no-shows.",
      "Needed app-like speed without a native build.",
    ],
    approach: [
      "Streamlined booking to a fast, progressive flow.",
      "Added one-tap rebooking and reminder nudges.",
      "Designed an installable, offline-friendly PWA shell.",
    ],
    results: [
      "Faster, friendlier booking experience.",
      "Reduced friction to confirm and rebook.",
      "App-like feel, instantly accessible on any device.",
    ],
  },
  {
    slug: "prox-e",
    name: "Prox-E",
    category: "Mobility · Web App", // [REPLACE if needed]
    year: "2024",
    problem:
      "Users couldn't quickly find, compare, and trust the right nearby option in a cluttered map experience.",
    role: "UI/UX Designer",
    tools: ["Figma", "Maze"],
    outcome: "A map-first app to locate, compare, and act in seconds.",
    outcomeMetric: "Map-first UX",
    accent: "from-sage via-gold-soft to-blush",
    cover: "/projects/prox-e.svg",
    liveUrl: "https://bit.ly/3UsLS3I",
    overview:
      "Prox-E reimagines a proximity-based experience around a fast, trustworthy map interface. [REPLACE with real summary]",
    challenges: [
      "Too much information competed for attention on the map.",
      "Users needed confidence before taking action.",
      "Comparison was slow and buried.",
    ],
    approach: [
      "Designed a clean, layered map with progressive detail.",
      "Surfaced trust signals and key details up front.",
      "Made comparison and action a one-tap flow.",
    ],
    results: [
      "Faster discovery with less visual noise.",
      "Clearer trust and decision cues.",
      "A confident, map-first interaction model.",
    ],
  },
  {
    slug: "ldn-collective",
    name: "LDN Collective",
    category: "Creative Agency · Website",
    year: "2023",
    problem:
      "A London creative collective needed a site as crafted and expressive as the work it showcased.",
    role: "UI/UX Designer",
    tools: ["Figma", "Adobe XD"],
    outcome: "An editorial website that showcases the collective's range and voice.",
    outcomeMetric: "Brand website",
    accent: "from-gold-soft via-lilac to-blush",
    cover: "/projects/ldn-collective.svg",
    designUrl: "https://adobe.ly/3FoGSFu",
    liveUrl: "", // [ADD live link if available]
    overview:
      "An editorial portfolio site for a multidisciplinary creative collective. [REPLACE with real summary]",
    challenges: [
      "Diverse work needed one cohesive, premium frame.",
      "The site had to feel editorial, not templated.",
      "Strong typography and rhythm were essential.",
    ],
    approach: [
      "Built an editorial layout system with bold type.",
      "Curated case studies into a confident narrative.",
      "Tuned spacing and motion for a high-end feel.",
    ],
    results: [
      "A distinctive, gallery-grade web presence.",
      "Clear storytelling across varied projects.",
      "A flexible system for future work.",
    ],
  },
  {
    slug: "firm-pet",
    name: "Firm Pet",
    category: "Pet Care · Branding & UI",
    year: "2023",
    problem:
      "A pet-care brand lacked a cohesive identity and a friendly way for owners to book services.",
    role: "UI/UX Designer",
    tools: ["Figma", "Illustrator", "Adobe XD"],
    outcome: "A warm brand system and a delightful booking experience for pet services.",
    outcomeMetric: "Brand & UI",
    accent: "from-sage via-blush to-gold-soft",
    cover: "/projects/firm-pet.svg",
    designUrl: "https://adobe.ly/3Git8Os",
    liveUrl: "", // [ADD live link if available]
    overview:
      "An identity and product design for a modern pet-care service. [REPLACE with real summary]",
    challenges: [
      "Inconsistent brand cues across touchpoints.",
      "Booking felt impersonal and confusing.",
      "Needed warmth without losing trust.",
    ],
    approach: [
      "Crafted a friendly, trustworthy brand system.",
      "Designed a simple, reassuring booking flow.",
      "Balanced playful and professional tones.",
    ],
    results: [
      "A cohesive, lovable brand identity.",
      "An easy, friendly booking experience.",
      "A scalable visual foundation.",
    ],
  },
  {
    slug: "withme",
    name: "withme",
    category: "Social · Web Product",
    year: "2025",
    problem:
      "People wanted a simpler, more personal way to plan and share moments with the people closest to them.",
    role: "Product Designer",
    tools: ["Figma", "Framer"],
    outcome: "A clean, expressive social product — shipped and live.",
    outcomeMetric: "Live product",
    accent: "from-lilac via-gold-soft to-blush",
    cover: "/projects/withme.svg",
    liveUrl: "https://withme.so/",
    overview:
      "End-to-end product design for withme — a warmer way to connect and plan together. [REPLACE with real summary]",
    challenges: [
      "Existing tools felt impersonal and noisy.",
      "Onboarding had to feel effortless.",
      "The product needed a distinct, human voice.",
    ],
    approach: [
      "Designed a focused, friendly core flow.",
      "Created a soft, expressive visual identity.",
      "Refined motion and microcopy for warmth.",
    ],
    results: [
      "A live product with a distinct personality.",
      "An effortless, welcoming first experience.",
      "A cohesive design language across the app.",
    ],
  },
  {
    slug: "vidboard",
    name: "Vidboard",
    category: "AI · SaaS Platform",
    year: "2025",
    problem:
      "Creating polished marketing videos took teams hours of work across specialist, intimidating tools.",
    role: "Product Designer",
    tools: ["Figma", "Framer"],
    outcome: "An approachable AI video-creation platform anyone can use.",
    outcomeMetric: "AI SaaS",
    accent: "from-gold-soft via-blush to-lilac",
    cover: "/projects/vidboard.svg",
    liveUrl: "https://www.vidboard.ai/",
    overview:
      "UI/UX for Vidboard — an AI platform that turns ideas into finished videos fast. [REPLACE with real summary]",
    challenges: [
      "Powerful AI features risked an overwhelming UI.",
      "Non-experts needed pro results without complexity.",
      "The flow had to feel fast and trustworthy.",
    ],
    approach: [
      "Designed a guided, approachable creation flow.",
      "Tamed advanced controls behind progressive disclosure.",
      "Built a confident, modern SaaS interface.",
    ],
    results: [
      "Complex AI made simple and inviting.",
      "A fast path from prompt to polished video.",
      "A scalable product design system.",
    ],
  },
  {
    slug: "memusic",
    name: "Memusic",
    category: "Music · Web Product",
    year: "2025",
    problem:
      "Listeners wanted a more personal, expressive way to discover, collect, and share the music they love.",
    role: "UI/UX Designer",
    tools: ["Figma", "Framer"],
    outcome: "An expressive music experience designed end-to-end — and live.",
    outcomeMetric: "Live product",
    accent: "from-blush via-lilac to-sage",
    cover: "/projects/memusic.svg",
    liveUrl: "https://www.memusic.io/",
    overview:
      "Product design for Memusic — a more personal, expressive way to experience music. [REPLACE with real summary]",
    challenges: [
      "Discovery felt generic and impersonal.",
      "Sharing music lacked emotional expression.",
      "The brand needed a distinctive feel.",
    ],
    approach: [
      "Designed a personal, expressive discovery experience.",
      "Created rich, shareable music moments.",
      "Built a bold, memorable visual identity.",
    ],
    results: [
      "A distinctive, expressive music product.",
      "More personal discovery and sharing.",
      "A cohesive, live experience.",
    ],
  },
];

export const processSteps = [
  {
    no: "01",
    title: "Research",
    body: "Interviews, surveys, and competitive teardowns to understand the real problem before touching pixels.",
    icon: "search",
  },
  {
    no: "02",
    title: "Wireframe",
    body: "Low-fidelity flows and IA to validate structure fast — cheap to change, easy to test.",
    icon: "wireframe",
  },
  {
    no: "03",
    title: "Design",
    body: "High-fidelity UI on a robust design system: type, color, spacing, and components in harmony.",
    icon: "design",
  },
  {
    no: "04",
    title: "Prototype",
    body: "Interactive, motion-true prototypes that communicate intent to stakeholders and engineers.",
    icon: "prototype",
  },
  {
    no: "05",
    title: "Test",
    body: "Usability testing and analytics to validate, learn, and iterate toward measurable outcomes.",
    icon: "test",
  },
];

export const skillGroups = [
  {
    title: "UX",
    skills: ["User Research", "Journey Mapping", "Information Architecture", "Usability Testing", "Wireframing"],
  },
  {
    title: "UI & Interaction",
    skills: ["Visual Design", "Interaction Design", "Motion Design", "Responsive Design", "Accessibility (WCAG)"],
  },
  {
    title: "Systems & Strategy",
    skills: ["Design Systems", "Prototyping", "Design Tokens", "Design Ops", "Stakeholder Workshops"],
  },
];

export const tools = [
  "Figma",
  "FigJam",
  "Adobe XD",
  "Photoshop",
  "Illustrator",
  "Principle",
  "Framer",
  "Maze",
  "Dovetail",
  "Notion",
];

// Set to [] to show the graceful empty state.
export const testimonials = [
  {
    quote:
      "Radhika has a rare gift for turning ambiguity into clarity. She made our product feel calm and trustworthy — and the metrics followed.",
    name: "Aarav Mehta", // [REPLACE]
    title: "Head of Product, Lumen",
  },
  {
    quote:
      "She listens first, designs second. Our clinicians actually enjoy using the tool now, which I never thought I'd say.",
    name: "Dr. Lena Okafor", // [REPLACE]
    title: "Clinical Lead, Atlas Health",
  },
  {
    quote:
      "A true systems thinker. The design system she built still scales with us two years later.",
    name: "Sofia Romano", // [REPLACE]
    title: "Engineering Manager, Terra",
  },
];

export const contact = {
  eyebrow: "Contact",
  heading: "Let's create thoughtful digital experiences.",
  body: "Have a product that deserves more care? I'm open to select freelance projects and full-time roles. Tell me what you're building.",
};
