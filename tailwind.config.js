/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{tsx,ts,js}",
    "./pages/**/*.{tsx,ts,js}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#EEEEEE",
        black: "#333333",
      },
      clipPath: {
        "slanted-left": "polygon(0 0, 100% 0, 50% 100%, 0 100%)",
      },
      fontFamily: {
        lexend: ['"Lexend Mega"', "serif"],
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
