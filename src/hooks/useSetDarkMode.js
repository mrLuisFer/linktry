import { useEffect, useState, useCallback } from 'react'
import { RiMoonClearFill } from 'react-icons/ri'
import { FaLightbulb } from 'react-icons/fa'

let body;
if (typeof window !== 'undefined') {
  body = document.body
}
const lightIcon = <RiMoonClearFill title='Active dark mode' />
const darkIcon = <FaLightbulb title='Active light mode' />

export const useSetDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [icon, setIcon] = useState(lightIcon)
  const [theme, setTheme] = useState("dark")

  const handleClickToggleDarkMode = (event) => {
    const isChecked = event.target.checked
    setIsDarkMode(isChecked)
    if (typeof window !== 'undefined') {
      if (isChecked) {
        body.classList.add('dark')
      } else {
        body.classList.remove('dark')
      }
      localStorage.setItem('theme', isChecked ? 'dark' : 'light')
      setTheme(isChecked ? 'dark' : 'light')
      setIcon(isChecked ? darkIcon : lightIcon)
    }
  }

  const checkTheme = useCallback(() => {
    if (!theme) {
      localStorage.setItem('theme', 'light')
    }

    const isDarkTheme = theme === 'dark'
    if (isDarkTheme) {
      body.classList.add('dark')
    } else {
      body.classList.remove('dark')
    }
    setIcon(isDarkTheme ? darkIcon : lightIcon)
    setIsDarkMode(isDarkTheme)
  }, [theme])

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    checkTheme()
    setTheme(theme)
  }, [])


  return {
    isDarkMode,
    handleClickToggleDarkMode,
    icon
  }
}
