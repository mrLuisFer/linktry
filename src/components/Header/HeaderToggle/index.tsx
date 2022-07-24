import { useState, useEffect } from 'react'
import HeaderToggleHtml from './HeaderToggleHtml'
import RecomendationMsg from '../RecomendationMsg'

let body: HTMLElement
if (typeof window !== 'undefined') {
  body = document.body
}

const useSetDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [theme, setTheme] = useState('dark')

  const handleClickToggleDarkMode = (event: InputEvent | any) => {
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
    }
  }

  useEffect(() => {
    const localTheme: string = localStorage.getItem('theme')!
    setTheme(localTheme)
    if (!localTheme) {
      localStorage.setItem('theme', 'light')
    }

    const isDarkTheme = localTheme === 'dark'
    if (isDarkTheme) {
      body.classList.add('dark')
    } else {
      body.classList.remove('dark')
    }
    setIsDarkMode(isDarkTheme)

    return () => localStorage.setItem('theme', theme)
  }, [])

  return {
    isDarkMode,
    handleClickToggleDarkMode
  }
}

export default function HeaderToggle() {
  const [closeMsg, setCloseMsg] = useState('false')
  const { isDarkMode, handleClickToggleDarkMode } = useSetDarkMode()

  useEffect(() => {
    const localStgValue = localStorage.getItem('closedMsg')
    if (localStgValue === 'true') {
      setCloseMsg('true')
    }
  }, [])

  return (
    <div className='relative'>
      <HeaderToggleHtml
        isDarkMode={isDarkMode}
        handleClickToggleDarkMode={handleClickToggleDarkMode}
      />
      {closeMsg === 'false' && <RecomendationMsg setCloseMsg={setCloseMsg} />}
    </div>
  )
}
