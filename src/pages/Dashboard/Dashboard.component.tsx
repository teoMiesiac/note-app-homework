import { Flex, useDisclosure } from '@chakra-ui/react'
import { MainLayout } from 'layouts/MainLayout'
import { NotesList } from 'components/NotesList'
import { AddNoteButton } from 'components/AddNoteButton'
import { AddNoteModal } from 'components/AddNoteModal'

const Dashboard = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <MainLayout>
      <Flex as="section" width="100%" direction="column" alignItems="center">
        <Flex
          direction="column"
          height="100%"
          width="100%"
          alignItems="center"
          padding={{ sm: 5, md: 10 }}
          maxWidth="1440px"
        >
          <NotesList />
          <AddNoteButton props={{ onClick: onOpen }} />
        </Flex>
      </Flex>
      <AddNoteModal isOpen={isOpen} onClose={onClose} />
    </MainLayout>
  )
}
export default Dashboard
