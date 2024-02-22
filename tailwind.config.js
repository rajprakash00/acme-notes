/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      haptik: ["GT Haptik", "sans-serif"],
      haptikrotalic: ["GT Haptik Medium Rotalic", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      purple: {
        500: "#6b5a74",
        600: "#564260",
        700: "#412a4c",
        800: "#2c1338",
      },
      pink: "#e57cd8",
    },
  },
  plugins: [],
};
