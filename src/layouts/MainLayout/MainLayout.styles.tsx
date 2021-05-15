import styled from '@emotion/styled'

interface MainProps {
  windowHeight: number
}

export const Main = styled.main<MainProps>`
  //height: 100vh;
  height: ${(props) => props.windowHeight}px;
`
