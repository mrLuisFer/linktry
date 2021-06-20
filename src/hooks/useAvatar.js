import { useState, useEffect } from 'react'

export const useAvatar = ({ avatarUrl }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isErrorAvatarUrl, setIsErrorAvatarUrl] = useState(false)
  const [avtarFetched, setAvatarFetched] = useState('')

  const defaultImg =
    'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'

  const fetchUserUrl = () => {
    fetch(`${avatarUrl}`)
      .then((response) => {
        if (!response.ok) {
          console.log(response.statusText)
          setIsErrorAvatarUrl(true)
          setAvatarFetched(defaultImg)
        }
        setIsLoading(false)
        return response
      })
      .then((data) => setAvatarFetched(data))
      .catch((error) => {
        console.log(error)
        setIsErrorAvatarUrl(true)
        setAvatarFetched(defaultImg)
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

  return {
    isLoading,
    isErrorAvatarUrl,
    avtarFetched,
  }
}
