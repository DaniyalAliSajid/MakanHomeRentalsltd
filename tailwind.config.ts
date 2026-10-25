import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brand-dark": "#070C12",
        "brand-card": "#0F172A",
        "brand-gold": "#D4AF37",
        "brand-gold-hover": "#C5A059",
        "brand-light": "#F8FAFC",
        "brand-muted": "#94A3B8",
        brand: {
          dark: "#070C12",
          card: "#0F172A",
          gold: {
            DEFAULT: "#D4AF37",
            hover: "#C5A059",
            light: "#F3E5AB",
            dark: "#997A15",
          },
          light: "#F8FAFC",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        heading: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        body: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        "gold-glow": "0 0 25px -5px rgba(212, 175, 55, 0.25)",
        "gold-glow-lg": "0 0 45px -5px rgba(212, 175, 55, 0.4)",
        "dark-card": "0 10px 30px -10px rgba(0, 0, 0, 0.7)",
        "inner-gold": "inset 0 1px 1px 0 rgba(212, 175, 55, 0.2)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #F5E6BE 50%, #C5A059 100%)",
        "gold-shimmer": "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent)",
        "obsidian-radial": "radial-gradient(circle at 50% 0%, #16243b 0%, #070C12 75%)",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
