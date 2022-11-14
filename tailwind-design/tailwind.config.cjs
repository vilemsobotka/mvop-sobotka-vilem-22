/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/scattered-forcefields.svg')",
        'test-image': "url('https://source.unsplash.com/random/480x320')"
       },
    },
  },
  plugins: [],
}
