/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6347",
        secondary: "#FAFAFA",
        accent: "#FF4500",
        neutral: "#333d4b",
      },

      backgroundImage: {
        hero: "url('../public/assets/images/hero-bg.jpg')",
        about: "url('../public/assets/images/hero-about.jpg')",
        category: "url('../public/assets/images/hero-category.jpg')",
      },
    },
  },
  plugins: [],
};
