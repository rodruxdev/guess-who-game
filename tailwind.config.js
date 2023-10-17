/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Outfit", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      aspectRatio: {
        "3/4": "3 / 4",
      },
    },
    colors: {
      "dark-blue": "#3D5BB4",
      "soft-blue": "#C1D5F5",
      brown: "#C99765",
      green: "#2D735F",
      yellow: "#F0CD78",
      red: "#B5422D",
      white: "#EDEDED",
    },
  },
  plugins: [],
};
