import BaseCard from '../../Base/BaseCard'
import { FiInstagram } from 'react-icons/fi'

export default function InstagramCard({ instagramSocialLink }) {
  const { username, url, description } = instagramSocialLink

  return (
    <BaseCard
      username={username}
      url={url}
      description={description}
      jsxIcon={<FiInstagram />}
      customCardClasses='instagram hover:shadow-[10px_10px_0px_#d63375]'
    />
  )
}
