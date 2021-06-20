const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      mb: '375px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        twitterColor: 'var(--twitter-color)',
        redditColor: 'var(--reddit-color)',
        twitchColor: 'var(--twitch-color)',
        facebookColor: 'var(--facebook-color)',
        linkedinColor: 'var(--linkedin-color)',
        githubColor: 'var(--github-color)',
        behanceColor: 'var(--behance-color)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
