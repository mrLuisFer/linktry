import { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { userConfig } from '../../api/userConfig'

export default function About() {
  const [showDescription, setShowDescription] = useState(false)

  const handleShowDescription = () => {
    setShowDescription((prevState) => !prevState)
  }

  const about = userConfig.about

  return (
    <div>
      <div
        className={`w-60 bg-gray-300 dark:bg-gray-900 rounded-lg mx-auto transition-shadow shadow-sm hover:shadow mb:72 sm:w-80 md:w-96 transition-border ${
          showDescription && 'border-2 dark:border-blue-700 border-green-400'
        }`}
        title={`About ${userConfig.username}`}
      >
        <div
          className='userNoSelect flex justify-between items-center h-auto cursor-pointer py-3 px-4'
          onClick={handleShowDescription}
        >
          <p className='font-semibold opacity-80'>
            About {userConfig.firstName}
          </p>
          <IoIosArrowForward
            className={`transform transition-transform ${
              showDescription
                ? 'rotate-90'
                : 'rotate-0 hover:rotate-45 animate-pulse'
            }`}
          />
        </div>
        {showDescription && about.length > 5 && (
          <div className='text-center p-3 pt-0'>
            <p className='text-sm md:text-base'>{about}</p>
          </div>
        )}
      </div>
    </div>
  )
}
