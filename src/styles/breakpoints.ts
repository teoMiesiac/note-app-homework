import { createBreakpoints } from '@chakra-ui/theme-tools'

// How to use:
// margin={{base: 5,sm:6,md:7,lg:8,xl:9,xxl:10}}

export const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '1280px',
  xl: '1440px',
  xxl: '1920px',
})
