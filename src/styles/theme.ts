export default {
  grid: {
    container: "93.3rem",
    gutter: "2.4rem",
  },
  border: {
    radius: "0.4rem",
  },
  font: {
    family:
      "Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    normal: 400,
    medium: 500,
    bold: 700,
    sizes: {
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "1.8rem",
      xlarge: "2.0rem",
      xxlarge: "2.8rem",
      xxxlarge: "4.0rem",
      huge: "5.2rem",
    },
  },
  colors: {
    primary: "#C02838",
    secondary: "#d0ab76",
    mainBg: "#EEEEEE",
    white: "#FEFEFE",
    black: "#2E2E37",
    gray: "#777",
    lightGray: "#ccc",
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
    huge: "10rem",
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out",
  },
} as const;
