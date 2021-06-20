import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { userConfig } from '../../_Config/userConfig'

export default function About() {
  const [showDescription, setShowDescription] = useState(false)

  const handleShowDescription = () => {
    setShowDescription(!showDescription)
  }

  const about = userConfig.about

  return (
    <div className='px-6 sm:px-0'>
      <div
        className={`w-60 bg-gray-300 dark:bg-gray-900 rounded-lg mx-auto transition-shadow shadow-sm hover:shadow sm:w-80 ${
          showDescription ? 'border-2 dark:border-blue-900 border-gray-500' : ''
        }`}
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
              showDescription ? 'rotate-90' : 'rotate-0 hover:rotate-45'
            }`}
          />
        </div>
        {showDescription && about.length > 5 ? (
          <div className='text-center p-3 pt-0'>
            <p className='text-sm'>{about}</p>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
