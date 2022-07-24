import { userConfig } from '../../apiData/userConfig'
import Loader from '../Loader'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const altUsernameImg = `${userConfig.username}`

export const useAvatar = ({
  avatarUrl,
  defaultImg = 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}: {
  avatarUrl?: string
  defaultImg?: string
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isErrorAvatarUrl, setIsErrorAvatarUrl] = useState(false)
  const [avatarFetched, setAvatarFetched] = useState('')

  useEffect(() => {
    setIsLoading(false)
    setIsErrorAvatarUrl(!avatarUrl)
    setAvatarFetched(!avatarUrl ? defaultImg : avatarUrl)
  }, [])

  return {
    isLoading,
    isErrorAvatarUrl,
    avatarFetched
  }
}

export default function Avatar({ avatar }: { avatar?: string }) {
  const [username, setUsername] = useState<string>(`${userConfig.firstName} ${userConfig.lastName}`)
  const { isLoading, isErrorAvatarUrl, avatarFetched } = useAvatar({
    avatarUrl: avatar
  })

  useEffect(() => {
    if (username.length > 30) {
      setUsername(userConfig.username)
    }
  }, [])

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
        {username}
      </h1>
    </section>
  )
}
