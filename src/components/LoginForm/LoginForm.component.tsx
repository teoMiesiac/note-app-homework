import { FormEvent, SyntheticEvent, useState } from 'react'
import { Heading, Flex, Button } from '@chakra-ui/react'
import { PasswordInput } from 'components/PasswordInput'
import { UsernameInput } from 'components/UsernameInput'

const LoginForm = (): JSX.Element => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onUsernameChange = (event: FormEvent<HTMLInputElement>): void => {
    setUsername(event.currentTarget.value.trim())
  }

  const onPasswordChange = (event: FormEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value.trim())
  }

  const onSubmit = (event: SyntheticEvent): void => {
    event.preventDefault()
    // submit
  }

  const isButtonDisabled = (): boolean => {
    return username.length === 0 || password.length === 0
  }

  return (
    <Flex
      as="form"
      direction="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      maxWidth="360px"
      onSubmit={onSubmit}
    >
      <Heading as="h1" color="teal.500" width="fit-content">
        Welcome
      </Heading>
      <UsernameInput
        value={username}
        inputProps={{ onChange: onUsernameChange, isRequired: true }}
        wrapperProps={{ marginTop: 10 }}
      />
      <PasswordInput
        value={password}
        inputProps={{ onChange: onPasswordChange, isRequired: true }}
        wrapperProps={{ marginTop: 5 }}
      />
      <Button colorScheme="teal" type="submit" disabled={isButtonDisabled()} marginTop={5} width="100%">
        Login
      </Button>
    </Flex>
  )
}

export default LoginForm
