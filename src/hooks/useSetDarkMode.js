import { useEffect, useState } from 'react'
import { RiMoonClearFill } from 'react-icons/ri'
import { FaLightbulb } from 'react-icons/fa'

const body = document.body
const lightIcon = <RiMoonClearFill title='Active dark mode' />
const darkIcon = <FaLightbulb title='Active light mode' />

export const useSetDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [icon, setIcon] = useState(lightIcon)

  const handleClickToggleDarkMode = (event) => {
    const isChecked = event.target.checked
    setIsDarkMode(isChecked)
    if (isChecked) {
      body.classList.add('dark')
    } else {
      body.classList.remove('dark')
    }
    localStorage.setItem('theme', isChecked ? 'dark' : 'light')
    setTheme(isChecked ? 'dark' : 'light')
    setIcon(isChecked ? darkIcon : lightIcon)
  }

  const checkTheme = () => {
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
  }

  useEffect(() => {
    checkTheme()
    // eslint-disable-next-line
  }, [])

  return {
    isDarkMode,
    handleClickToggleDarkMode,
    icon
  }
}
