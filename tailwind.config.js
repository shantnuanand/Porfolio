/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        super: "#0a192f",
        deep: "#2f5266",
        med: "#6e8897",
        normi: "#a0b2be",
        lite: "#d3d0cb",
      },
    },
  },
  plugins: [],
};
