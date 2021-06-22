import { useCallback, useEffect, useState } from "react"

export const useAvatar = ({
  avatarUrl = "",
  defaultImg = "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isErrorAvatarUrl, setIsErrorAvatarUrl] = useState(false)
  const [avatarFetched, setAvatarFetched] = useState("")

  const fetchingAvatar = useCallback(() => {
    const urlRegex = new RegExp(
      "^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$"
    )

    const throwError = () => {
      setIsErrorAvatarUrl(true)
      setIsLoading(false)
      setAvatarFetched(defaultImg)
    }

    if (avatarUrl.match(urlRegex)) {
      fetch(`${avatarUrl}`, {
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => {
          if (!res.ok && res.status !== 200) {
            throwError()
          }
          setIsLoading(false)
          setIsErrorAvatarUrl(false)
          setAvatarFetched(res.url)
        })
        .catch((error) => {
          console.log(error)
          throwError()
        })
    } else {
      throwError()
    }
  }, [avatarUrl, defaultImg])

  useEffect(() => {
    fetchingAvatar()
  }, [fetchingAvatar])

  return {
    isLoading,
    isErrorAvatarUrl,
    avatarFetched,
  }
}
