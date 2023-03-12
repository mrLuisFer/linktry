import type { MouseEventHandler, ReactNode } from 'react'
import { useState } from 'react'
import type { IconType } from 'react-icons'
import { IoMoon } from 'react-icons/io5'
import { AiOutlinePaperClip } from 'react-icons/ai'
import CustomTooltip from '../../core/Tooltip'

function HeaderBtn({
  Icon,
  title,
  onClick,
  className = ''
}: {
  Icon: IconType | JSX.Element
  title: string
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  className?: string
}): JSX.Element {
  if (Icon == null) return <></>
  return (
    <CustomTooltip title={title}>
      <button
        className={`bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 hover:dark:bg-gray-700 text-black dark:text-gray-100 w-fit h-fit rounded-lg p-2 hover:shadow-sm text-lg cursor-pointer hover:brightness-95 transition focus:outline-none text-center active:scale-95 ${className}`}
        title={title}
        onClick={onClick}
        data-tooltip-target='tooltip-default'
      >
        {Icon as unknown as ReactNode}
      </button>
    </CustomTooltip>
  )
}

export default function HeaderSidebar(): JSX.Element {
  const [isCopiedLink, setIsCopiedLink] = useState<boolean>(false)

  const handleChangeTheme = (): void => {
    const html = document.querySelector('html')
    if (html == null) return

    html.classList.toggle('dark')
  }

  const handleCopyLink = async (): Promise<void> => {
    const url = window.location.href
    await navigator.clipboard.writeText(url)
    setIsCopiedLink(true)

    setTimeout(() => {
      setIsCopiedLink(false)
    }, 3000)
  }

  return (
    <div className='opacity-0 group-hover:opacity-100 transition w-full px-6 pb-0 pt-8 flex justify-end max-h-[100px] gap-4'>
      <HeaderBtn
        title={isCopiedLink ? 'Link copied!' : 'Copy link'}
        Icon={<AiOutlinePaperClip />}
        onClick={() => {
          void handleCopyLink()
        }}
        className={
          isCopiedLink
            ? 'bg-green-200 dark:bg-green-300 dark:text-gray-900 hover:dark:bg-green-200 hover:bg-green-200 hover:brightness-105'
            : ''
        }
      />
      <HeaderBtn
        Icon={<IoMoon />}
        title='Change theme'
        onClick={handleChangeTheme}
      />
    </div>
  )
}
