import BaseCard from '../../Base/BaseCard'
import { FaLinkedinIn } from 'react-icons/fa'

export default function LinkedinCard({ linkedinSocialLink }) {
  const { username, url, description } = linkedinSocialLink

  return (
    <BaseCard
      username={username}
      url={url}
      description={description}
      jsxIcon={<FaLinkedinIn />}
      customCardClasses='bg-gradient-to-l from-blue-400 to-blue-500 dark:to-blue-500 dark:from-blue-700 hover:shadow-[10px_10px_0px_var(--linkedin-color)]'
    />
  )
}
