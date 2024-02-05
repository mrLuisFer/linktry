import { useMediaQuery } from '@chakra-ui/react'

export interface UseBreakpoints {
  isMobile: boolean
}
export const useBreakpoints = (): UseBreakpoints => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return {
    isMobile
  }
}
