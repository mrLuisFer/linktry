import React from 'react'
import { useAvatar } from '../../../hooks/useAvatar.js'
import { userConfig } from '../../../_Config/userConfig.js'

export default function AvatarModal() {
  const { avatar, username, firstName, lastName, country, about, state } =
    userConfig

  const unsplashUrl =
    'https://images.unsplash.com/photo-1622679202532-b6e011f04212?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=400'

  const { avatarFetched } = useAvatar({ avatarUrl: avatar })

  console.log(avatarFetched)

  return (
    <div className='mt-4'>
      <div>
        <img src={unsplashUrl} alt='Background Img' className='rounded-lg' />
      </div>
      <div>
        <img src={avatarFetched} alt={username} />
        <h1>
          {firstName} {lastName}
        </h1>
      </div>
      <p>{about}</p>
      <p>{country}</p>
      <p>{state}</p>
    </div>
  )
}
