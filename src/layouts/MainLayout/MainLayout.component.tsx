import { useState, useLayoutEffect } from 'react'
import { Main } from './MainLayout.styles'

interface Props {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props): JSX.Element => {
  const [height, setHeight] = useState<number>(0)

  // make container 100vh on mobile
  // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  useLayoutEffect(() => {
    const calculateHeight = async () => {
      const vh = window.innerHeight
      setHeight(vh)
    }
    calculateHeight()
    window.addEventListener('resize', calculateHeight)
    return () => window.removeEventListener('resize', calculateHeight)
  }, [])

  return <Main windowHeight={height}>{children}</Main>
}

export default MainLayout
