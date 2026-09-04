export const theme = {
  color: {
    primary: "#ffffe0",
    secondary: "#000",
  },

  font: {
    primary: "Public Sans, sans-serif",
  },
} as const;
export type Theme = typeof theme;
