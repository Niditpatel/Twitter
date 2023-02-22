/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", './node_modules/tw-elements/dist/js/**/*.js', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
}
