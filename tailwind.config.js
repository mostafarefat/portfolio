/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // لو عندك src برضه
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-roboto)"],
        heading: ["var(--font-roboto-condensed)"],
        accent: ["var(--font-caveat)"],
      },
    },
  },
  plugins: [],
};
