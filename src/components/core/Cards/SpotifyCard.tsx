import type { ICardData } from 'src/types'
import BaseCard from './BaseCard'
import useSWR from 'swr'
import SkeletonCard from './SkeletonCard'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function SpotifyCard({
  cardData
}: {
  cardData: ICardData
}): JSX.Element {
  const { data, error, isLoading } = useSWR('/api/spotify', fetcher)

  if (error == null || isLoading) return <SkeletonCard />

  const spotifyData = data?.data
  const thumbnail = spotifyData?.item?.album?.images[0]?.url ?? null
  return (
    <BaseCard
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
