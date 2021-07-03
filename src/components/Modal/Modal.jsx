import { useState } from 'react'
import { createPortal } from 'react-dom'
import { CgCloseO, CgExpand } from 'react-icons/cg'

/**
 *
 * @param {JSX.Element | React.FC} children
 * @param {string} elementId
 * @param {Function} closeModalFunc
 * @returns JSX.Element
 */
export default function Modal({ children, elementId = '', closeModalFunc }) {
  const [expandWindowModal, setExpandWindowModal] = useState(false)

  const handleExpandWindow = () => setExpandWindowModal(!expandWindowModal)

  const body = document.body
  body.style.position = 'fixed'

  const handleCloseModalFunc = () => {
    closeModalFunc()
    body.style.position = ''
  }

  return (
    <>
      {createPortal(
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 min-h-screen px-4 sm:px-0 ${
            expandWindowModal ? 'pt-4' : 'pt-4 sm:pt-8 md:pt-10'
          } `}
        >
          <div
            className={`relative p-3 bg-gray-50 dark:bg-gray-700 rounded-lg transition-all mx-auto ${
              expandWindowModal
                ? 'w-full h-full sm:w-3/4 sm:h-auto'
                : 'w-72 sm:w-80 h-auto'
            }`}
          >
            <div className='flex justify-end gap-x-2 text-2xl'>
              <CgExpand
                onClick={handleExpandWindow}
                className='text-green-500 cursor-pointer'
              />
              <CgCloseO
                className='text-red-500 cursor-pointer'
                onClick={handleCloseModalFunc}
              />
            </div>
            {children}
          </div>
        </div>,
        document.getElementById(`${elementId}`)
      )}
    </>
  )
}
