const {heroui} = require('@heroui/theme');
const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(date-picker|button|ripple|spinner|calendar|date-input|form|popover).js",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/@heroui/theme/dist/components/(accordion|divider).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "grid-white-faint": `linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)`,
        "grid-white-visible": `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
      },
      padding: {
        0.5: "2px",
      },
      backgroundSize: {
        grid: "30px 30px",
      },
      colors: {
        primary: "#0d1116",
        "primary-light": "#202831",
        secondary: "#5252e5",
        "border-secondary": "#3a3a6a",
        "blue-light": "#6c6cf5",
        "blue-dark": "#",
        "primary-border": "#2e3136",
        black: {
          DEFAULT: "#1A1919",
          50: "#E8E8E8",
          100: "#D1D1D1",
          200: "#A2A2A2",
          300: "#5D5D5D",
          400: "#454545",
          500: "#2E2E2E",
          600: "#101820",
        },
        gray: {
          DEFAULT: "#E8E6EA",
          50: "#EFEFEF",
          100: "#DFDFDF",
          150: "#727485",
          200: "#BEBEBE",
          300: "#9E9E9E",
          400: "#8E8E8E",
          500: "#7D7D7D",
          600: "#5D5D5D",
        },
        green: {
          DEFAULT: "#009f30",
          50: "#EBF6EE",
          100: "#D6EEDD",
          200: "#AEDCBA",
          300: "#85CB98",
          400: "#71C287",
          500: "#48B164",
          600: "#34A853",
        },
        yellow: {
          DEFAULT: "#E5B000",
          50: "#FFFAE6",
          100: "#FFF5CC",
          200: "#FFEB9A",
          300: "#FFE681",
          400: "#FFE067",
          500: "#FFD635",
          600: "#FFCC02",
        },
        red: {
          DEFAULT: "#FA5050",
          50: "#FFF5F4",
          100: "#FFD8D6",
          200: "#FFB1AC",
          300: "#FF8A83",
          400: "#FF776E",
          500: "#FF5045",
          600: "#EA4336",
        },
        purple: {
          DEFAULT: "#EEEEFB",
          50: "#EEEEFB",
          100: "#DEDDF7",
          200: "#BCBBEF",
          300: "#ACABEB",
          400: "#8A89E3",
          500: "#6967DB",
          600: "#5856D7",
        },
      },
    },
  },
  plugins: [nextui(),heroui()],
};
