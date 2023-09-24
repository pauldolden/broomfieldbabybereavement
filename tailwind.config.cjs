/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "blaw-pink": "#E067A2",
        "blaw-blue": "#245AA9",
        yellow: "#FFCB00",
        "yellow-gra-end": "#FDF2B1",
        "yellow-gra-start": "#FBFDEE",
        dark: "#1E1E1E",
      },
    },
  },
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        // Hack to add SVG colouring using filters: https://svgimagecolor.com/
        ".svg-yellow": {
          filter:
            "invert(67%) sepia(95%) saturate(789%) hue-rotate(1deg) brightness(106%) contrast(104%)",
        },
      });
    },
  ],
};
