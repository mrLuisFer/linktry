import React from 'react'
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { useAvatar } from '../../../hooks/useAvatar.js'
import { userConfig } from '../../../_Config/userConfig.js'
import { socialLinks } from '../../../_Config/socialLinks'
import AnchorTag from '../../AnchorTag/AnchorTag'

export default function AvatarModal() {
  const {
    avatar,
    firstName,
    lastName,
    username,
    about,
    phoneNumber,
    country,
    state,
    university,
  } = userConfig

  const { avatarFetched } = useAvatar({ avatarUrl: avatar })

  console.log(avatarFetched)

  return (
    <div className='mt-4'>
      <div className='relative bg-hero-bg h-32  rounded-md'>
        <img
          src={avatarFetched}
          alt={username}
          className='absolute rounded-full h-28 w-28 -bottom-11 right-0 left-0 mx-auto select-none'
          draggable='false'
        />
      </div>
      <div className='mt-12'>
        <h1 className='text-center text-2xl font-medium text-gray-800 dark:text-indigo-50 select-none'>
          {firstName} {lastName}
        </h1>
        <div className='flex justify-center gap-x-9 my-3 text-xl'>
          <AnchorTag
            hrefUrl={socialLinks.twitter.url}
            customClasses='transform hover:scale-125 text-gray-800 dark:text-gray-300'
          >
            <FiTwitter />
          </AnchorTag>
          <AnchorTag
            hrefUrl={socialLinks.github.url}
            customClasses='transform hover:scale-125 text-gray-800 dark:text-gray-300'
          >
            <FiGithub />
          </AnchorTag>
          <AnchorTag
            hrefUrl={socialLinks.linkedin.url}
            customClasses='transform hover:scale-125 text-gray-800 dark:text-gray-300'
          >
            <FiLinkedin />
          </AnchorTag>
        </div>
      </div>
      <p className='text-sm text-center mb-2 max-w-screen-mb md:max-w-screen-sm mx-auto text-gray-800 dark:text-gray-200'>
        {about}
      </p>
      <div className='flex justify-between my-3 max-w-screen-mb md:max-w-screen-sm mx-auto text-gray-800 dark:text-gray-200'>
        {country.length > 0 ? (
          <p className='text-xs'>Country: {country}</p>
        ) : (
          ''
        )}
        {state.length > 0 ? <p className='text-xs'>State: {state}</p> : ''}
      </div>
      <div className='flex justify-between my-3 max-w-screen-mb md:max-w-screen-sm mx-auto text-gray-800 dark:text-gray-200'>
        {phoneNumber.length > 0 ? (
          <p className='text-xs'>Phone: {phoneNumber}</p>
        ) : (
          ''
        )}
        {university.length > 0 ? (
          <p className='text-xs'>University: {university}</p>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
