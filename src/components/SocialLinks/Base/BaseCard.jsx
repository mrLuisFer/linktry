import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { HiOutlineExternalLink } from 'react-icons/hi'

/**
 *
 * @param {String} username
 * @param {String} url
 * @param {String} description
 * @param {JSX.Element} jsxIcon
 * @returns JSX.Element
 */
export default function BaseCard({
  username,
  url,
  description = '',
  jsxIcon = <AiFillHeart />,
  customUsernameClasses = '',
  customIconClasses = '',
  customCardClasses = '',
  customUrlIconClasses = '',
}) {
  return (
    <div
      className={`bg-gray-200 dark:bg-gray-700 p-4 rounded-lg transition-shadow hover:shadow-md ${customCardClasses}`}
    >
      <div className='flex gap-x-4'>
        <div
          className={`text-4xl h-full my-auto mx-0 transform hover:scale-110 ${customIconClasses}`}
        >
          <a href={url} target='_blank' rel='noreferrer'>
            {jsxIcon}
          </a>
        </div>
        <div className='w-full'>
          <div
            className={`flex justify-between items-center ${
              description.length > 5 ? '' : 'h-full'
            }`}
          >
            <h1 className={`font-semibold text-lg ${customUsernameClasses}`}>
              @{username}
            </h1>
            <a href={url} target='_blank' rel='noreferrer'>
              <HiOutlineExternalLink
                className={`text-xl transform hover:scale-110 ${customUrlIconClasses}`}
              />
            </a>
          </div>
          {description.length > 5 ? (
            <p className='text-sm'>{description}</p>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}
