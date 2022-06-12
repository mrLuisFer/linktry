import { useState } from 'react'
import { IoLanguageSharp, IoCloseSharp } from 'react-icons/io5'
import LangList from './LangList/LangList'

const MsgHeader = ({ setLanguage, handleCloseMsg }) => {
  const [showLangs, setShowLangs] = useState(false)

  return (
    <section className='flex justify-between mb-2 text-lg'>
      <div>
        <IoLanguageSharp
          onClick={() => setShowLangs(!showLangs)}
          title="Change popup language"
          className={`cursor-pointer transform hover:scale-110 select-none transition-colors hover:text-blue-300 ${
            showLangs && 'text-blue-300'
          }`}
        />
        {showLangs && <LangList setLanguage={setLanguage} />}
      </div>
      <IoCloseSharp
        className='text-red-400 cursor-pointer select-none transform hover:scale-110 hover:text-red-500'
        onClick={handleCloseMsg}
      />
    </section>
  )
}

export default MsgHeader
