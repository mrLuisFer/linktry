import { useState } from 'react'

export default function CustomTooltip({
  children,
  title
}: {
  children: JSX.Element
  title: string
}): JSX.Element {
  const [showTooltip, setShowTooltip] = useState<boolean>(false)

  return (
    <div className='relative'>
      <div
        className='inline-block'
        onMouseEnter={() => {
          setShowTooltip(true)
        }}
        onMouseLeave={() => {
          setShowTooltip(false)
        }}
      >
        {children}
      </div>
      {title != null && (
        <div
          id='tooltip-default'
          role='tooltip'
          className={`absolute -bottom-2 left-0 w-28 text-sm bg-gray-200 rounded-lg py-1 font-medium text-center shadow-md dark:text-black dark:bg-gray-300 select-none ${
            showTooltip ? 'opacity-100' : 'opacity-0'
          } transition`}
        >
          {title}
        </div>
      )}
    </div>
  )
}
