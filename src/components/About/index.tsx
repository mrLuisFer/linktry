import { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { userConfig } from '../../apiData/userConfig'
import { motion } from 'framer-motion'

export default function About() {
  const [showDescription, setShowDescription] = useState(false)

  const handleShowDescription = () => {
    setShowDescription((prevState) => !prevState)
  }

  return (
    <section
      className={`w-60 bg-gray-300 dark:bg-gray-900 rounded-lg mx-auto shadow-sm hover:shadow mb:w-72 sm:w-80 md:w-96 transition-all filter hover:brightness-105 border-2 border-transparent  ${
        showDescription && 'dark:border-blue-700 border-green-400'
      }`}
      title={`About ${userConfig.username}`}
    >
      <div
        className='userNoSelect flex justify-between items-center h-auto cursor-pointer py-3 px-4'
        onClick={handleShowDescription}
      >
        <p className='font-semibold opacity-80'>About {userConfig.firstName}</p>
        <IoIosArrowForward
          className={`transform transition-transform ${
            showDescription
              ? 'rotate-90'
              : 'rotate-0 hover:rotate-45 animate-pulse'
          }`}
        />
      </div>
      {showDescription && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className='text-center p-3 mb:px-4 pt-0'
        >
          <p className='text-sm mb:text-base'>{userConfig.about}</p>
        </motion.div>
      )}
    </section>
  )
}
