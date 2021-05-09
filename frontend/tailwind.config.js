module.exports = {
  purge: ["./src/*.html", "./src/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#D9643C",
          DEFAULT: "#BA441B",
          dark: "#992C07",
        },
        secondary: {
          light: "#2A9763",
          DEFAULT: "#13824D",
          dark: "#056A39",
        },
        easy: "#eee",
        dark: "#434343",
      },
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"],
        "source-sans-pro": ['"Source Sans Pro"', "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
