import BaseCard from '../../Base/BaseCard'
import { AiOutlineFilePdf } from 'react-icons/ai'

export default function CvCard({ cvSocialLink }) {
  const { username, url, description } = cvSocialLink

  return (
    <BaseCard
      username={username}
      url={url}
      description={description}
      customCardClasses='bg-yellow-400 dark:bg-yellow-600 hover:shadow-[10px_10px_0px_var(--yellow-color)]'
      jsxIcon={<AiOutlineFilePdf />}
    />
  )
}
