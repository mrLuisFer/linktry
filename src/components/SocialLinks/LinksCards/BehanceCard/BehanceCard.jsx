import BaseCard from '../../Base/BaseCard'
import { ImBehance } from 'react-icons/im'
import './behanceCard.css'

export default function BehanceCard({ behanceSocialLink }) {
  const { username, url, description } = behanceSocialLink

  return (
    <BaseCard
      username={username}
      url={url}
      description={description}
      jsxIcon={<ImBehance />}
      customCardClasses='behanceCard bg-gradient-to-r from-blue-500 to-blue-500'
    />
  )
}
