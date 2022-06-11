import { useAvatar } from '../../../hooks/useAvatar'
import { userConfig } from '../../../apiData/userConfig'
import AvatarLinkTags from './AvatarLinkTags'
import AvatarFooter from './AvatarFooter'

const {
  avatar,
  firstName,
  lastName,
  username,
  about,
  country,
  state,
  university
} = userConfig

export default function AvatarModal() {
  const { avatarFetched } = useAvatar({ avatarUrl: avatar })

  return (
    <div className='mt-4'>
      <div className='relative h-32 bg-hero-bg rounded-md'>
        <img
          src={avatarFetched}
          alt={username}
          className='absolute left-0 right-0 mx-auto rounded-full select-none h-28 w-28 -bottom-11'
          draggable='false'
        />
      </div>
      <div className='mt-12'>
        <h1 className='text-2xl font-medium text-center text-gray-800 select-none dark:text-indigo-50'>
          {firstName} {lastName}
        </h1>
        <p className='w-full text-sm text-center opacity-70 animate-pulse'>
          @{username}
        </p>
        <AvatarLinkTags />
      </div>
      <p className='mx-auto mb-2 text-sm text-center text-gray-800 max-w-screen-mb md:max-w-screen-sm dark:text-gray-200 leading-6'>
        {about}
      </p>
      <AvatarFooter country={country} state={state} university={university} />
    </div>
  )
}
