/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: "#5956E9",
        black: "#232233",
        paragraph: "#6C6C72",
      },
      backgroundImage: {
        hero: "url('../public/images/hero-pattern.svg')",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
