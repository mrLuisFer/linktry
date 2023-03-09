import type { ICardData } from './types'

const data: ICardData[] = [
  {
    id: '1',
    type: 'twitter',
    url: 'https://twitter.com/_mrLuisFer',
    title: 'Twitter',
    thumbnail: '/assets/thumbnails/twitter.png',
    customUrl: 'twitter.com/_mrLuisFer',
    className: 'bg-[rgba(0,172,238,0.2)]',
    iconImg: '/assets/cards/twitterIcon.svg',
    urlBaseDomain: 'twitter.com',
    description: 'Opinions and random things'
  },
  {
    id: '2',
    type: 'instagram',
    url: 'https://www.instagram.com/mrluisfer_/',
    title: 'Personal Photos',
    customUrl: 'instagram.com/mrluisfer_',
    description: 'Personal account',
    className: 'bg-pink-50',
    iconImg: '/assets/cards/instagramIcon.svg'
  },
  {
    id: '3',
    type: 'linkedin',
    url: 'https://www.linkedin.com/in/mrluisfer/',
    title: 'LinkedIn',
    thumbnail: '/assets/thumbnails/linkedin.avif',
    description: 'Image by Grabriel Varaljay',
    className: 'bg-blue-100',
    iconImg: '/assets/cards/linkedinIcon.svg',
    urlBaseDomain: 'linkedIn.com/mrluisfer'
  },
  {
    id: '4',
    type: 'behance',
    url: 'https://www.behance.net/luisalvarez28',
    title: 'Behance Portfolio',
    description: 'Custom design projects',
    className: 'bg-blue-50',
    iconImg: '/assets/cards/behanceIcon.svg',
    urlBaseDomain: 'behance.com'
  },
  {
    id: '5',
    type: 'github',
    url: 'https://github.com/mrLuisFer',
    title: 'GitHub',
    thumbnail: '/assets/thumbnails/github.png',
    customUrl: 'github.com/mrLuisFer',
    description: '71 public repositories',
    className: 'bg-[rgba(0,0,0,0.20)] hover:bg-[rgba(0,0,0,0.1)] transition',
    iconImg: '/assets/cards/githubIcon.svg',
    urlBaseDomain: 'github.com'
  },
  {
    id: '6',
    type: 'spotify',
    url: 'https://open.spotify.com/user/lolesuncrak',
    title: 'Spotify',
    thumbnail: '/assets/thumbnails/spotify.png',
    customUrl: 'open.spotify/lolesuncrak'
  },
  {
    id: '5',
    type: 'dribbble',
    url: 'https://dribbble.com/mrLuisfer',
    title: 'Dribbble',
    thumbnail: '/assets/thumbnails/dribbble.jpg',
    description: 'Image by Med Badr Chemmaoui ',
    customUrl: 'dribbble.com/mrLuisfer',
    className: 'bg-[rgba(234,76,137,0.20)]',
    iconImg: '/assets/cards/dribbleIcon.svg'
  },
  {
    id: '7',
    type: 'twitch',
    url: 'https://www.twitch.tv/mrluisfer',
    title: 'Twitch',
    thumbnail: '/assets/thumbnails/twitch.png',
    customUrl: 'twitch.tv/mrluisfer',
    iconImg: '/assets/cards/twitchIcon.svg',
    className: 'bg-purple-200'
  },
  {
    id: '8',
    type: 'portfolio',
    url: 'https://mrluisfer.vercel.app/',
    title: 'Professional Portfolio',
    iconImg: '/assets/cards/portfolioIcon.svg',
    className: 'bg-cyan-50',
    description: 'Personal portfolio made with React and Nextjs',
    thumbnail: '/assets/thumbnails/portfolio.png'
  }
]

export default data
