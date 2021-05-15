import { Icon, IconProps } from '@chakra-ui/react'

interface Props {
  props?: IconProps
}

const Plus = ({ props }: Props): JSX.Element => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
  </Icon>
)

export default Plus
