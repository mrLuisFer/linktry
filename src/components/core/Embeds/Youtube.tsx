import { YouTubeEmbed } from 'react-social-media-embed'
import CardMotion from '../CardMotion'

export default function YoutubeCard({ url }: { url: string }): JSX.Element {
  return (
    <CardMotion>
      <div className='mockup-window border bg-base-300 h-fit'>
        <div className='flex justify-center bg-base-200'>
          <YouTubeEmbed url={url} width={600} height={350} />
        </div>
      </div>
    </CardMotion>
  )
}
