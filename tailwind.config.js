module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ['Domine', 'serif'],
      sans: ['Work Sans', 'sans-serif'],
      display: ['Potta One', 'cursive'],
    },
    extend: {
      colors: {
        'cream': '#FCF6EE',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
