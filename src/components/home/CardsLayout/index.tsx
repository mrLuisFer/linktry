import data from '../../../data'
import CardsSelect from './CardsSelect'
import type { ICardData } from '../../../types'

export default function CardsLayout(): JSX.Element {
  return (
    <div className='py-8 px-[100px] h-full'>
      {data.map((card: ICardData) => (
        <CardsSelect key={card.id} cardData={card} />
      ))}
    </div>
  )
}
