import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'

import { userConfig } from '../../_Config/userConfig'

export default function Avatar() {
  const avatarUrl = userConfig.avatar

  const urlRegex = new RegExp(
    '^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$'
  )

  const fullName = `${userConfig.firstName} ${userConfig.lastName}`
  const altUsernameImg = `${userConfig.username} - avatar`

  return (
    <div className='py-8 flex flex-col'>
      {avatarUrl.match(urlRegex) ? (
        <img
          src={avatarUrl}
          alt={altUsernameImg}
          title={altUsernameImg}
          className='block mx-auto w-36 h-36 rounded-full transition transform hover:scale-105'
        />
      ) : (
        <FaRegUserCircle className='block mx-auto text-7xl bg-blue-700 p-1 radius text-gray-100 rounded-full' />
      )}
      <h1
        className='text-center font-semibold mx-auto mt-6 text-2xl border-b-4 border-green-500 inline-block w-auto'
        title={userConfig.username}
      >
        {fullName}
      </h1>
    </div>
  )
}
