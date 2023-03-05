import data from '../../../data'
import CardsSelect from './CardsSelect'
import type { ICardData } from '../../../types'
import TitleCategory from '../TitleCategory'
import { Box } from '@chakra-ui/react'

export default function CardsLayout(): JSX.Element {
  return (
    <div className='pt-8 pr-12'>
      <TitleCategory>Social</TitleCategory>
      <Box className='flex flex-wrap gap-6'>
        {data.map((card: ICardData) => (
          <CardsSelect key={card.id} cardData={card} />
        ))}
      </Box>
    </div>
  )
}
