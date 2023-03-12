import { InstagramEmbed } from 'react-social-media-embed'
import CardMotion from '../../CardMotion'

export default function InstagramCard({ url }: { url: string }): JSX.Element {
  return (
    <CardMotion>
      <InstagramEmbed url={url} width={328} />
    </CardMotion>
  )
}
