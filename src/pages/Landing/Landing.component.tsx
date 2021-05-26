import { Flex } from '@chakra-ui/react'
import { MainLayout } from 'layouts/MainLayout'
import { NoteForm } from 'components/NoteForm'

const Landing = (): JSX.Element => (
  <MainLayout>
    <Flex
      as="section"
      direction="column"
      height="100%"
      width="100%"
      alignItems="center"
      justifyContent="center"
      padding={{ sm: 5, md: 10 }}
      maxWidth="1440px"
    >
      <NoteForm />
    </Flex>
  </MainLayout>
)

export default Landing
