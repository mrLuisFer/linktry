import { TwitterTweetEmbed } from 'react-twitter-embed'
import SkeletonCard from '../../Cards/SkeletonCard'
import CardMotion from '../../CardMotion'

export default function TweetCard({ id }: { id: string }): JSX.Element {
  return (
    <CardMotion>
      <TwitterTweetEmbed
        tweetId={id}
        placeholder={<SkeletonCard />}
        options={{
          maxWidth: 300,
          width: 300
        }}
      />
    </CardMotion>
  )
}
