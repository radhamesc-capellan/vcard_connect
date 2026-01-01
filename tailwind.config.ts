import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Core: Electric Indigo
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#5B4FFF", // <--- BRAND MAIN (Electric Indigo)
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        // Secondary / Dark Mode Backgrounds
        gray: {
          800: "#1f2937", // Paneles Dark Mode
          900: "#111827", // Fondo Dark Mode
        },
        // Semánticos
        success: "#10b981", // Emerald 500
        action: "#2563eb", // Blue 600
        error: "#dc2626", // Red 600
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(to right, #5B4FFF, #4F9EFF, #00C4FF)",
      },
      borderRadius: {
        xl: "12px", // Brand standard for cards
        lg: "8px", // Brand standard for buttons
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", // Brand standard
        glow: "0 0 20px rgba(91, 79, 255, 0.3)", // Hero glow
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
