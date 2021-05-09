module.exports = {
  purge: ["./src/*.html", "./src/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "100vh": "100vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
