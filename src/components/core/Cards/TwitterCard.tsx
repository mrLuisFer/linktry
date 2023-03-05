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
      className='bg-cyan-50'
      iconImg='/assets/cards/twitterIcon.svg'
      urlBaseDomain='twitter.com'
    />
  )
}
