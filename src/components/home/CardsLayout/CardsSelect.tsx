import type { ICardData } from '../../../types'
import { BaseCard } from '../../core/Cards'
import SpotifyCard from 'src/components/core/Cards/SpotifyCard'

export default function CardsSelect({
  cardData
}: {
  cardData: ICardData
}): JSX.Element {
  console.log(cardData)

  switch (cardData.type) {
    case 'spotify':
      return <SpotifyCard cardData={cardData} />
    // case 'dribbble':
    // case 'github':
    // case 'behance':
    // case 'youtube':
    // case 'linkedin':
    // case 'instagram':
    // case 'twitter':
    // case 'facebook':
    // case 'twitch':
    // case 'reddit':
    // case 'custom':
    default:
      return <BaseCard cardData={cardData} />
  }
}
