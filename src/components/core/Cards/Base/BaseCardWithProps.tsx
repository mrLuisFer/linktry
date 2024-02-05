import type { ICardData } from '../../../../types'
import Image from 'next/image'
import { useImgModalStore } from 'src/store/imgModalStore'
import { useRouter } from 'next/router'
import CardMotion from '../../CardMotion'
import SkeletonCard from '../SkeletonCard'
import { Box, Flex, Link } from '@radix-ui/themes'
import CardContent from './CardContent'
import type { CardContentProps } from './CardContent'

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
  const { setIsOpenModal, setImgSrc } = useImgModalStore()
  const withThumbnail =
    cardData.thumbnail != null && cardData?.thumbnail?.length > 0
  const cardUrl = cardData.url ?? cardData.urlBaseDomain ?? urlBaseDomain
  const cardThumbnail = cardData.thumbnail ?? customThumbnail ?? ''
  const router = useRouter()

  const handleExpandImg = (): void => {
    setImgSrc(cardThumbnail)
    setIsOpenModal(true)
  }

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
      <Flex
        className={`transition-all cursor-pointer rounded-[20px] shadow-sm hover:shadow-lg w-fit h-fit border-2 border-gray-100 hover:border-gray-200 p-3 m-0 ${className} ${
          cardData.className ?? ''
        }`}
        align='start'
        justify='between'
        gap='3'
        wrap='wrap'
      >
        <CardContent {...cardContent} />
        {withThumbnail && (
          <Box
            className='select-none transition relative group max-w-[200px] max-h-[150px] block'
            onClick={handleExpandImg}
          >
            <Box className='relative w-[150px] h-[100px]'>
              <Image
                src={cardThumbnail}
                alt='thumbnail'
                draggable={false}
                className='rounded-xl border-2 border-gray-500 object-cover'
                layout='fill'
              />
            </Box>
          </Box>
        )}
      </Flex>
    </Link>
  )
}
