export const theme = {
  color: {
    primary: "#ffffe0",
    secondary: "#000",
    placeholder: "#d9d9d9",
  },

  font: {
    primary: "'Public Sans', sans-serif",
  },

  fontSize: {
    s: "0.875rem",
    m: "1rem",
    l: "1.75rem",
    h2: "clamp(2rem, 3vw, 3rem)",
    hero: "clamp(3rem, 11vw, 10rem)",

    display: "16vw",
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },

  space: {
    xs: "0.75rem",
    s: "1.25rem",
    m: "1.5rem",
    l: "2rem",
    xl: "2.5rem",
    xxl: "4rem",
    section: "clamp(4rem, 10vw, 8rem)",
  },

  breakpoint: {
    mobile: "768px",
  },
} as const;
