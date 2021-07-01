import BaseCard from '../../Base/BaseCard'
import { AiOutlineFilePdf } from 'react-icons/ai'
import './cvCard.css'

export default function CvCard({ cvSocialLink }) {
  const { username, url, description } = cvSocialLink

  return (
    <BaseCard
      username={username}
      url={url}
      description={description}
      customCardClasses='cvCard bg-yellow-400 dark:bg-yellow-600'
      jsxIcon={<AiOutlineFilePdf />}
    />
  )
}
