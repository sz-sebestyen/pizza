module.exports = {
  purge: ["./src/*.html", "./src/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#b3bcf5",
          DEFAULT: "#5c6ac4",
          dark: "#202e78",
        },
        secondary: {
          light: "#b3bcf5",
          DEFAULT: "#5c6ac4",
          dark: "#202e78",
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
