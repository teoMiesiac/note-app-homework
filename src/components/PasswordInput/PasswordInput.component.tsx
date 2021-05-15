import { useState } from 'react'
import { Input, InputGroup, InputProps, InputRightElement, InputGroupProps, Button } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'

interface Props {
  value: string
  inputProps?: InputProps
  wrapperProps?: InputGroupProps
}

const PasswordInput = ({ value, inputProps = {}, wrapperProps = {} }: Props): JSX.Element => {
  const [show, setShow] = useState<boolean>(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup {...wrapperProps}>
      <Input
        focusBorderColor="teal.500"
        placeholder="Password"
        value={value}
        type={show ? 'text' : 'password'}
        {...inputProps}
      />
      <InputRightElement width="4.5rem">
        <Button colorScheme="teal" size="sm" variant="ghost" onClick={handleClick}>
          <ViewIcon />
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default PasswordInput
