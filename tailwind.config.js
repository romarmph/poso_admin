/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/preline/preline.js",
  ],
  options: {
    safelist: [],
  },
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin"), require("@tailwindcss/forms")],
};
