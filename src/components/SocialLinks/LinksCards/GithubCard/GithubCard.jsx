import BaseCard from '../../Base/BaseCard'
import { SiGithub } from 'react-icons/si'
import './githubCard.css'

export default function GithubCard({ githubSocialLink }) {
  const { username, url, description } = githubSocialLink

  return (
    <BaseCard
      username={username}
      url={url}
      description={description}
      jsxIcon={<SiGithub />}
      customCardClasses='githubCard bg-gradient-to-r from-gray-600 to-gray-500 dark:from-gray-900 dark:to-gray-900'
    />
  )
}
