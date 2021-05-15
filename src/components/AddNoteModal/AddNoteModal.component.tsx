import { useState, FormEvent } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
  Text,
} from '@chakra-ui/react'
import { DateTimePicker } from 'components/DateTimePicker'
import { PasswordInput } from 'components/PasswordInput'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const AddNoteModal = ({ isOpen, onClose }: Props): JSX.Element => {
  const [text, setText] = useState<string>('')
  const [expireDate, setExpireDate] = useState<Date>(new Date(Date.now() + 3600 * 1000 * 24)) // Add one day in ms
  const [password, setPassword] = useState<string>('')

  const onTextChange = (event: FormEvent<HTMLTextAreaElement>): void => {
    setText(event.currentTarget.value.trim())
  }

  const onPasswordChange = (event: FormEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value.trim())
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} colorScheme="teal" isCentered={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="teal.500">Add Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              focusBorderColor="teal.500"
              color="teal.500"
              value={text}
              onChange={onTextChange}
              placeholder="What's on your mind?"
              required={true}
            />
            <Text color="teal.500" marginTop={5}>
              Expire date:{' '}
            </Text>
            <DateTimePicker startDate={expireDate} onChange={(date) => setExpireDate(date)} />
            <Text color="teal.500" marginTop={5}>
              Protect shared note with password:
            </Text>
            <PasswordInput
              value={password}
              inputProps={{
                onChange: onPasswordChange,
                isRequired: true,
                placeholder: 'Protect your note',
              }}
              wrapperProps={{ marginTop: 2 }}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddNoteModal
