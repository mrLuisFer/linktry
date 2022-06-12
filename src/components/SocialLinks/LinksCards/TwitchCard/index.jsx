import { ImTwitch } from 'react-icons/im'
import BaseCard from '../../Base/BaseCard'

export default function TwitchCard({ twitchSocialLink = {} }) {
  const { username, url, description } = twitchSocialLink

  return (
    <BaseCard
      username={username}
      url={url}
      description={description}
      jsxIcon={<ImTwitch />}
      customCardClasses='bg-gradient-to-l from-purple-500 to-purple-600 hover:shadow-[10px_10px_0px_var(--twitch-color)]'
    />
  )
}
