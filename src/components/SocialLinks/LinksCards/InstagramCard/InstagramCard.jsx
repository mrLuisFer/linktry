import BaseCard from "../../Base/BaseCard"
import { FiInstagram } from "react-icons/fi"
import "./instagramCard.css"

export default function InstagramCard({ instagramSocialLink }) {
  const { username, url, description } = instagramSocialLink

  return (
    <BaseCard
      username={username}
      url={url}
      description={description}
      jsxIcon={<FiInstagram />}
      customCardClasses='instagram instagramCard'
    />
  )
}
