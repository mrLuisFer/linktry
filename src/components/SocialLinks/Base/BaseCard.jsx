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
  const yearDate = new Date().getFullYear()
  const monthDate = new Date().getMonth()

  const MONTHS_NAME = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  }

  const month = MONTHS_NAME[monthDate]

  return (
    <div className='bg-gray-200 dark:bg-gray-700 p-4 rounded-lg transition-shadow hover:shadow-md'>
      <div className='flex gap-x-4'>
        <div className='text-4xl h-full my-auto mx-0'>{jsxIcon}</div>
        <div className='w-full'>
          <div className='flex justify-between items-center'>
            <h1 className='font-semibold text-gray-900 text-lg'>@{username}</h1>
            <HiOutlineExternalLink className='text-xl' />
          </div>
          <div>
            <p className='text-sm'>{description}</p>
            <span className='flex justify-end items-center text-sm opacity-80'>
              {month} {yearDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
