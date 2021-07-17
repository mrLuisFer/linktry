const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      mb: '375px',
      ...defaultTheme.screens
    },
    extend: {
      textDecoration: ['focus-visible'],
      colors: {
        twitterColor: 'var(--twitter-color)',
        redditColor: 'var(--reddit-color)',
        twitchColor: 'var(--twitch-color)',
        facebookColor: 'var(--facebook-color)',
        linkedinColor: 'var(--linkedin-color)',
        githubColor: 'var(--github-color)',
        behanceColor: 'var(--behance-color)'
      },
      backgroundImage: (theme) => ({
        'hero-bg':
          'url(https://images.unsplash.com/photo-1622679202532-b6e011f04212?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=400)'
      })
    }
  },
  variants: {
    extend: {
      brightness: ['hover', 'focus']
    }
  },
  plugins: []
}
