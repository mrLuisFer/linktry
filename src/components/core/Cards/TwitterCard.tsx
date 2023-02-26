import BaseCard from './BaseCard'
import type { ICardData } from '../../../types'

export default function TwitterCard({
  cardData
}: {
  cardData: ICardData
}): JSX.Element {
  return (
    <BaseCard
      cardData={cardData}
      className='bg-blue-100'
      iconImg='/assets/cards/twitterIcon.svg'
      urlBaseDomain='twitter.com'
    />
  )
}
