/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
  },

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A377FF",
        "primary-light": "#B799FF",
        "primary-dark": "#9434E9",
        secondary: "#ACBCFF",
        "secondary-light": "#C4D2FF",
        "secondary-dark": "#8A9CFF",
        tertiary: "#AEE2FF",
        "tertiary-light": "#C4E9FF",
        "tertiary-dark": "#8ACDFF",
        quaternary: "#E6FFFD",
        "quaternary-light": "#F0FFFF",
        "quaternary-dark": "#D0FFFF",
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
        // loading時のスケルトンアニメーション
        pulse: {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
        },
      },
      animation: {
        "xScroll-lg": "xScroll-lg 60s linear infinite",
        xScroll: "xScroll 60s linear infinite",
        // loading
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
      },
      transitionDelay: {
        "0s": "0s",
        "60s": "60s",
      },
    },
  },
};
