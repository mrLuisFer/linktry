import React, { useEffect, useState } from "react"
import { RiMoonClearFill } from "react-icons/ri"
import { FaLightbulb } from "react-icons/fa"
import HeaderToggleHtml from "./HeaderToggleHtml"
import RecomendationMsg from "../RecomendationMsg/RecomendationMsg"

export default function HeaderToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

  const body = document.body
  const lightIcon = <RiMoonClearFill title='Active dark mode' />
  const darkIcon = <FaLightbulb title='Active light mode' />
  const [icon, setIcon] = useState(lightIcon)
  const [closeMsg, setCloseMsg] = useState(false)

  const handleClickToggleDarkMode = (event) => {
    const isChecked = event.target.checked
    setIsDarkMode(isChecked)

    if (isChecked) {
      body.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setTheme("dark")
      setIcon(darkIcon)
    } else {
      body.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setTheme("light")
      setIcon(lightIcon)
    }
  }

  const checkTheme = () => {
    if (!theme) {
      localStorage.setItem("theme", "light")
    }
    if (theme === "dark") {
      body.classList.add("dark")
      setIcon(darkIcon)
      setIsDarkMode(true)
    } else {
      body.classList.remove("dark")
      setIcon(lightIcon)
      setIsDarkMode(false)
    }
  }

  useEffect(() => {
    checkTheme()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='relative'>
      <HeaderToggleHtml
        isDarkMode={isDarkMode}
        handleClickToggleDarkMode={handleClickToggleDarkMode}
        icon={icon}
      />
      {closeMsg ? "" : <RecomendationMsg setCloseMsg={setCloseMsg} />}
    </div>
  )
}
