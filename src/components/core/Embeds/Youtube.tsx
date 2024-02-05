import { YouTubeEmbed } from 'react-social-media-embed'
import CardMotion from '../Cards/CardMotion'
import { useBreakpoints } from 'src/hooks/useBreakpoints'

export default function YoutubeCard({ url }: { url: string }): JSX.Element {
  const { isMobile } = useBreakpoints()

  return (
    <CardMotion>
      <div className='mockup-window border bg-base-300 h-fit'>
        <div className='flex justify-center bg-base-200'>
          <YouTubeEmbed
            url={url}
            width={isMobile ? 'auto' : 600}
            height={350}
          />
        </div>
      </div>
    </CardMotion>
  )
}
