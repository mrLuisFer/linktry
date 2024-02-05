import data from '../../../data'
import CardsSelect from './CardsSelect'
import type { ICardData } from '../../../types'
import TitleCategory from '../TitleCategory'
import { Container, Flex, Link, Section, Text } from '@radix-ui/themes'

export default function CardsLayout(): JSX.Element {
  return (
    <div className='lg:overflow-y-scroll lg:h-screen pt-8 px-4 lg:pl-8 lg:pr-2 py-4 dark:bg-zinc-900'>
      <Container size='3' className='items-start'>
        <TitleCategory id='social'>Social</TitleCategory>
        <Flex gap='2' align='start' justify='start' wrap='wrap'>
          {data.map((card: ICardData, id) => (
            <CardsSelect key={`${card.id}-${id}`} cardData={card} />
          ))}
        </Flex>
        <Section>
          <Text>
            Made with ❤️ by{' '}
            <Link
              href='https://github.com/mrLuisFer/linktry'
              target='_blank'
              rel='noreferrer noopener'
            >
              mrLuisFer
            </Link>
          </Text>
        </Section>
      </Container>
    </div>
  )
}
