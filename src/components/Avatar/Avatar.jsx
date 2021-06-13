import React, { useEffect, useState } from 'react'
import { userConfig } from '../../_Config/userConfig'
import AvatarHtml from './AvatarHtml'

export default function Avatar() {
  const [isErrorAvatarUrl, setIsErrorAvatarUrl] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const avatarUrl = userConfig.avatar

  const fullName = `${userConfig.firstName} ${userConfig.lastName}`
  const altUsernameImg = `${userConfig.username} - avatar`

  const fetchUserUrl = () => {
    fetch(`${avatarUrl}`)
      .then((response) => {
        if (!response.ok) {
          console.log(response.statusText)
          setIsErrorAvatarUrl(true)
        }
        setIsLoading(false)
        return response
      })
      .catch((error) => {
        console.log(error)
        setIsErrorAvatarUrl(true)
      })
  }

  useEffect(() => {
    fetchUserUrl()

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
    // eslint-disable-next-line
  }, [])

  return (
    <AvatarHtml
      fullName={fullName}
      altUsernameImg={altUsernameImg}
      isLoading={isLoading}
      isErrorAvatarUrl={isErrorAvatarUrl}
      avatarUrl={avatarUrl}
      userConfig={userConfig}
    />
  )
}
