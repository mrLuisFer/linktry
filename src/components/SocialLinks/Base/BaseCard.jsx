import React from 'react'

export default function BaseCard({ username, url, description }) {
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
    <div className='bg-gray-200 dark:bg-gray-700 p-4 pt-1 rounded-lg transition-shadow hover:shadow-xl'>
      <div className='text-sm'>
        <span>
          {yearDate} - {month}
        </span>
      </div>
      <h3>{username}</h3>
    </div>
  )
}
