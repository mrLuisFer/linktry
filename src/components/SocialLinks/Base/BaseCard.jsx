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
  description,
  jsxIcon = <AiFillHeart />,
}) {
  return (
    <div className='bg-gray-200 dark:bg-gray-700 p-4 rounded-lg transition-shadow hover:shadow-md'>
      <div className='flex gap-x-4'>
        <div className='text-4xl h-full my-auto mx-0'>{jsxIcon}</div>
        <div className='w-full'>
          <div className='flex justify-between items-center'>
            <h1 className='font-semibold text-gray-900 text-lg'>@{username}</h1>
            <a href={url} target='_blank' rel='noreferrer'>
              <HiOutlineExternalLink className='text-xl transform hover:scale-110' />
            </a>
          </div>
          <div>
            <p className='text-sm'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
