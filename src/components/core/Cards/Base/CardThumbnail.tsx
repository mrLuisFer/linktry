import { Box } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'
import type { IBaseCardProps } from 'src/types'

type CardThumbnailProps = Pick<IBaseCardProps, 'customThumbnail'> & {
  thumbnail?: string | undefined
}
export default function CardThumbnail({
  thumbnail,
  customThumbnail
}: CardThumbnailProps) {
  const withThumbnail = thumbnail != null && thumbnail?.length > 0
  const cardThumbnail = thumbnail ?? customThumbnail ?? ''

  if (!withThumbnail) return <></>

  return (
    <Box className='select-none transition relative group max-w-[200px] max-h-[150px] block'>
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
  )
}
