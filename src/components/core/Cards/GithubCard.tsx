import type { ICardData } from 'src/types'
import BaseCard from './BaseCard'

export default function GithubCard({
  cardData
}: {
  cardData: ICardData
}): JSX.Element {
  return (
    <BaseCard
      cardData={cardData}
      className='bg-neutral-300'
      iconImg='/assets/cards/githubIcon.svg'
      urlBaseDomain='github.com'
    />
  )
}
