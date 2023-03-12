import { Box, useMediaQuery } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function MobileScrollAlert(): JSX.Element {
  const [isVisible, setIsVisible] = useState(true)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    if (localStorage.getItem('mobileScrollAlert') === 'false') {
      setIsVisible(false)
      return
    }

    const oberserver = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting)
      },
      {
        root: null,
        threshold: 1,
        rootMargin: '0px'
      }
    )

    if (contentRef.current != null) {
      oberserver.observe(contentRef.current)
    }
    return () => {
      if (contentRef.current != null) {
        oberserver.unobserve(contentRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) {
      localStorage.setItem('mobileScrollAlert', 'false')
    }
  }, [isVisible])

  if (isLargerThan768) {
    return <></>
  }

  if (!isVisible) {
    return <></>
  }

  return (
    <Box
      ref={contentRef}
      className='absolute top-[750px] left-0 right-0 mx-auto w-[350px] animate-bounce opacity-70 hover:opacity-95 transition'
    >
      <a
        href='#social'
        className='bg-gray-200 p-4 rounded-xl flex items-center justify-center text-lg gap-2 font-semibold animate-pulse active:scale-105 transition select-none'
      >
        Scroll down to see more content
        <MdKeyboardArrowDown size='1.5rem' />
      </a>
    </Box>
  )
}
