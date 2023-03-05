import type { ICardData } from './types'

// export interface ICardData {
//   id: string
//   type: string
//   url: string
//   title: string
//   description?: string
//   thumbnail?: string
//   customUrl?: string
// }

const data: ICardData[] = [
  {
    id: '1',
    type: 'twitter',
    url: 'https://twitter.com/_mrLuisFer',
    title: 'Twitter',
    thumbnail: '/assets/thumbnails/twitter.png',
    customUrl: 'twitter.com/_mrLuisFer'
  },
  {
    id: '2',
    type: 'instagram',
    url: 'https://www.instagram.com/mrluisfer_/',
    title: 'Photos',
    customUrl: 'instagram.com/mrluisfer_',
    description: 'Personal account'
  },
  {
    id: '3',
    type: 'linkedin',
    url: 'https://www.linkedin.com/in/mrluisfer/',
    title: 'LinkedIn',
    thumbnail: '/assets/thumbnails/linkedin.avif',
    description: 'Image by Grabriel Varaljay'
  },
  {
    id: '4',
    type: 'behance',
    url: 'https://www.behance.net/luisalvarez28',
    title: 'Behance Portfolio',
    description: 'Custom design projects'
  },
  {
    id: '5',
    type: 'github',
    url: 'https://github.com/mrLuisFer',
    title: 'GitHub',
    thumbnail: '/assets/thumbnails/github.png',
    customUrl: 'github.com/mrLuisFer',
    description: '71 public repositories'
  },
  {
    id: '6',
    type: 'spotify',
    url: 'https://open.spotify.com/user/lolesuncrak',
    title: 'Spotify',
    thumbnail: '/assets/thumbnails/spotify.png',
    customUrl: 'open.spotify/lolesuncrak'
  }
]

export default data
