/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0A192F",
        gold: "#C9A86A",
        porcelain: "#F8F8F8",
        ink: "#172033",
        sage: "#5F7E76",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(10, 25, 47, 0.10)",
      },
    },
  },
  plugins: [],
};
