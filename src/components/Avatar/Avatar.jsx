import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'

import { userConfig } from '../../userConfig'

export default function Avatar() {
  const avatarUrl = userConfig.avatar

  const urlRegex = new RegExp(
    '^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$'
  )

  return (
    <div className='py-8'>
      {avatarUrl.match(urlRegex) ? (
        <img src={avatarUrl} alt='' />
      ) : (
        <div>
          <FaRegUserCircle className='block mx-auto text-7xl bg-blue-900 p-1 radius text-gray-100 rounded-3xl' />
        </div>
      )}
    </div>
  )
}
