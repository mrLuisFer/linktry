import BaseCard from '../../Base/BaseCard'
import { FaRedditAlien } from 'react-icons/fa'
import './redditCard.css'

export default function RedditCard({ redditSocialLink }) {
  const { username, url, description } = redditSocialLink

  return (
    <BaseCard
      username={username}
      url={url}
      description={description}
      jsxIcon={<FaRedditAlien />}
      customCardClasses='redditCard bg-gradient-to-r dark:bg-gradient-to-l from-red-500 to-redditColor'
    />
  )
}
