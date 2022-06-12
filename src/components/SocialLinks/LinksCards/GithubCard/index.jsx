import BaseCard from '../../Base/BaseCard'
import { SiGithub } from 'react-icons/si'

export default function GithubCard({ githubSocialLink }) {
  const { username, url, description } = githubSocialLink

  return (
    <BaseCard
      username={username}
      url={url}
      description={description}
      jsxIcon={<SiGithub />}
      customCardClasses='bg-gradient-to-r from-gray-600 to-gray-500 dark:from-gray-900 dark:to-gray-900 hover:shadow-[10px_10px_0px_var(--github-color)]'
    />
  )
}
