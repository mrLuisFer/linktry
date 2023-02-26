import type { ICardData } from '../../../types'
import { BaseCard, TwitterCard } from '../../core/Cards'

export default function CardsSelect({
  cardData
}: {
  cardData: ICardData
}): JSX.Element {
  console.log(cardData)

  switch (cardData.type) {
    case 'twitter':
      return <TwitterCard cardData={cardData} />
    default:
      return <BaseCard cardData={cardData} />
  }
}
