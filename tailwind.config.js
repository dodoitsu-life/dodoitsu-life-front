/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A377FF",
        secondary: "#ACBCFF",
        tertiary: "#AEE2FF",
        quaternary: "#E6FFFD",
        "primary-light": "#B799FF",
        "primary-dark": "#9434E9",
      },
      fontFamily: {
        "noto-serif": ["Noto Serif JP", "serif"],
      },

      keyframes: {
        "xScroll-lg": {
          "0%": { transform: "translateX(0)" },
          // 都々逸のカードが800px * 5枚と、余白を含めた数値
          "100%": { transform: "translateX(-4095px)" },
        },
        xScroll: {
          "0%": { transform: "translateX(0)" },
          // 都々逸のカードが600px * 5枚と、余白を含めた数値
          "100%": { transform: "translateX(-3100px)" },
        },
      },
      animation: {
        "xScroll-lg": "xScroll-lg 60s linear infinite",
        xScroll: "xScroll 60s linear infinite",
      },
      transitionDelay: {
        "0s": "0s",
        "60s": "60s",
      },
    },
  },
  plugins: [],
};
