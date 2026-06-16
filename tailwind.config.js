/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#151711",
        paper: "#f6f7fb",
        moss: "#59715a",
        teal: "#087f8c",
        clay: "#d85f3f",
        honey: "#e8a23a",
        line: "#dde4d6"
      },
      boxShadow: {
        soft: "0 18px 48px rgba(22, 24, 18, 0.10)"
      }
    }
  },
  plugins: []
};
