/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      blurple: "#633CFF",
      "light-blurple": "#BEADFF",
      "pale-blurple": "#EFEBFF",
      "dark-grey": "#333333",
      "light-grey": "#737373",
      "pale-grey": "#D9D9D9",
      "off-white": "#FAFAFA",
      white: "#FFFFFF",
      "bright-red": "#FF3939",
    },
    fontFamily: {
      "instrument-bold": ["InstrumentSans-Bold", "sans-serif"],
      "instrument-regular": ["InstrumentSans-Regular", "sans-serif"],
      "instrument-semibold": ["InstrumentSans-SemiBold", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
