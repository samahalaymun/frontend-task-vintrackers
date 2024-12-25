/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#335cff",
          200: "#2547d0",
        },
        background: "#ffffff",
        text: "#242329",
        border: "#e0e4ea",
        hover: "#f4f5f9",
        "text-secondary": "#6d6a7c",
        card: "#ffffff",
        "dark-1": "#000000",
        "dark-2": "#242329",
        "dark-3": "#6d6a7c",
        "dark-4": "#a19fad",
        "light-1": "#FFFFFF",
        "light-2": "#EFEFEF",
        "light-3": "#f9f9f9",
        "light-4": "#efefef",
        "light-5": "#959595",
        "light-6": "#f4f5f9",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

