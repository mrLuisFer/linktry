import InstagramCard from 'src/components/core/Cards/InstagramCard'
import type { ICardData } from '../../../types'
import { BaseCard, TwitterCard } from '../../core/Cards'
import LinkedInCard from 'src/components/core/Cards/LinkedInCard'
import GithubCard from 'src/components/core/Cards/GithubCard'
import BehanceCard from 'src/components/core/Cards/BehanceCard'
import SpotifyCard from 'src/components/core/Cards/SpotifyCard'

export default function CardsSelect({
  cardData
}: {
  cardData: ICardData
}): JSX.Element {
  console.log(cardData)

  switch (cardData.type) {
    case 'twitter':
      return <TwitterCard cardData={cardData} />
    case 'instagram':
      return <InstagramCard cardData={cardData} />
    case 'linkedin':
      return <LinkedInCard cardData={cardData} />
    case 'github':
      return <GithubCard cardData={cardData} />
    case 'behance':
      return <BehanceCard cardData={cardData} />
    case 'spotify':
      return <SpotifyCard cardData={cardData} />
    case 'dribbble':
    case 'youtube':
    case 'twitch':
    case 'reddit':
    case 'custom':
    default:
      return <BaseCard cardData={cardData} iconImg='' />
  }
}
