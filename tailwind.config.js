/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#030d10",
        light: "#f8fcfe",
        accent: "#7257de",
        accentDark: "#878be7",
        gray: "#747474",
      },
      fontFamily: {
        inter: ["var(--font-in)"],
        mr: ["var(--font-mr)"],
        poppins: ["var(--font-pop)"]
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};



// 1.55.27