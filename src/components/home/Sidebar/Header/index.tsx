import { useState } from 'react'
import { IoMoon } from 'react-icons/io5'
import { AiOutlinePaperClip } from 'react-icons/ai'
import HeaderBtn from './HeaderBtn'
import { Flex, Heading } from '@radix-ui/themes'

export default function Header(): JSX.Element {
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
    <Flex direction='column' className='pt-4 h-fit' gap='2'>
      <Heading as='h3'>Personal Bento</Heading>
      <Flex direction='row' gap='4' justify='start'>
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
      </Flex>
    </Flex>
  )
}
