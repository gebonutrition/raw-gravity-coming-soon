/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],

  darkMode: "class",

  theme: {
    screens: {
      sm: "640px",
      lg: "1200px",
      xl: "1440px"
    },

    extend: {
      colors: {
        brand: {
          cyan: "#00e5ff",
          "cyan-dim": "#009bb3",
          "cyan-glow": "rgba(0, 229, 255, 0.15)"
        },

        surface: {
          base: "#09090b",
          card: "#121216",
          elevated: "#18181d",
          highlight: "#22222a",
          border: "#26262e"
        }
      }
    }
  },

  plugins: []
};