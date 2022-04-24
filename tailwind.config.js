module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bali: "url('./dist/img/bali.jpg')",
        chicago: "url('./dist/img/chicago.jpg')",
        europe: "url('./dist/img/europe.jpg')",
        iceland: "url('./dist/img/iceland.jpg')",
        LA: "url('./dist/img/LA.jpg')",
        miami: "url('./dist/img/miami.jpg')",
        newYork: "url('./dist/img/new_york.jpg')",
        norway: "url('./dist/img/norway.jpg')",
        sanFrancisco: "url('./dist/img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('./dist/img/sanFranciscoDesktop.jpg')",
        seattle: "url('./dist/img/seattle.jpg')",
        switzerland: "url('./dist/img/switzerland.jpg')",
        sydney: "url('./dist/img/sydney.jpg')",
        yosemite: "url('./dist/img/yosemite.jpg')",
      },
      colors: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        terciary: "#61AEC9",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      /* backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#8FA206",
        terciary: "#61AEC9",
      }),
      textColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#8FA206",
        terciary: "#61AEC9",
      }), */
    },
  },
  plugins: [],
};
