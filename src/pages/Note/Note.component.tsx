import { Flex } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { PasswordModal } from 'components/PasswordModal'
import { useDataStore } from 'store/hooks'
import { Note as NoteComponent } from 'components/Note'
import { CreateNoteHomeLink } from 'components/CreateNoteHomeLink'
import { MainLayout } from 'layouts/MainLayout'

const Note = observer((): JSX.Element => {
  const {
    NotesStore: { note },
  } = useDataStore()

  return (
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
        {note && (
          <>
            <NoteComponent note={note} />
            <CreateNoteHomeLink
              props={{
                marginTop: '40px',
                textAlign: 'left',
                width: '450px',
                padding: '10px',
              }}
            />
          </>
        )}
      </Flex>
      <PasswordModal />
    </MainLayout>
  )
})

export default Note
