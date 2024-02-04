import { Box, Flex, Heading, Link, Text } from '@radix-ui/themes'
import Image from 'next/image'
import { useMemo } from 'react'
import type { IBaseCardProps } from './BaseCardWithProps'

export type CardContentProps = Omit<
  IBaseCardProps,
  'className' | 'urlBaseDomain' | 'customThumbnail'
> & {
  cardUrl: string
}
export default function CardContent({
  iconImg,
  customDescription,
  cardData,
  cardUrl
}: CardContentProps) {
  const hasIconImg: boolean = useMemo(
    () => iconImg !== undefined && String(iconImg).length > 0,
    [iconImg]
  )

  return (
    <Box className='h-full'>
      {hasIconImg ? (
        <Text className='hover:scale-105 transition active:scale-95 block'>
          <Image
            src={iconImg ?? ''}
            width={40}
            height={40}
            alt={`${cardData.type} icon`}
          />
        </Text>
      ) : null}
      <Heading as='h4' className='text-lg font-bold mt-2 max-w-[200px]'>
        {cardData.title}
      </Heading>
      <Flex direction='column' wrap='wrap' gap='2'>
        <Text className='text-sm opacity-60 hover:underline text-ellipsis max-w-[200px]'>
          <Link href={cardUrl} target='_blank' rel='noopener noreferrer'>
            {cardUrl}
          </Link>
        </Text>
        <Text className='text-xs text-gray-500 font-semibold hover:text-gray-600 transition max-w-[150px] text-ellipsis'>
          {customDescription ?? cardData.description ?? ''}
        </Text>
      </Flex>
    </Box>
  )
}
