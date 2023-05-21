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
        primary: "#B799FF",
        secondary: "#ACBCFF",
        tertiary: "#AEE2FF",
        quaternary: "#E6FFFD",
        "primary-dark": "#A377FF",
      },
      fontFamily: {
        noto: ['"Noto Serif JP"', "serif"], // 'noto' is the name of this utility
      },
    },
  },
  plugins: [],
};
