import type { ICardData } from '../../../../types'
import { useRouter } from 'next/router'
import CardMotion from '../CardMotion'
import SkeletonCard from '../SkeletonCard'
import { Link } from '@radix-ui/themes'
import CardContent from './CardContent'
import type { CardContentProps } from './CardContent'
import CardThumbnail from './CardThumbnail'
import CardContainer from './CardContainer'

export interface IBaseCardProps {
  cardData: ICardData
  className?: string
  iconImg?: string
  urlBaseDomain?: string
  customThumbnail?: string
  customDescription?: string
}

export default function BaseCardWithProps({
  cardData,
  className = '',
  iconImg = '',
  urlBaseDomain = '',
  customThumbnail,
  customDescription
}: IBaseCardProps): JSX.Element {
  const router = useRouter()
  const cardUrl = cardData.url ?? cardData.urlBaseDomain ?? urlBaseDomain

  const cardContent: CardContentProps = {
    iconImg,
    customDescription,
    cardData,
    cardUrl
  }

  if (router.isFallback) {
    return (
      <CardMotion>
        <SkeletonCard />
      </CardMotion>
    )
  }

  return (
    <Link href={cardUrl} target='_blank' rel='noopener noreferrer'>
      <CardContainer
        customClassName={`${className} ${cardData?.className ?? ''}`}
      >
        <CardContent {...cardContent} />
        <CardThumbnail
          customThumbnail={customThumbnail}
          thumbnail={cardData.thumbnail}
        />
      </CardContainer>
    </Link>
  )
}
