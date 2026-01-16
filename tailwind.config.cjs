/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "SF Pro Text", "Inter", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#f5f5ff",
          100: "#e0e2ff",
          200: "#c1c4ff",
          300: "#9da2ff",
          400: "#7a7dff",
          500: "#5d5bff",
          600: "#4a45db",
          700: "#3934aa",
          800: "#282377",
          900: "#19164a"
        }
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top left, rgba(93,91,255,0.35), transparent 55%), radial-gradient(circle at bottom right, rgba(56,189,248,0.25), transparent 55%)"
      },
      boxShadow: {
        glow: "0 0 40px rgba(93,91,255,0.35)"
      }
    }
  },
  plugins: []
};

