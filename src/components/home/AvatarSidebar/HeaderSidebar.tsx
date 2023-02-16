import type { MouseEventHandler, ReactNode } from 'react'
import type { IconType } from 'react-icons'
import { useState } from 'react'
import { IoMoon } from 'react-icons/io5'
import { AiOutlinePaperClip } from 'react-icons/ai'

function HeaderBtn({
  Icon,
  title,
  onClick
}: {
  Icon: IconType | JSX.Element
  title: string
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}): JSX.Element {
  const [showTooltip, setShowTooltip] = useState<boolean>(false)

  if (Icon == null) return <></>
  return (
    <>
      <div className='relative'>
        <button
          className='bg-transparent hover:bg-gray-100 text-black w-fit h-fit rounded-lg p-2 hover:shadow-sm text-lg cursor-pointer hover:brightness-95 transition focus:outline-none text-center'
          title={title}
          onClick={onClick}
          data-tooltip-target='tooltip-default'
          onMouseEnter={() => {
            setShowTooltip(true)
          }}
          onMouseLeave={() => {
            setShowTooltip(false)
          }}
        >
          {Icon as unknown as ReactNode}
        </button>
        {title != null && (
          <div
            id='tooltip-default'
            role='tooltip'
            className={`absolute -bottom-3 left-0 w-28 text-sm bg-gray-200 rounded-lg py-1 font-medium text-center shadow-md ${
              showTooltip ? 'opacity-100' : 'opacity-0'
            } transition`}
          >
            {title}
          </div>
        )}
      </div>
    </>
  )
}

export default function HeaderSidebar(): JSX.Element {
  const handleChangeTheme = (): void => {
    const html = document.querySelector('html')
    if (html == null) return

    html.classList.toggle('dark')
  }

  return (
    <div className='opacity-0 group-hover:opacity-100 transition w-full px-6 pb-0 pt-8 flex justify-end max-h-[100px] gap-4'>
      <HeaderBtn title='Copy link' Icon={<AiOutlinePaperClip />} />
      <HeaderBtn
        Icon={<IoMoon />}
        title='Change theme'
        onClick={handleChangeTheme}
      />
    </div>
  )
}
