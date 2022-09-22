const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "5xl": { max: "1912px" },
      "4xl": { max: "1708px" },
      "3xl": { max: "1504px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1300px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "972px" },
      // => @media (max-width: 1023px) { ... }
      tall: { max: "1024px" },
      md: { max: "772px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        card: "0 8px 24px rgb(0 0 0 / 50%)",
      },
      colors: {
        "light-gray": "#b3b3b3",
        "text-l-gray": "#a7a7a7",
        "top-black": "#101010",
        "card-hover": "#282828",
        "card-bg": "#181818",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
