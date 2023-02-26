import { Box, Tooltip } from '@chakra-ui/react'
import type { ICardData } from '../../../types'
import Image from 'next/image'
import { FaExpandAlt } from 'react-icons/fa'
import { useImgModalStore } from 'src/store/imgModalStore'

interface IBaseCardProps {
  cardData: ICardData
  className?: string
  iconImg?: string
  urlBaseDomain?: string
}

export default function BaseCard({
  cardData,
  className = '',
  iconImg = '',
  urlBaseDomain = ''
}: IBaseCardProps): JSX.Element {
  const { setIsOpenModal, setImgSrc } = useImgModalStore()
  const withThumbnail = cardData.thumbnail.length > 0

  const handleExpandImg = (): void => {
    setImgSrc('/assets/avatar.jpg')
    setIsOpenModal(true)
  }

  return (
    <Box
      className={`transition-all rounded-[20px] shadow-md hover:shadow-lg w-fit h-fit max-w-[475px] border-2 border-gray-200 hover:border-gray-300 flex items-start justify-between ${className} ${
        withThumbnail ? 'p-8' : 'pl-8 pr-14 py-8'
      }`}
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
            src={iconImg}
            width={50}
            height={50}
            alt={`${cardData.type} icon`}
          />
        </a>
        <h1 className='text-lg font-bold mt-2'>BaseCard</h1>
        <p className='text-sm opacity-60 hover:underline'>
          <a href={cardData.url} target='_blank' rel='noopener noreferrer'>
            {urlBaseDomain}
          </a>
        </p>
      </Box>
      {withThumbnail && (
        <div
          className='select-none hover:scale-105 transition relative group cursor-all-scroll'
          onClick={handleExpandImg}
        >
          <Image
            src='/assets/avatar.jpg'
            width={200}
            height={150}
            alt='thumbnail'
            draggable={false}
            className='rounded-xl border-2 border-gray-500 select-none'
          />
          <div
            className='absolute w-[200px] h-[150px] inset-0 bg-[#00000055] flex items-center justify-center text-3xl text-white rounded-xl opacity-0 group-hover:opacity-100 transition'
            title='Expand image'
          >
            <Tooltip label='Expand' hasArrow>
              <Box>
                <FaExpandAlt className='group-active:scale-110 transition' />
              </Box>
            </Tooltip>
          </div>
        </div>
      )}
    </Box>
  )
}
