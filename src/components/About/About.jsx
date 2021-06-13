import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
// import { userConfig } from '../../userConfig'

export default function About() {
  const [showDescription, setShowDescription] = useState(false)

  const handleShowDescription = () => {
    setShowDescription(!showDescription)
  }

  return (
    <div className='px-6'>
      <div
        className={`w-60 bg-gray-300 dark:bg-gray-900 rounded-lg mx-auto transition-shadow shadow-sm hover:shadow ${
          showDescription ? 'border-2 border-blue-900' : ''
        }`}
      >
        <div
          className='userNoSelect flex justify-between items-center h-auto cursor-pointer py-3 px-4'
          onClick={handleShowDescription}
        >
          <p>About</p>
          <IoIosArrowForward
            className={`transform transition-transform ${
              showDescription ? 'rotate-90' : 'rotate-0 hover:rotate-45'
            }`}
          />
        </div>
        {showDescription ? (
          <div className='text-center p-3'>
            <p className='text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, iure. Dolores, velit, aliquam amet sunt dicta nemo
              deleniti iure facilis doloremque enim nobis eligendi ad
              accusantium deserunt totam adipisci maiores ipsam expedita eveniet
              voluptate veniam similique nulla nihil! Quis, quae?
            </p>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
