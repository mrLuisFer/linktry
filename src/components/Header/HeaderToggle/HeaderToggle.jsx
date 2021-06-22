import React, { useState } from "react"
import HeaderToggleHtml from "./HeaderToggleHtml"
import RecomendationMsg from "../RecomendationMsg/RecomendationMsg"
import { useSetDarkMode } from "./hook/useSetDarkMode"

export default function HeaderToggle() {
  const [closeMsg, setCloseMsg] = useState(false)

  const { isDarkMode, handleClickToggleDarkMode, icon } = useSetDarkMode()

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
