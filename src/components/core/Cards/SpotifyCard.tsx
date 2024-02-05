import type { ICardData } from 'src/types'
import BaseCardWithProps from './Base/BaseCardWithProps'
import useSWR from 'swr'
import SkeletonCard from './SkeletonCard'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const fetcher = (...args: RequestInfo): any =>
  fetch(args as unknown as RequestInfo).then((res): any => res.json())
export default function SpotifyCard({
  cardData
}: {
  cardData: ICardData
}): JSX.Element {
  const { data, error, isLoading } = useSWR('/api/spotify', fetcher)
  if (data?.data?.error != null && data.data.error.status === 401) return <></>

  if (error == null || isLoading) return <SkeletonCard />

  const spotifyData = data?.data
  const thumbnail = spotifyData?.item?.album?.images[0]?.url ?? null
  return (
    <BaseCardWithProps
      cardData={cardData}
      className='bg-green-100'
      iconImg='/assets/cards/spotifyIcon.svg'
      urlBaseDomain='spotify.com'
      customThumbnail={thumbnail}
      customDescription={
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${spotifyData?.item?.artists[0]?.name} - ${spotifyData?.item?.name}` ??
        null
      }
    />
  )
}
