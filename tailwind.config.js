/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserratalternates: ["Montserrat Alternates", "sans-serif"],
        bebasneue: ["Bebas Neue", "sans-serif"],
        oswal: ["Oswald", "sans-serif"],
      },
      screens: {
        xs: "433px",
      },
    },
  },
  plugins: [],
};
