/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      strokeWidth: {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
      },
    },
    fontSize: {
      // LineHeight => Font size * 1.6
      xs: ["0.75rem", { lineHeight: "1.2rem", letterSpacing: 1.45, fontWeight: "600" }],
      sm: ["1rem", { lineHeight: "1.6rem", letterSpacing: 1.45, fontWeight: "600" }],
      base: ["1.125rem", { lineHeight: "1.8rem", letterSpacing: 1.45, fontWeight: "600" }],
      lg: ["1.625rem", { lineHeight: "2.6rem", letterSpacing: 1.55, fontWeight: "600" }],
      // LineHeight => Font size * 1.5
      xl: ["2rem", { lineHeight: "3rem", letterSpacing: 1.6, fontWeight: "600" }],
      // LineHeight => Font size * 1.4
      "2xl": ["2.5rem", { lineHeight: "3.5rem", letterSpacing: 1.625, fontWeight: "600" }],
      "3xl": ["3rem", { lineHeight: "4.2rem", letterSpacing: 1.6325, fontWeight: "600" }],
    },
    screens: {
      sm: "192px",
      md: "384px",
      lg: "576px",
      xl: "864px",
      "2xl": "1024px",
      "3xl": "1280px",
      "4xl": "1536px",
    },
    colors: {
      purple: {
        light: "#94439D",
        DEFAULT: "#911A9B",
        dark: "#6F1676",
      },
      blue: {
        light: "#3F87AD",
        DEFAULT: "#276DAD",
        dark: "#21598B",
      },
      red: {
        light: "#BD443C",
        DEFAULT: "#BC2016",
        dark: "#BC1C14",
      },
      green: {
        light: "#2FA26C",
        DEFAULT: "#21A054",
        dark: "#1C8044",
      },
      white: {
        light: "#FBFBFB",
        DEFAULT: "#F6F6F6",
        dark: "#DFDFDF",
      },
      black: {
        light: "#2E2E2E",
        DEFAULT: "#1F1F1F",
        dark: "#111111",
      },
    },
  },
  plugins: [],
};
