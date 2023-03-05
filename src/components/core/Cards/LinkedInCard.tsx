import type { ICardData } from 'src/types'
import BaseCard from './BaseCard'

export default function LinkedInCard({
  cardData
}: {
  cardData: ICardData
}): JSX.Element {
  return (
    <BaseCard
      cardData={cardData}
      className='bg-blue-100'
      iconImg='/assets/cards/linkedinIcon.svg'
      urlBaseDomain='linkedIn.com/mrluisfer'
    />
  )
}
