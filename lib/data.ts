/**
 * Single source of truth for all site content.
 * Replace placeholder values marked with  [REPLACE]  with Radhika's real details.
 */

export const site = {
  name: "Radhika Gondaliya",
  role: "UI/UX Designer",
  tagline: "I design calm, human interfaces that make complex products feel effortless.",
  location: "Surat, Gujarat, India · Working globally",
  email: "radhikagondaliya2106@gmail.com",
  photo: "/radhika.jpg", // save the provided portrait here → public/radhika.jpg
  resumeUrl: "/radhika-resume.pdf", // [REPLACE] drop a PDF in /public
  availability: true, // toggles the "Available for work" pill
  availabilityNote: "Available for select projects - Q3 2026",
  // Get a free key at https://web3forms.com (register it with the email above).
  web3formsKey: "eb03c1b8-adcb-4802-b3f3-21dfa7f3c8fe", // [REPLACE] required for the contact form
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
  { value: "8", label: "Featured projects" },
  { value: "3", label: "Live products" },
  { value: "8", label: "Industries" },
];

// "Trusted by" wordmarks - text logos stand in for real client logos. [REPLACE]
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
    body: "I uncover what users actually need through interviews, testing, and journey mapping - then turn insight into a clear product direction.",
    deliverables: ["User interviews", "Journey maps", "Usability testing", "Product strategy"],
  },
  {
    no: "02",
    title: "Product & Interface Design",
    body: "High-fidelity, accessible UI with a strong point of view on hierarchy, type, and rhythm - interfaces that feel inevitable.",
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

// Aggregate impact band — honest figures derived from the real portfolio.
export const impactStats = [
  { value: "20+", label: "Featured projects, end to end" },
  { value: "30+", label: "Live products shipped" },
  { value: "8", label: "Industries - healthcare to Web3" },
  { value: "100%", label: "Design-led, research to UI" },
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
    "I'm a product designer who lives in the space between research and craft. I start with the messy reality of real users — their goals, frustrations, and context - then shape it into interfaces that feel obvious in hindsight.",
    "My work spans UX research, interaction design, and design systems. I care about the small things: the easing on a transition, the rhythm of a layout, the one word that makes a button click. Good design should feel quiet, confident, and kind.",
    "I partner closely with engineers and PMs, because the best experiences are built, not just drawn. I prototype early, test often, and let evidence - not ego - lead the decision.",
  ],
  values: [
    { title: "User-led", body: "Decisions grounded in research, not assumptions." },
    { title: "Systems-minded", body: "Scalable components over one-off screens." },
    { title: "Craft-obsessed", body: "Motion, spacing, and type tuned to the pixel." },
  ],
  // Quick scannable facts beside the portrait. [REPLACE]
  facts: [
    { label: "Based in", value: "Surat, Gujarat, India" },
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
    category: "Healthcare · Web App",
    year: "2024",
    problem:
      "Expecting parents track appointments, health metrics, and trimester guidance across scattered tools - often anxious and unsure what comes next.",
    role: "UI/UX Designer",
    tools: ["Figma", "FigJam"],
    outcome: "A calm maternity-care platform that guides parents through every trimester in one place.",
    outcomeMetric: "Maternity care",
    accent: "from-blush via-gold-soft to-lilac",
    cover: "/projects/prega-center.jpg",
    designUrl: "https://bit.ly/4jLbWme",
    overview:
      "Prega Center is a maternity-care web platform that supports expecting parents through pregnancy - organising appointments, health tracking, and trimester-by-trimester guidance in one warm, reassuring interface. I led the UI/UX from journey mapping to the final visual system.",
    challenges: [
      "Critical information was scattered across notes, apps, and paper.",
      "Medical content can feel clinical and anxiety-inducing for first-time parents.",
      "Parents needed quick, glanceable progress at every stage.",
    ],
    approach: [
      "Mapped the full pregnancy journey into clear, supportive trimester stages.",
      "Designed a soft, legible system with gentle guidance and reassurance built in.",
      "Prioritised appointments and health tracking on the home screen.",
    ],
    results: [
      "One calm home for the entire pregnancy journey.",
      "Glanceable trimester progress, reminders, and guidance.",
      "A reassuring, accessible visual language for a sensitive moment.",
    ],
  },
  {
    slug: "salon-pwa",
    name: "Salon PWA",
    category: "Beauty · Progressive Web App",
    year: "2024",
    problem:
      "Salon clients dropped off in clunky, multi-step booking flows and no-showed without timely reminders.",
    role: "UI/UX Designer",
    tools: ["Figma", "Framer"],
    outcome: "An installable booking PWA with fast rebooking and reminders — no app store required.",
    outcomeMetric: "Booking PWA",
    accent: "from-lilac via-blush to-gold-soft",
    cover: "/projects/salon-pwa.svg",
    designUrl: "https://bit.ly/4bnAtc1",
    overview:
      "Salon PWA is an installable progressive web app for booking salon services. Clients browse treatments, book in a few taps, and get reminders - with the speed and feel of a native app and none of the app-store friction. I designed the end-to-end booking experience.",
    challenges: [
      "A multi-step booking flow caused drop-off before confirmation.",
      "No reliable reminder loop led to costly no-shows.",
      "It needed native-app speed without a native build.",
    ],
    approach: [
      "Streamlined booking into a fast, progressive flow.",
      "Added one-tap rebooking and timely reminder nudges.",
      "Designed an installable, offline-friendly PWA shell.",
    ],
    results: [
      "A faster, friendlier booking experience.",
      "Less friction to confirm and rebook.",
      "An app-like feel, instantly accessible on any device.",
    ],
  },
  {
    slug: "prox-e",
    name: "Prox-E",
    category: "Proxy SaaS · Web Platform",
    year: "2023",
    problem:
      "Businesses collecting web data at scale get blocked and detected - and proxy products are technical and intimidating to buy and manage.",
    role: "UI/UX Designer",
    tools: ["Figma"],
    outcome: "A clear, trustworthy interface for choosing and managing datacenter, residential, and mobile proxies.",
    outcomeMetric: "Proxy platform",
    accent: "from-sage via-gold-soft to-blush",
    cover: "/projects/prox-e.jpg",
    liveUrl: "https://prox-e.io/",
    designUrl: "https://bit.ly/3UsLS3I",
    overview:
      "Prox-E is a premium proxy service - datacenter, residential, and mobile IPs that let businesses access and collect web data at scale, anywhere ('Access Any Data - Anywhere'). I designed a clear, approachable interface for comparing plans and managing proxies, turning a deeply technical product into something easy to understand and trust.",
    challenges: [
      "Proxy types, bandwidth, and rotation are confusing for non-experts.",
      "Plans span three proxy types and many tiers - hard to compare.",
      "A data-access product has to feel legitimate and trustworthy.",
    ],
    approach: [
      "Clarified the three proxy types and when to use each.",
      "Made plan and bandwidth comparison scannable at a glance.",
      "Built a confident, modern SaaS interface that signals trust.",
    ],
    results: [
      "A clear path from 'which proxy do I need' to purchase.",
      "Scannable pricing across datacenter, residential, and mobile.",
      "A trustworthy, professional brand for a technical product.",
    ],
  },
  {
    slug: "ldn-collective",
    name: "LDN Collective",
    category: "Built Environment · Website",
    year: "2023",
    problem:
      "A London network of built-environment experts needed a website as bold and purpose-driven as its mission to create more sustainable, liveable cities.",
    role: "UI/UX Designer",
    tools: ["Figma", "Adobe XD"],
    outcome: "An editorial, values-led website positioning the collective as 'city makers.'",
    outcomeMetric: "Brand website",
    accent: "from-gold-soft via-lilac to-blush",
    cover: "/projects/ldn-collective.jpg",
    designUrl: "https://adobe.ly/3FoGSFu",
    overview:
      "LDN Collective is a London-based network of built-environment experts and creatives working to improve people's lives and the planet's prospects. I designed a bold, editorial website that frames them as 'city makers' — leading with their values and a clear narrative from vision to delivery.",
    challenges: [
      "A broad, multidisciplinary network had to feel like one cohesive voice.",
      "The site needed to communicate values and impact, not just services.",
      "It had to read as purpose-driven and premium — never templated.",
    ],
    approach: [
      "Built a bold, editorial layout system with confident typography.",
      "Led with the collective's values: decisive, dynamic, collaborative, beyond profit.",
      "Told a clear story: creating a vision → building the brief → de-risking the project.",
    ],
    results: [
      "A distinctive, mission-forward web presence.",
      "Clear storytelling of the collective's process and impact.",
      "A confident brand voice for a values-led network.",
    ],
  },
  {
    slug: "firm-pet",
    name: "Firm Pet",
    category: "Pet Health · Web & Product",
    year: "2023",
    problem:
      "Pet owners had no real-time view of their pet's metabolic health — diet, activity, and glucose — making proactive care difficult.",
    role: "UI/UX Designer",
    tools: ["Figma", "Adobe XD"],
    outcome: "A pet metabolic-health product with daily insights, glucose monitoring, and direct vet access.",
    outcomeMetric: "Pet health",
    accent: "from-sage via-blush to-gold-soft",
    cover: "/projects/firm-pet.jpg",
    designUrl: "https://adobe.ly/3Git8Os",
    overview:
      "Firm Pet helps owners stay ahead of their pet's health with real-time metabolic insights — a continuous glucose monitor plus daily diet and activity tracking, alongside direct access to vets, training videos, and calming music therapy. I designed the marketing site and product UI around the promise 'Prime. Perform. Recover.'",
    challenges: [
      "Clinical metabolic data had to feel approachable for everyday owners.",
      "A health product needs to earn trust quickly.",
      "The brand had to balance warmth with credibility.",
    ],
    approach: [
      "Led with a clear value prop: real-time updates on your pet's metabolic health.",
      "Turned metrics — metabolic score, glucose — into glanceable insights.",
      "Paired warm imagery with a trustworthy, structured layout.",
    ],
    results: [
      "An approachable health-product UI.",
      "Clear feature storytelling: monitoring, vet access, training, music therapy.",
      "A credible, caring brand for proactive pet care.",
    ],
  },
  {
    slug: "withme",
    name: "WithMe",
    category: "Creator Platform · Web",
    year: "2024",
    problem:
      "Creators stitched together many disconnected tools to sell content and coaching, making it hard to launch and earn.",
    role: "Product Designer",
    tools: ["Figma", "Framer"],
    outcome: "An all-in-one platform to monetise content and coaching in one place.",
    outcomeMetric: "Live product",
    accent: "from-lilac via-gold-soft to-blush",
    cover: "/projects/withme.jpg",
    liveUrl: "https://withme.so/",
    overview:
      "WithMe turns a creator's social handle into a ready-to-sell business — using AI to spin up courses, coaching, memberships, checkout, and launch copy in one place ('Drop your handle. Watch AI build your creator business.'). I designed an approachable, end-to-end product experience that makes monetising feel effortless.",
    challenges: [
      "Creators were juggling fragmented, intimidating tools.",
      "Onboarding had to feel effortless for non-technical creators.",
      "The product needed a distinct, trustworthy voice.",
    ],
    approach: [
      "Unified content, coaching, and payments into one focused flow.",
      "Designed a clean, encouraging onboarding and creator dashboard.",
      "Built a warm, confident visual identity.",
    ],
    results: [
      "A live, all-in-one platform for creators.",
      "An effortless path from sign-up to earning.",
      "A cohesive design language across the product.",
    ],
  },
  {
    slug: "vidboard",
    name: "Vidboard",
    category: "AI · SaaS Platform",
    year: "2025",
    problem:
      "Creating professional videos meant filming, editing skills, and hours of work — out of reach for most teams.",
    role: "Product Designer",
    tools: ["Figma", "Framer"],
    outcome: "An AI platform that turns a document, text, or URL into a polished video — no filming.",
    outcomeMetric: "AI video",
    accent: "from-gold-soft via-blush to-lilac",
    cover: "/projects/vidboard.jpg",
    liveUrl: "https://www.vidboard.ai/",
    overview:
      "Vidboard.ai lets anyone create studio-quality videos without filming — turning a document, text, or URL into a finished video with 100+ AI avatars and 500+ voices across 100+ languages. I designed an approachable UI that makes a deep AI toolset feel simple for marketers, educators, and creators.",
    challenges: [
      "A powerful AI feature set risked an overwhelming interface.",
      "Non-experts needed professional results, fast.",
      "Multiple input modes — document, text, URL, avatar — had to feel unified.",
    ],
    approach: [
      "Designed a guided, step-by-step creation flow.",
      "Used progressive disclosure to tame advanced controls.",
      "Built a confident, modern SaaS interface across input modes.",
    ],
    results: [
      "Complex AI made simple and inviting.",
      "A fast path from idea to finished video.",
      "A scalable product design language.",
    ],
  },
  {
    slug: "memusic",
    name: "Memusic",
    category: "Music · Web3 Platform",
    year: "2024",
    problem:
      "Listeners get nothing back for their attention, and artists are underpaid by traditional streaming.",
    role: "UI/UX Designer",
    tools: ["Figma", "Framer"],
    outcome: "A blockchain music platform that rewards listeners and opens new revenue for artists.",
    outcomeMetric: "Web3 music",
    accent: "from-blush via-lilac to-sage",
    cover: "/projects/memusic.jpg",
    liveUrl: "https://www.memusic.io/",
    overview:
      "Memusic is a blockchain-based music platform — the first to pair crypto rewards with a traditional model. Listeners earn for streaming, artists unlock new revenue, and fans can co-own tracks as NFTs. I designed an expressive, trustworthy experience around three promises: borderless & accessible, transparent & fair, and fully personalised.",
    challenges: [
      "Web3 and crypto concepts had to feel approachable to mainstream fans.",
      "The 'investment' angle had to coexist with a joyful music experience.",
      "A new platform needed to earn trust immediately.",
    ],
    approach: [
      "Led with familiar music UX, layering Web3 rewards in gently.",
      "Designed clear, transparent reward and fractional-ownership flows.",
      "Built an expressive, personalised visual identity.",
    ],
    results: [
      "An approachable Web3 music experience.",
      "Clear rewards and NFT co-ownership flows.",
      "A bold, memorable brand.",
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
// Real testimonials only. Add entries as Radhika collects them — until then the
// Testimonials section shows a graceful empty state (no fabricated quotes).
export const testimonials: { quote: string; name: string; title: string }[] = [
  // {
  //   quote: "…",
  //   name: "Client name",
  //   title: "Role, Company",
  // },
];

export const contact = {
  eyebrow: "Contact",
  heading: "Let's create thoughtful digital experiences.",
  body: "Have a product that deserves more care? I'm open to select freelance projects and full-time roles. Tell me what you're building.",
};
