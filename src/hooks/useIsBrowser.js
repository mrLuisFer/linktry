import { useEffect, useState } from "react"

export const useIsBrowser = () => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (typeof window !== 'undefined') {
    return isBrowser
  }

  return false
} 
