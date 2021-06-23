import { useState, useEffect } from "react"
import HeaderToggleHtml from "./HeaderToggleHtml"
import RecomendationMsg from "../RecomendationMsg/RecomendationMsg"
import { useSetDarkMode } from "../../../hooks/useSetDarkMode"

export default function HeaderToggle() {
  const [closeMsg, setCloseMsg] = useState(false)

  const { isDarkMode, handleClickToggleDarkMode, icon } = useSetDarkMode()

  useEffect(() => {
    const localStgValue = localStorage.getItem("closedMsg")
    if (localStgValue) {
      setCloseMsg(true)
    }
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
