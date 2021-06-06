import React from 'react'

import { userConfig } from '../../userConfig'

import { FaRegUserCircle } from 'react-icons/fa'

export default function Avatar() {
  const avatarUrl = userConfig.avatar

  const urlRegex = new RegExp(
    '^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$'
  )

  return (
    <div>
      {avatarUrl.match(urlRegex) ? (
        <img src='' alt='' />
      ) : (
        <p>
          <FaRegUserCircle />
        </p>
      )}
    </div>
  )
}
