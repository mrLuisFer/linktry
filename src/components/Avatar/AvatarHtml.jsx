import React, { useState } from 'react'
import Loader from '../Loader/Loader'
import Modal from '../Modal/Modal'
import AvatarModal from './AvatarModal/AvatarModal'

export default function AvatarHtml({
  fullName,
  altUsernameImg,
  isLoading,
  isErrorAvatarUrl,
  avatarUrl,
  userConfig,
}) {
  const [showModal, setShowModal] = useState(false)

  const urlRegex = new RegExp(
    '^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$'
  )

  const defaultImg =
    'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'

  const closeModal = () => setShowModal(false)

  return (
    <div className='py-8 flex flex-col'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {avatarUrl.match(urlRegex) ? (
            <>
              <img
                src={isErrorAvatarUrl ? defaultImg : avatarUrl}
                alt={altUsernameImg}
                title={
                  isErrorAvatarUrl
                    ? 'An error loading your avatar image'
                    : altUsernameImg
                }
                className='block mx-auto w-36 h-36 rounded-full transition transform hover:scale-105 cursor-pointer'
                aria-hidden='true'
                onClick={() => setShowModal(true)}
              />
              {showModal ? (
                <Modal elementId='avatar-modal' closeModalFunc={closeModal}>
                  <AvatarModal />
                </Modal>
              ) : (
                ''
              )}
            </>
          ) : (
            <Loader />
          )}
        </>
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
