// Generates branded SVG cover mockups for each project → public/projects/<slug>.svg
// Run: node scripts/gen-covers.mjs   (re-run anytime to regenerate)
// Replace any file with a real screenshot whenever you have one.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../public/projects");
mkdirSync(outDir, { recursive: true });

const projects = [
  { slug: "prega-center", name: "Prega Center", cat: "HEALTHCARE · MOBILE", big: "Maternity care", sub: "One calm pregnancy companion", c: ["#E7C6D6", "#E8C9A8", "#CBBCE6"] },
  { slug: "salon-pwa", name: "Salon PWA", cat: "BEAUTY · PWA", big: "Booking PWA", sub: "Fast, installable booking", c: ["#CBBCE6", "#E7C6D6", "#E8C9A8"] },
  { slug: "prox-e", name: "Prox-E", cat: "MOBILITY · WEB", big: "Map-first UX", sub: "Find, compare, act fast", c: ["#BFD0BE", "#E8C9A8", "#E7C6D6"] },
  { slug: "ldn-collective", name: "LDN Collective", cat: "AGENCY · WEBSITE", big: "Brand website", sub: "An editorial portfolio site", c: ["#E8C9A8", "#CBBCE6", "#E7C6D6"] },
  { slug: "firm-pet", name: "Firm Pet", cat: "PET CARE · BRANDING", big: "Brand & UI", sub: "Warm identity + booking", c: ["#BFD0BE", "#E7C6D6", "#E8C9A8"] },
  { slug: "withme", name: "withme", cat: "SOCIAL · WEB", big: "Live product", sub: "A warmer way to connect", c: ["#CBBCE6", "#E8C9A8", "#E7C6D6"] },
  { slug: "vidboard", name: "Vidboard", cat: "AI · SAAS", big: "AI video", sub: "Ideas into finished videos", c: ["#E8C9A8", "#E7C6D6", "#CBBCE6"] },
  { slug: "memusic", name: "Memusic", cat: "MUSIC · WEB", big: "Live product", sub: "Personal music discovery", c: ["#E7C6D6", "#CBBCE6", "#BFD0BE"] },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const svg = (p) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="900" gradientUnits="userSpaceOnUse">
      <stop stop-color="${p.c[0]}"/><stop offset="0.5" stop-color="${p.c[1]}"/><stop offset="1" stop-color="${p.c[2]}"/>
    </linearGradient>
    <filter id="sh" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="26" stdDeviation="34" flood-color="#211C18" flood-opacity="0.16"/>
    </filter>
  </defs>
  <rect width="1200" height="900" fill="url(#bg)"/>
  <circle cx="240" cy="150" r="220" fill="#FFFFFF" opacity="0.18"/>
  <circle cx="1040" cy="800" r="240" fill="#FBF8F4" opacity="0.22"/>
  <g filter="url(#sh)"><rect x="300" y="160" width="600" height="470" rx="26" fill="#FBF8F4"/></g>
  <circle cx="338" cy="202" r="7" fill="#B07D56"/><circle cx="362" cy="202" r="7" fill="#E7C6D6"/><circle cx="386" cy="202" r="7" fill="#CBBCE6"/>
  <text x="862" y="208" text-anchor="end" font-family="Georgia,'Times New Roman',serif" font-size="16" letter-spacing="2" fill="#6B625A">${esc(p.cat)}</text>
  <rect x="338" y="240" width="524" height="110" rx="16" fill="#211C18"/>
  <text x="364" y="290" font-family="Georgia,'Times New Roman',serif" font-size="32" fill="#E8C9A8">${esc(p.big)}</text>
  <text x="364" y="322" font-family="Arial,system-ui,sans-serif" font-size="15" letter-spacing="0.5" fill="#FBF8F4" opacity="0.7">${esc(p.sub)}</text>
  <rect x="338" y="372" width="166" height="78" rx="12" fill="#FFFFFF" stroke="#ECE6DE"/>
  <rect x="517" y="372" width="166" height="78" rx="12" fill="#FFFFFF" stroke="#ECE6DE"/>
  <rect x="696" y="372" width="166" height="78" rx="12" fill="#FFFFFF" stroke="#ECE6DE"/>
  <rect x="360" y="394" width="58" height="16" rx="8" fill="#B07D56" opacity="0.75"/><rect x="360" y="420" width="92" height="10" rx="5" fill="#ECE6DE"/>
  <rect x="539" y="394" width="58" height="16" rx="8" fill="#CBBCE6"/><rect x="539" y="420" width="92" height="10" rx="5" fill="#ECE6DE"/>
  <rect x="718" y="394" width="58" height="16" rx="8" fill="#BFD0BE"/><rect x="718" y="420" width="92" height="10" rx="5" fill="#ECE6DE"/>
  <rect x="338" y="476" width="524" height="14" rx="7" fill="#ECE6DE"/>
  <rect x="338" y="504" width="430" height="14" rx="7" fill="#ECE6DE"/>
  <rect x="338" y="548" width="150" height="48" rx="24" fill="#211C18"/>
  <rect x="504" y="548" width="150" height="48" rx="24" fill="none" stroke="#ECE6DE" stroke-width="2"/>
  <text x="80" y="780" font-family="Georgia,'Times New Roman',serif" font-style="italic" font-size="66" fill="#211C18">${esc(p.name)}</text>
  <text x="84" y="826" font-family="Arial,system-ui,sans-serif" font-size="17" letter-spacing="3" fill="#211C18" opacity="0.5">SELECTED WORK</text>
</svg>`;

for (const p of projects) {
  writeFileSync(resolve(outDir, `${p.slug}.svg`), svg(p), "utf8");
  console.log("wrote", `${p.slug}.svg`);
}
console.log("Done — 8 covers generated.");
