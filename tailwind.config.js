module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: "#96CFFF",
        navy: "#0b7fbe",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
