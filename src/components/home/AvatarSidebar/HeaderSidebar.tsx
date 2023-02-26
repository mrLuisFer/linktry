import type { MouseEventHandler, ReactNode } from 'react'
import type { IconType } from 'react-icons'
import { IoMoon } from 'react-icons/io5'
import { AiOutlinePaperClip } from 'react-icons/ai'
import CustomTooltip from '../../core/Tooltip'

function HeaderBtn({
  Icon,
  title,
  onClick
}: {
  Icon: IconType | JSX.Element
  title: string
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}): JSX.Element {
  if (Icon == null) return <></>
  return (
    <CustomTooltip title={title}>
      <button
        className='bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 hover:dark:bg-gray-700 text-black dark:text-gray-100 w-fit h-fit rounded-lg p-2 hover:shadow-sm text-lg cursor-pointer hover:brightness-95 transition focus:outline-none text-center'
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
