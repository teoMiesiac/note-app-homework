import { Input, InputGroup, InputProps, InputRightElement, InputGroupProps } from '@chakra-ui/react'
import { Account } from 'components/Icons'

interface Props {
  value: string
  inputProps?: InputProps
  wrapperProps?: InputGroupProps
}

const UsernameInput = ({ value, inputProps = {}, wrapperProps = {} }: Props): JSX.Element => (
  <InputGroup {...wrapperProps}>
    <Input focusBorderColor="teal.500" placeholder="Username" value={value} type="text" {...inputProps} />
    <InputRightElement width="4.5rem">
      <Account props={{ fill: 'teal.500' }} />
    </InputRightElement>
  </InputGroup>
)

export default UsernameInput
