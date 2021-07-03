import { useAvatar } from '../../../hooks/useAvatar'
import { userConfig } from '../../../api/userConfig'
import AvatarLinkTags from './AvatarLinkTags'

export default function AvatarModal() {
  const { avatar, firstName, lastName, username, about, country, state } =
    userConfig

  const { avatarFetched } = useAvatar({ avatarUrl: avatar })

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
        <p className='text-center w-full text-sm opacity-70 animate-pulse'>
          @{username}
        </p>
        <AvatarLinkTags />
      </div>
      <p className='text-sm text-center mb-2 max-w-screen-mb md:max-w-screen-sm mx-auto text-gray-800 dark:text-gray-200 leading-6'>
        {about}
      </p>
      <div className='flex justify-center gap-x-1 items-center my-3 max-w-screen-mb md:max-w-screen-sm mx-auto text-gray-800 dark:text-gray-200'>
        {country.length > 0 && (
          <span className='text-xs capitalize'>{country}</span>
        )}
        {state.length > 0 && (
          <>
            <span>|</span>
            <span className='text-xs capitalize'>{state}</span>
          </>
        )}
      </div>
    </div>
  )
}
