import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft-luxury palette
        canvas: "#FBF8F4", // warm porcelain
        surface: "#FFFFFF",
        ink: "#211C18", // warm near-black
        muted: "#6B625A", // soft taupe text
        line: "#ECE6DE", // hairline borders
        gold: {
          DEFAULT: "#B07D56", // warm bronze accent
          soft: "#E8C9A8",
        },
        blush: "#E7C6D6",
        lilac: "#CBBCE6",
        sage: "#BFD0BE",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightish: "-0.02em",
        wider2: "0.18em",
      },
      borderRadius: {
        xl2: "1.5rem",
        xl3: "2rem",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(33,28,24,0.06), 0 12px 30px -12px rgba(33,28,24,0.10)",
        lift: "0 8px 20px -6px rgba(33,28,24,0.10), 0 24px 60px -18px rgba(33,28,24,0.18)",
        glow: "0 0 0 1px rgba(176,125,86,0.18), 0 18px 50px -18px rgba(176,125,86,0.35)",
      },
      backgroundImage: {
        "luxe-gradient":
          "radial-gradient(80% 80% at 20% 10%, rgba(232,201,168,0.45) 0%, rgba(232,201,168,0) 55%), radial-gradient(70% 70% at 85% 20%, rgba(203,188,230,0.40) 0%, rgba(203,188,230,0) 55%), radial-gradient(70% 80% at 60% 90%, rgba(231,198,214,0.35) 0%, rgba(231,198,214,0) 55%)",
        "gold-line":
          "linear-gradient(90deg, rgba(176,125,86,0) 0%, rgba(176,125,86,0.9) 50%, rgba(176,125,86,0) 100%)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-18px) translateX(8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "rotate-cw": { to: { transform: "rotate(360deg)" } },
        "rotate-ccw": { to: { transform: "rotate(-360deg)" } },
        aurora: {
          "0%, 100%": { transform: "rotate(0deg) scale(1.15)" },
          "50%": { transform: "rotate(180deg) scale(1.35)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.45", transform: "translate3d(0,0,0) scale(1)" },
          "50%": { opacity: "0.8", transform: "translate3d(0,-12px,0) scale(1.12)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.15", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.6)" },
        },
        // Floats that preserve a translateZ depth offset (CSS, GPU-friendly).
        "float-z1": {
          "0%, 100%": { transform: "translate3d(0, 0, 35px)" },
          "50%": { transform: "translate3d(8px, -14px, 35px)" },
        },
        "float-z2": {
          "0%, 100%": { transform: "translate3d(0, 0, 55px)" },
          "50%": { transform: "translate3d(-10px, 16px, 55px)" },
        },
        "float-b": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(18px)" },
        },
        "spin-3d": {
          "0%": { transform: "rotateX(0deg) rotateY(0deg)" },
          "100%": { transform: "rotateX(360deg) rotateY(360deg)" },
        },
        "spin-y": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      animation: {
        "float-slow": "float-slow 9s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        "rotate-cw": "rotate-cw 40s linear infinite",
        "rotate-ccw": "rotate-ccw 60s linear infinite",
        aurora: "aurora 24s ease-in-out infinite",
        breathe: "breathe 9s ease-in-out infinite",
        twinkle: "twinkle 4.5s ease-in-out infinite",
        "float-z1": "float-z1 7s ease-in-out infinite",
        "float-z2": "float-z2 9s ease-in-out infinite",
        "float-b": "float-b 7s ease-in-out infinite",
        "spin-3d": "spin-3d 22s linear infinite",
        "spin-y": "spin-y 16s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
