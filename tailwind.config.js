module.exports = {
  content: ["./src/**/*.{js,jsx,ts, tsx}"],
  theme: {
    extend: {
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
      },
      backgroundImage: {
        "hero-desktop": "url('/src/assets/images/home/desktop/image-hero.jpg')",
        "hero-mobile": "url('/src/assets/images/home/mobile/image-hero.jpg')",
      },
    },
    colors: {
      bg: "#fafafa",
      orange: "#d87d4a",
      "orange-light": "#fbaf85",
      gray: "#f1f1f1",
      lightGray: "#d3d3d3",
      white: "#fff",
      black: "#191919",
      text: "rgba(255, 255, 255, 0.5)",
      divider: "rgba(255, 2555, 255, 0.1)",
      placeholder: "rgba(0, 0, 0, 0.4)",
      inputBorder: "#cfcfcf",
      inputError: "#cd2c2c",
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },

    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".5em",
    },
  },
  plugins: [],
};
