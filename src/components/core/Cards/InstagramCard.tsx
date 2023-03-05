import type { ICardData } from 'src/types'
import BaseCard from './BaseCard'

export default function InstagramCard({
  cardData
}: {
  cardData: ICardData
}): JSX.Element {
  return (
    <BaseCard
      cardData={cardData}
      className='bg-pink-50'
      iconImg='/assets/cards/instagramIcon.svg'
    />
  )
}
