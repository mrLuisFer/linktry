import { useState } from 'react'
import { IoLanguageSharp, IoCloseSharp } from 'react-icons/io5'
import LangList from './LangList/LangList'
import { langs } from './langs'

export default function RecomendationMsg({ setCloseMsg }) {
  const [language, setLanguage] = useState('english')
  const [showLangs, setShowLangs] = useState(false)

  const handleCloseMsg = () => {
    setCloseMsg(true)
    localStorage.setItem('closedMsg', true)
  }

  return (
    <div className='absolute right-0 w-52 text-sm bg-gray-700 text-white p-3 rounded-lg mt-3 z-10 shadow-md hover:shadow-lg'>
      <div className='flex justify-between mb-2 text-lg'>
        <div>
          <IoLanguageSharp
            onClick={() => setShowLangs(!showLangs)}
            className={`cursor-pointer transform hover:scale-110 select-none ${
              showLangs ? 'animate-pulse' : 'animate-spin'
            }`}
          />
          {showLangs ? <LangList setLanguage={setLanguage} /> : ''}
        </div>
        <IoCloseSharp
          className='cursor-pointer select-none transform hover:scale-110'
          onClick={handleCloseMsg}
        />
      </div>
      {langs[language]}
    </div>
  )
}
