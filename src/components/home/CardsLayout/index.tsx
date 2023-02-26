import data from '../../../data'
import CardsSelect from './CardsSelect'
import type { ICardData } from '../../../types'
import TitleCategory from '../TitleCategory'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export default function CardsLayout(): JSX.Element {
  return (
    <>
      <div className='pt-8 pr-12'>
        <TitleCategory>Social</TitleCategory>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter='2rem'>
            {data.map((card: ICardData) => (
              <CardsSelect key={card.id} cardData={card} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  )
}
