import { useState } from 'react'
import { langs } from './langs'
import MsgHeader from './MsgHeader'

export default function RecomendationMsg({ setCloseMsg }) {
  const [language, setLanguage] = useState('english')

  const handleCloseMsg = () => {
    setCloseMsg(true)
    localStorage.setItem('closedMsg', true)
  }

  return (
    <div className='absolute right-0 w-52 text-sm bg-gray-700 text-white p-3 rounded-lg mt-3 z-10 shadow-md hover:shadow-lg'>
      <MsgHeader setLanguage={setLanguage} handleCloseMsg={handleCloseMsg} />
      {langs[language]}
    </div>
  )
}
