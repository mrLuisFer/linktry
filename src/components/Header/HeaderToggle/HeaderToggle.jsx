import React, { useEffect, useState } from 'react'
import { RiMoonClearFill } from 'react-icons/ri'
import { FaLightbulb } from 'react-icons/fa'

export default function HeaderToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const lightIcon = <RiMoonClearFill />
  const darkIcon = <FaLightbulb />
  const [icon, setIcon] = useState(lightIcon)
  const body = document.body

  const handleClickToggleDarkMode = (event) => {
    const isChecked = event.target.checked
    setIsDarkMode(isChecked)

    if (isChecked) {
      body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  const checkTheme = () => {
    if (!theme) {
      localStorage.setItem('theme', 'light')
    }
    if (theme === 'dark') {
      body.classList.add('dark')
      setIcon(darkIcon)
      setIsDarkMode(true)
    } else {
      body.classList.add('light')
      setIcon(lightIcon)
      setIsDarkMode(false)
    }
  }

  useEffect(() => {
    checkTheme()
  }, [])

  return (
    <div className='flex flex-col userNoSelect'>
      <label
        htmlFor='toggleInput'
        className='inline-flex items-center cursor-pointer'
      >
        <span className='relative'>
          <span className='block w-10 h-6 bg-gray-400 rounded-full shadow-inner'></span>
          <span
            className={`absolute block w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out transform
                ${isDarkMode ? 'translate-x-4' : '-translate-x-0'}
            `}
          >
            <input
              className=' absolute opacity-0 w-0 h-0'
              id='toggleInput'
              name='toggleInput'
              type='checkbox'
              onChange={handleClickToggleDarkMode}
            />
          </span>
        </span>
        <span className='ml-3 text-xl'>{icon}</span>
      </label>
    </div>
  )
}
