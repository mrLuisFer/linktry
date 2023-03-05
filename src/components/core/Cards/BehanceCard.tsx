import type { ICardData } from 'src/types'
import BaseCard from './BaseCard'

export default function BehanceCard({
  cardData
}: {
  cardData: ICardData
}): JSX.Element {
  return (
    <BaseCard
      cardData={cardData}
      className='bg-blue-50'
      iconImg='/assets/cards/behanceIcon.svg'
      urlBaseDomain='behance.com'
    />
  )
}
