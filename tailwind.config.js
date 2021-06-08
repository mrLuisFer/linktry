module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        twitterColor: 'var(--twitter-color)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
