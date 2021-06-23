import { useAvatar } from "../../hooks/useAvatar"
import { userConfig } from "../../_Config/userConfig"
import AvatarHtml from "./AvatarHtml"

export default function Avatar() {
  const avatarUrl = userConfig.avatar
  const altUsernameImg = `${userConfig.username} - avatar`
  const { isLoading, isErrorAvatarUrl, avatarFetched } = useAvatar({
    avatarUrl,
  })

  let fullName = ""
  const firstNameLength = userConfig.firstName.length
  const lastNameLength = userConfig.lastName.length

  if (lastNameLength > 10) {
    fullName = `${userConfig.firstName}`
  } else if (firstNameLength > 10) {
    fullName = `${userConfig.username}`
  } else if (firstNameLength > 10 && lastNameLength > 10) {
    fullName = `${userConfig.username}`
  } else {
    fullName = `${userConfig.firstName} ${userConfig.lastName}`
  }

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
