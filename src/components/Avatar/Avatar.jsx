import React from 'react'
import { useAvatar } from '../../hooks/useAvatar'
import { userConfig } from '../../_Config/userConfig'
import AvatarHtml from './AvatarHtml'

export default function Avatar() {
  const avatarUrl = userConfig.avatar
  const fullName = `${userConfig.firstName} ${userConfig.lastName}`
  const altUsernameImg = `${userConfig.username} - avatar`

  const { isLoading, isErrorAvatarUrl, avatarFetched } = useAvatar({
    avatarUrl,
  })

  return (
    <AvatarHtml
      fullName={fullName}
      altUsernameImg={altUsernameImg}
      isLoading={isLoading}
      isErrorAvatarUrl={isErrorAvatarUrl}
      userConfig={userConfig}
      avatarFetched={avatarFetched}
    />
  )
}
