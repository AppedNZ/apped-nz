module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: "#0B8FFF",
        navy: "#054A85",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
