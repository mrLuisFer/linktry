import { useCallback, useEffect, useState } from 'react'

export const useAvatar = ({
  avatarUrl,
  defaultImg = 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isErrorAvatarUrl, setIsErrorAvatarUrl] = useState(false)
  const [avatarFetched, setAvatarFetched] = useState('')

  const fetchAvatar = useCallback(() => {
    const throwError = () => {
      setIsErrorAvatarUrl(true)
      setIsLoading(false)
      setAvatarFetched(defaultImg)
    }

    if (avatarUrl === undefined || avatarUrl === null) {
      throwError()
    } else {
      setIsLoading(false)
      setIsErrorAvatarUrl(false)
      setAvatarFetched(avatarUrl)
    }
  }, [avatarUrl])

  useEffect(() => {
    fetchAvatar()
  }, [])

  return {
    isLoading,
    isErrorAvatarUrl,
    avatarFetched
  }
}
