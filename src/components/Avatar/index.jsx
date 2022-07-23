import { useAvatar } from '../../hooks/useAvatar'
import { userConfig } from '../../apiData/userConfig'
import Loader from '../Loader'
import Image from 'next/image'

const avatarUrl = userConfig.avatar
const altUsernameImg = `${userConfig.username}`

export default function Avatar() {
  const { isLoading, isErrorAvatarUrl, avatarFetched } = useAvatar({
    avatarUrl
  })

  const fullName = `${userConfig.firstName} ${userConfig.lastName}`

  if (fullName.length > 30) {
    return userConfig.username
  }

  return (
    <section className='py-8 flex flex-col md:max-w-2xl md:mx-auto'>
      {isLoading || isErrorAvatarUrl ? (
        <Loader />
      ) : (
        <div className='lg:flex md:max-w-2xl'>
          <div className='block mx-auto rounded-full select-none removeBlueHighlight w-36 h-36 md:w-44 md:h-44 transition transform hover:scale-110 lg:w-48 lg:h-48'>
            <Image
              src={avatarFetched}
              alt={altUsernameImg}
              layout='fill'
              aria-hidden='true'
              draggable='false'
              className='rounded-full'
              title='An error loading your avatar image'
            />
          </div>
        </div>
      )}
      <h1
        className='inline-block w-auto mx-auto mt-6 text-2xl font-semibold text-center border-b-4 border-green-500 md:text-3xl'
        title={userConfig.username}
      >
        {fullName}
      </h1>
    </section>
  )
}
