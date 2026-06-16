import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1A2B",
        coral: "#FF6B5B",
        amber: "#F5A623",
        sand: "#F7F4EE",
        jade: "#1FAE8B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 24px 60px -24px rgba(14,26,43,0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
