import { useState } from "react"
import { IoLanguageSharp, IoCloseSharp } from "react-icons/io5"
import LangList from "./LangList/LangList"
import { langs } from "./langs"

export default function RecomendationMsg({ setCloseMsg }) {
  const [language, setLanguage] = useState("english")
  const [showLangs, setShowLangs] = useState(false)

  console.log(language)

  return (
    <div className='absolute right-0 w-52 text-sm bg-gray-700 text-white p-3 rounded-lg mt-3 z-10'>
      <div className='flex justify-between text-lg mb-2'>
        <div>
          <IoLanguageSharp
            onClick={() => setShowLangs(!showLangs)}
            className={`cursor-pointer transform hover:scale-110 select-none ${
              showLangs ? "animate-pulse" : ""
            }`}
          />
          {showLangs ? <LangList setLanguage={setLanguage} /> : ""}
        </div>
        <IoCloseSharp
          className='cursor-pointer transform hover:scale-110 select-none'
          onClick={() => setCloseMsg(true)}
        />
      </div>
      {langs[language]}
    </div>
  )
}
