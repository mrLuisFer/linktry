import TweetCard from 'src/components/core/Embeds/Tweet'
import type { ICardData } from '../../../types'
import InstagramCard from 'src/components/core/Embeds/Instagram'
import YoutubeCard from 'src/components/core/Embeds/Youtube'
import BaseCardWithProps from 'src/components/core/Cards/Base/BaseCardWithProps'

export default function CardsSelect({
  cardData
}: {
  cardData: ICardData
}): JSX.Element {
  const CardRender = (): JSX.Element => {
    switch (cardData.type) {
      case 'tweet':
        return <TweetCard id={cardData.id} />
      case 'instagramCard':
        return <InstagramCard url={cardData.url} />
      case 'youtube':
        return <YoutubeCard url={cardData.url} />
      default:
        return <BaseCardWithProps cardData={cardData} />
    }
  }

  return <CardRender />
}
