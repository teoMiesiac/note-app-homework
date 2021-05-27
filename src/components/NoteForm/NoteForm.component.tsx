import { useState, useEffect, FormEvent, SyntheticEvent } from 'react'
import { observer } from 'mobx-react-lite'
import { Flex, FormControl, FormLabel, Textarea, Button } from '@chakra-ui/react'
import { DateTimePicker } from 'components/DateTimePicker'
import { PasswordInput } from 'components/PasswordInput'
import { ShareNoteModal } from 'components/ShareNoteModal'
import { useDataStore } from 'store/hooks'

const NoteForm = observer((): JSX.Element => {
  const [text, setText] = useState<string>('')
  const [expireDate, setExpireDate] = useState<Date>(new Date(Date.now() + 3600 * 1000)) // Add one hour in ms
  const [password, setPassword] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const {
    NotesStore: { postNote, loading, urlToShare },
  } = useDataStore()

  useEffect(() => {
    urlToShare !== null && setIsModalOpen(true)
  }, [urlToShare])

  const onTextChange = (event: FormEvent<HTMLTextAreaElement>): void => {
    setText(event.currentTarget.value)
  }

  const onPasswordChange = (event: FormEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value)
  }

  const isAnyFieldEmpty = (): boolean => {
    return text === '' || password === '' || expireDate === null
  }

  const onSubmit = (event: SyntheticEvent): void => {
    event.preventDefault()
    postNote({ text: text.trim(), expirationTime: expireDate.toJSON(), password })
  }

  const onModalClose = (): void => {
    setText('')
    setPassword('')
    setExpireDate(new Date(Date.now() + 3600 * 1000)) // Add one hour in ms
    setIsModalOpen(false)
  }

  return (
    <>
      <Flex
        as="form"
        direction="column"
        width="100%"
        maxWidth="450px"
        padding={5}
        borderRadius="10px"
        boxShadow="2xl"
        color="teal.500"
        onSubmit={onSubmit}
      >
        <FormControl id="noteContent" isRequired>
          <FormLabel>Note Content</FormLabel>
          <Textarea
            focusBorderColor="teal.500"
            value={text}
            onChange={onTextChange}
            placeholder="What's on your mind?"
            required={true}
          />
        </FormControl>
        <FormControl id="expireDate">
          <FormLabel>Expire date:</FormLabel>
          <DateTimePicker startDate={expireDate} onChange={(date) => setExpireDate(date)} />
        </FormControl>
        <FormControl id="password" isRequired mt={3}>
          <FormLabel>Protect your note</FormLabel>
          <PasswordInput
            value={password}
            inputProps={{
              onChange: onPasswordChange,
              isRequired: true,
              placeholder: 'Password',
              minLength: 5,
            }}
            wrapperProps={{ marginTop: 2 }}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" disabled={isAnyFieldEmpty()} mt={3} isLoading={loading}>
          Share
        </Button>
      </Flex>
      <ShareNoteModal isOpen={isModalOpen} url={urlToShare} onClose={onModalClose} />
    </>
  )
})

export default NoteForm
