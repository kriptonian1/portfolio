/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5F5F5",
        light: "#7A7A7A",
        middle: "#5C5C5C",
        dark: "#131313",
      },
      fontFamily: {
        georgia: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
