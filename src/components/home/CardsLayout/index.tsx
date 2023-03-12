import data from '../../../data'
import CardsSelect from './CardsSelect'
import type { ICardData } from '../../../types'
import TitleCategory from '../TitleCategory'
import { Box } from '@chakra-ui/react'

export default function CardsLayout(): JSX.Element {
  return (
    <div className='pt-8 px-4 lg:pl-8 lg:pr-2 py-4 dark:bg-zinc-900'>
      <TitleCategory id='social'>Social</TitleCategory>
      <Box className='flex flex-wrap gap-6 align-top content-start'>
        {data.map((card: ICardData) => (
          <CardsSelect key={card.id} cardData={card} />
        ))}
      </Box>
    </div>
  )
}
