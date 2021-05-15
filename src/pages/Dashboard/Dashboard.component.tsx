import { Flex } from '@chakra-ui/react'
import { MainLayout } from 'layouts/MainLayout'
import { NotesList } from 'components/NotesList'
import { AddNoteButton } from 'components/AddNoteButton'

const Dashboard = (): JSX.Element => (
  <MainLayout>
    <Flex
      direction="column"
      height="100%"
      width="100%"
      alignItems="center"
      padding={{ sm: 5, md: 10 }}
      maxWidth="1440px"
    >
      <NotesList />
      <AddNoteButton />
    </Flex>
  </MainLayout>
)

export default Dashboard
