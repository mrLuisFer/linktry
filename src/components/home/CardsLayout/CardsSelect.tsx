import TweetCard from 'src/components/core/Embeds/Tweet'
import type { ICardData } from '../../../types'
import { BaseCard } from '../../core/Cards'
import SpotifyCard from 'src/components/core/Cards/SpotifyCard'
import InstagramCard from 'src/components/core/Embeds/Instagram'
import YoutubeCard from 'src/components/core/Embeds/Youtube'

export default function CardsSelect({
  cardData
}: {
  cardData: ICardData
}): JSX.Element {
  switch (cardData.type) {
    case 'spotify':
      return <SpotifyCard cardData={cardData} />
    case 'tweet':
      return <TweetCard id={cardData.id} />
    case 'instagramCard':
      return <InstagramCard url={cardData.url} />
    case 'youtube':
      return <YoutubeCard url={cardData.url} />
    default:
      return <BaseCard cardData={cardData} />
  }
}
