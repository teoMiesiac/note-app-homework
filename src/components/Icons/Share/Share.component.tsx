import { Icon, IconProps } from '@chakra-ui/react'

interface Props {
  props?: IconProps
}

const Share = ({ props }: Props): JSX.Element => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z" />
  </Icon>
)

export default Share
