import data from '../../../data'
import CardsSelect from './CardsSelect'
import type { ICardData } from '../../../types'
import TitleCategory from '../TitleCategory'
import { Container, Flex, Link, Section, Text } from '@radix-ui/themes'

export default function CardsLayout(): JSX.Element {
  return (
    <div className='lg:overflow-y-scroll lg:h-screen'>
      <div className='pt-8 px-4 lg:pl-8 lg:pr-2 py-4 dark:bg-zinc-900'>
        <TitleCategory id='social'>Social</TitleCategory>
        <Container size='3'>
          <Flex gap='2' align='start' justify='start' wrap='wrap'>
            {data.map((card: ICardData) => (
              <CardsSelect key={card.id} cardData={card} />
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
    </div>
  )
}
