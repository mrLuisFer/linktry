import { YouTubeEmbed } from 'react-social-media-embed'
import CardMotion from '../CardMotion'
import { useMediaQuery } from '@chakra-ui/react'

export default function YoutubeCard({ url }: { url: string }): JSX.Element {
  const [isLargerThanMobile] = useMediaQuery('minWidth: 400px')

  return (
    <CardMotion>
      <div className='mockup-window border bg-base-300 h-fit'>
        <div className='flex justify-center bg-base-200'>
          <YouTubeEmbed
            url={url}
            width={!isLargerThanMobile ? 310 : 600}
            height={!isLargerThanMobile ? 300 : 350}
          />
        </div>
      </div>
    </CardMotion>
  )
}
