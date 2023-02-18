/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#ff5a5f",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
    },

    container: {
      center: true,

      // or have default horizontal padding
      // padding: "1rem",

      //  breakpoints like bootstrap
      screens: {
        xs: "480px",
        sm: "768px",
        md: "992px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
