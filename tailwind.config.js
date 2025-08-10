/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Lora', 'sans-serif'],
        secondary: ['Lora', 'sans-serif'],
      },
      colors: {
        primary: "#157ed2",
        secondary: "#157ed2",
        light: "#fff",
        dark: "#1a1a1a",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          // sm: "640px",
          // md: "768px",
          // lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [],
}

