import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#2F3B63",
          deep: "#1F2947",
          gold: "#C9A35F",
          white: "#FFFFFF",
          mist: "#F5F5F5",
          ink: "#172033"
        }
      },
      boxShadow: {
        gold: "0 18px 70px rgba(201, 163, 95, 0.22)",
        premium: "0 24px 80px rgba(31, 41, 71, 0.18)"
      },
      backgroundImage: {
        "premium-radial":
          "radial-gradient(circle at top left, rgba(201,163,95,0.22), transparent 32rem), radial-gradient(circle at 80% 10%, rgba(255,255,255,0.08), transparent 28rem)",
        "gold-line":
          "linear-gradient(90deg, transparent, rgba(201,163,95,0.76), transparent)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "Avenir Next",
          "Segoe UI",
          "system-ui",
          "-apple-system",
          "sans-serif"
        ],
        display: [
          "Optima",
          "Avenir Next",
          "Segoe UI",
          "system-ui",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
