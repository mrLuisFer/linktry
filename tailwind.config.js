const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
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
      }
    }
  },
  variants: {
    extend: {
      brightness: ['hover', 'focus']
    }
  },
  plugins: [require('daisyui')]
}
