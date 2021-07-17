import { useGetFullName } from '../../hooks/useGetFullName'
import { useAvatar } from '../../hooks/useAvatar'
import { userConfig } from '../../api/userConfig'
import AvatarHtml from './AvatarHtml'

export default function Avatar() {
  const avatarUrl = userConfig.avatar
  const altUsernameImg = `${userConfig.username} - avatar`
  const { isLoading, isErrorAvatarUrl, avatarFetched } = useAvatar({
    avatarUrl
  })

  const fullName = useGetFullName(userConfig)

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
