/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "i.scdn.co", "i.scdn.com"],
    remotePatterns: [
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 'abs.twimg.com' },
    ],
  },
  env: {
    SPOTIFY_TOKEN: process.env.SPOTIFY_TOKEN,
    REDIRECT_URI: process.env.REDIRECT_URI,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET
  }
}

module.exports = nextConfig
