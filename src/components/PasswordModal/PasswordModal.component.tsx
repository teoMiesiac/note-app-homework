import { useState, FormEvent, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useToast,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { PasswordInput } from 'components/PasswordInput'
import { useDataStore } from 'store/hooks'

const PasswordModal = observer((): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true)
  const [password, setPassword] = useState<string>('')
  const { id } = useParams<{ id: string }>()
  const {
    NotesStore: { getNote, loading, error, note },
  } = useDataStore()

  useEffect(() => {
    const toast = useToast()

    if (error) {
      toast({
        title: error,
        duration: 2000,
        status: 'error',
      })
    }
  }, [error])

  useEffect(() => {
    note && setIsModalOpen(false)
  }, [note])

  const onPasswordChange = (event: FormEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value)
  }

  const isSubmitDisabled = (): boolean => password.length === 0

  return (
    <Modal isOpen={isModalOpen} onClose={() => null} isCentered={true}>
      <ModalOverlay />
      <ModalContent color="teal.500">
        <ModalHeader>Someone shared note with you!</ModalHeader>
        <ModalBody>
          <PasswordInput
            value={password}
            inputProps={{
              onChange: onPasswordChange,
              isRequired: true,
              placeholder: 'Password',
            }}
          />
        </ModalBody>
        <ModalFooter justifyContent="flex-start">
          <Button
            colorScheme="teal"
            width="150px"
            onClick={() => getNote(id, password)}
            isLoading={loading}
            disabled={isSubmitDisabled()}
          >
            View
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
})

export default PasswordModal
