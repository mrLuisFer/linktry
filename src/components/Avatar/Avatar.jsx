import React, { useEffect, useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'

import { userConfig } from '../../_Config/userConfig'

export default function Avatar() {
  const [isErrorAvatarUrl, setIsErrorAvatarUrl] = useState(false)
  const avatarUrl = userConfig.avatar

  const urlRegex = new RegExp(
    '^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$'
  )

  const fullName = `${userConfig.firstName} ${userConfig.lastName}`
  const altUsernameImg = `${userConfig.username} - avatar`

  const defaultImg =
    'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'

  const fetchUserUrl = () => {
    fetch(`${avatarUrl}`)
      .then((response) => {
        if (!response.ok) {
          console.log(response.statusText)
          setIsErrorAvatarUrl(true)
        }
        return response
      })
      .catch((error) => {
        console.log(error)
        setIsErrorAvatarUrl(true)
      })
  }

  useEffect(() => {
    fetchUserUrl()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='py-8 flex flex-col'>
      {avatarUrl.match(urlRegex) ? (
        <img
          src={isErrorAvatarUrl ? defaultImg : avatarUrl}
          alt={altUsernameImg}
          title={
            isErrorAvatarUrl
              ? 'An error loading your avatar image'
              : altUsernameImg
          }
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
