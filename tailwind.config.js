/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "aririu-blue": "#1e293b",
        "aririu-orange": "#f97316",
      },
    },
  },
  plugins: [],
};
