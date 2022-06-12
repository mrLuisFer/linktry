import BaseCard from '../../Base/BaseCard'
import { ImBehance } from 'react-icons/im'
import { useLangContext } from "../../../../hooks/useLangContext"

export default function BehanceCard({ behanceSocialLink }) {
  const { username, url, description } = behanceSocialLink

  return (
    <BaseCard
      username={username}
      url={url}
      description={description}
      jsxIcon={<ImBehance />}
      customCardClasses='bg-gradient-to-r from-blue-500 to-blue-500 hover:shadow-[10px_10px_0px_var(--behance-color)]'
    />
  )
}
