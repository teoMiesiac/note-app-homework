import { Flex } from '@chakra-ui/react'
import { LoginForm } from 'components/LoginForm'
import { MainLayout } from 'layouts/MainLayout'

const Login = (): JSX.Element => {
  return (
    <MainLayout>
      <Flex direction="column" height="100%" alignItems="center" justifyContent="center" p={10}>
        <LoginForm />
      </Flex>
    </MainLayout>
  )
}

export default Login
