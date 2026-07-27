import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Sophisticated dark charcoal base
        charcoal: {
          950: "#0a0b0d",
          900: "#0e1014",
          800: "#14171d",
          700: "#1b1f27",
          600: "#242a34",
          500: "#2f3642",
        },
        // Elegant gold accent
        gold: {
          light: "#f5e6a8",
          DEFAULT: "#e8c766",
          400: "#dcae4b",
          500: "#c99b34",
          dark: "#a67c22",
        },
        // Emerald green accent
        emerald: {
          light: "#6ee7b7",
          DEFAULT: "#10b981",
          400: "#34d399",
          500: "#059669",
          dark: "#047857",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(232, 199, 102, 0.35)",
        "glow-emerald": "0 0 40px -10px rgba(16, 185, 129, 0.35)",
        card: "0 8px 40px -12px rgba(0, 0, 0, 0.6)",
        "card-hover": "0 20px 60px -12px rgba(0, 0, 0, 0.75)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gold-gradient": "linear-gradient(135deg, #f5e6a8 0%, #e8c766 45%, #a67c22 100%)",
        "emerald-gradient": "linear-gradient(135deg, #6ee7b7 0%, #10b981 50%, #047857 100%)",
        "premium-gradient":
          "linear-gradient(135deg, rgba(232,199,102,0.9) 0%, rgba(16,185,129,0.85) 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
