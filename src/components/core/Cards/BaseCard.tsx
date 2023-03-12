import { Box, Tooltip } from '@chakra-ui/react'
import type { ICardData } from '../../../types'
import Image from 'next/image'
import { FaExpandAlt } from 'react-icons/fa'
import { useImgModalStore } from 'src/store/imgModalStore'
import { useRouter } from 'next/router'
import SkeletonCard from './SkeletonCard'
import CardMotion from '../CardMotion'

export default function BaseCard({
  cardData
}: {
  cardData: ICardData
}): JSX.Element {
  const { setIsOpenModal, setImgSrc } = useImgModalStore()
  const withThumbnail =
    cardData.thumbnail != null && cardData?.thumbnail?.length > 0
  const router = useRouter()

  const handleExpandImg = (): void => {
    setImgSrc(
      cardData.customThumbnail != null
        ? cardData.customThumbnail
        : cardData.thumbnail != null
        ? cardData.thumbnail
        : ''
    )
    setIsOpenModal(true)
  }

  if (router.isFallback) {
    return (
      <CardMotion>
        <SkeletonCard />
      </CardMotion>
    )
  }

  return (
    <CardMotion>
      <Box
        className={`transition-all rounded-[20px] shadow-sm hover:shadow-lg w-fit h-fit max-h-fit border-2 border-gray-100 hover:border-gray-200 flex items-start justify-between ${
          cardData.className != null ? cardData.className : ''
        } ${withThumbnail ? 'p-8' : 'pl-8 pr-0 py-8'}`}
      >
        <Box
          as='a'
          href={cardData.url}
          target='_blank'
          rel='noopener noreferrer'
          className='pr-24 h-full'
        >
          <a
            className='hover:scale-105 transition active:scale-95 block'
            href={cardData.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={cardData.iconImg != null ? cardData.iconImg : ''}
              width={40}
              height={40}
              alt={`${cardData.type} icon`}
            />
          </a>
          <h1 className='text-lg font-bold mt-2 hover:brightness-90'>
            {cardData.title}
          </h1>
          <p className='text-sm opacity-60 hover:underline text-clip'>
            <a href={cardData.url} target='_blank' rel='noopener noreferrer'>
              {cardData.customUrl != null
                ? cardData.customUrl
                : cardData.urlBaseDomain}
            </a>
          </p>
          <p className='text-xs text-clip text-[inherit] font-semibold pt-4 hover:brightness-90 transition inline-block'>
            {cardData.customDescription != null
              ? cardData.customDescription
              : cardData.description}
          </p>
        </Box>
        {withThumbnail && (
          <div
            className='select-none hover:scale-105 transition relative group cursor-all-scroll max-w-[200px] max-h-[150px] block'
            onClick={handleExpandImg}
          >
            <div className='relative w-[200px] h-[150px]'>
              <Image
                src={
                  cardData.customThumbnail != null
                    ? cardData.customThumbnail
                    : cardData.thumbnail != null
                    ? cardData.thumbnail
                    : ''
                }
                alt='thumbnail'
                draggable={false}
                className='rounded-xl border-2 border-gray-500 select-none object-cover'
                layout='fill'
              />
            </div>
            <Box className='absolute w-[200px] h-[150px] inset-0 bg-[#00000055] flex items-center justify-center text-3xl text-white rounded-xl opacity-0 group-hover:opacity-100 transition'>
              <Tooltip label='Expand' hasArrow>
                <Box>
                  <FaExpandAlt className='group-active:scale-110 transition' />
                </Box>
              </Tooltip>
            </Box>
          </div>
        )}
      </Box>
    </CardMotion>
  )
}
