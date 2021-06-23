import React from "react"
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi"
import { useAvatar } from "../../../hooks/useAvatar.js"
import { userConfig } from "../../../_Config/userConfig.js"
import { socialLinks } from "../../../_Config/socialLinks"
import AnchorTag from "../../AnchorTag/AnchorTag"

export default function AvatarModal() {
  const { avatar, firstName, lastName, username, about, country, state } =
    userConfig

  const { avatarFetched } = useAvatar({ avatarUrl: avatar })

  const urlIconClassName =
    "transform hover:scale-110 text-gray-800 dark:text-gray-300 p-2 hover:bg-gray-800 hover:text-gray-100 rounded-lg"

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
        <p className='text-center w-full text-sm opacity-70 animate-pulse'>@{username}</p>
        <div className='flex justify-center gap-x-9 m-1 text-xl'>
          <AnchorTag
            hrefUrl={socialLinks.twitter.url}
            customClasses={urlIconClassName}
          >
            <FiTwitter />
          </AnchorTag>
          <AnchorTag
            hrefUrl={socialLinks.github.url}
            customClasses={urlIconClassName}
          >
            <FiGithub />
          </AnchorTag>
          <AnchorTag
            hrefUrl={socialLinks.linkedin.url}
            customClasses={urlIconClassName}
          >
            <FiLinkedin />
          </AnchorTag>
        </div>
      </div>
      <p className='text-sm text-center mb-2 max-w-screen-mb md:max-w-screen-sm mx-auto text-gray-800 dark:text-gray-200'>
        {about}
      </p>
      <div className='flex justify-center gap-x-1 items-center my-3 max-w-screen-mb md:max-w-screen-sm mx-auto text-gray-800 dark:text-gray-200'>
        {country.length > 0 ? (
          <span className='text-xs capitalize'>{country}</span>
        ) : (
          ""
        )}
        {state.length > 0 ? (
          <>
            <span>|</span>
            <span className='text-xs capitalize'>{state}</span>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}
