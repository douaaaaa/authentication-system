/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "blue-1": "#2B4EFF",
        "blue-2": "#2746E6",
        "blue-3": "#213ABF",
        "blue-4": "#162780",
        "blue-5": "#0B1340",
        "txt-clr": "#ededed",
        "bg-from": "#00093E",
        "light-white": "rgba(255,255,255,0.50)",
        "input-field": "#0E1954",
        "bg-footer": "#050B31",
      },
      fontSize: {
        sml: "12px",
      },
      boxShadow: {
        blue: "0 0 22.1px 2px #2B4EFF",
        blueSm: "0 0 15px 2px #2B4EFF",
        bluexSm: "0 0 6.3px 2px #2B4EFF",
      },
    },
  },
  plugins: [],
};
