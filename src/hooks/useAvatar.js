import { useCallback, useEffect, useState } from 'react'

export const useAvatar = ({
  avatarUrl = '',
  defaultImg = 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isErrorAvatarUrl, setIsErrorAvatarUrl] = useState(false)
  const [avatarFetched, setAvatarFetched] = useState('')

  const fetchingAvatar = useCallback(() => {
    const urlRegex = new RegExp(
      '^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$'
    )

    if (avatarUrl.match(urlRegex)) {
      fetch(`${avatarUrl}`)
        .then((res) => {
          console.log(res)
          if (!res.ok) {
            setIsErrorAvatarUrl(true)
            setIsLoading(false)
            setAvatarFetched(defaultImg)
          }
          setIsLoading(false)
          setIsErrorAvatarUrl(false)
          setAvatarFetched(res.url)
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      setIsErrorAvatarUrl(true)
      setIsLoading(false)
      setAvatarFetched(defaultImg)
    }
  }, [avatarUrl, defaultImg])

  useEffect(() => {
    fetchingAvatar()
  }, [fetchingAvatar])

  console.log(avatarFetched)
  return {
    isLoading,
    isErrorAvatarUrl,
    avatarFetched,
  }
}
