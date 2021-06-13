import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { CgCloseO, CgExpand } from 'react-icons/cg'

/**
 *
 * @param {JSX.Element | React.FC} jsxComponent
 * @param {string} elementId
 * @param {Function} closeFunc
 * @returns JSX.Element
 */
export default function Modal({ children, elementId = '', closeModalFunc }) {
  const [expandWindowModal, setExpandWindowModal] = useState(false)

  const handleExpandWindow = () => setExpandWindowModal(!expandWindowModal)

  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 min-h-screen px-4 ${
            expandWindowModal ? 'pt-4' : 'pt-24'
          } `}
        >
          <div
            className={`relative p-3 bg-gray-50 dark:bg-gray-100 rounded-lg transition-all ${
              expandWindowModal ? 'w-full h-full' : 'w-72'
            }`}
          >
            <div className='flex justify-end gap-x-2 text-2xl'>
              <CgExpand
                onClick={handleExpandWindow}
                className='text-green-500 cursor-pointer'
              />
              <CgCloseO
                className='text-red-500 cursor-pointer'
                onClick={closeModalFunc}
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
