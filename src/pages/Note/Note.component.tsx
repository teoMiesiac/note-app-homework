import { useState, useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { PasswordModal } from 'components/PasswordModal'
import { useDataStore } from 'store/hooks'
import { Note as NoteComponent } from 'components/Note'
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
        {note && <NoteComponent note={note} />}
      </Flex>
      <PasswordModal />
    </MainLayout>
  )
})

export default Note
