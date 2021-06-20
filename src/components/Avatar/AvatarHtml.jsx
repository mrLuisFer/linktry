import React, { useState } from 'react'
import Loader from '../Loader/Loader'
import Modal from '../Modal/Modal'
import AvatarModal from './AvatarModal/AvatarModal'

const urlRegex = new RegExp(
  '^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$'
)

export default function AvatarHtml({
  fullName,
  altUsernameImg,
  isLoading,
  isErrorAvatarUrl,
  avatarUrl,
  userConfig,
  avtarFetched,
}) {
  const [showModal, setShowModal] = useState(false)

  const closeModal = () => setShowModal(false)

  return (
    <div className='py-8 flex flex-col md:max-w-2xl md:mx-auto'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {avatarUrl.match(urlRegex) ? (
            <div className='lg:flex md:max-w-2xl'>
              <img
                src={avtarFetched}
                alt={altUsernameImg}
                title={
                  isErrorAvatarUrl
                    ? 'An error loading your avatar image'
                    : altUsernameImg
                }
                className='removeBlueHighlight block mx-auto w-36 h-36 md:w-44 md:h-44 rounded-full transition transform hover:scale-105 cursor-pointer lg:w-48 lg:h-48 select-none'
                aria-hidden='true'
                onClick={() => setShowModal(true)}
                draggable='false'
              />
              {showModal ? (
                <Modal elementId='avatar-modal' closeModalFunc={closeModal}>
                  <AvatarModal />
                </Modal>
              ) : (
                ''
              )}
            </div>
          ) : (
            <Loader />
          )}
        </>
      )}
      <h1
        className='text-center font-semibold mx-auto mt-6 text-2xl md:text-3xl border-b-4 border-green-500 inline-block w-auto'
        title={userConfig.username}
      >
        {fullName}
      </h1>
    </div>
  )
}
