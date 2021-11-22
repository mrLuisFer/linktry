import { useState } from 'react'
import { useAvatar } from '../../hooks/useAvatar'
import { userConfig } from '../../api/userConfig'
import AvatarHtml from './AvatarHtml'

const avatarUrl = userConfig.avatar
const altUsernameImg = `${userConfig.username} - avatar`

export default function Avatar() {
  const { isLoading, isErrorAvatarUrl, avatarFetched } = useAvatar({
    avatarUrl
  })

  const fullName = `${userConfig.firstName} ${userConfig.lastName}`

  if (fullName.length > 30) {
    return userConfig.username
  }

  const [showModal, setShowModal] = useState(false)
  const closeModal = () => setShowModal(false)
  const openModal = () => setShowModal(true)

  return (
    <AvatarHtml
      fullName={fullName}
      altUsernameImg={altUsernameImg}
      isLoading={isLoading}
      isErrorAvatarUrl={isErrorAvatarUrl}
      avatarFetched={avatarFetched}
      closeModal={closeModal}
      openModal={openModal}
      showModal={showModal}
      username={userConfig.username}
    />
  )
}
