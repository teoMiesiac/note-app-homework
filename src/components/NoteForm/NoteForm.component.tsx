import { useState, FormEvent } from 'react'
import { Flex, FormControl, FormLabel, Input, Textarea, Button, Text } from '@chakra-ui/react'
import { DateTimePicker } from 'components/DateTimePicker'
import { PasswordInput } from 'components/PasswordInput'

const NoteForm = (): JSX.Element => {
  const [text, setText] = useState<string>('')
  const [expireDate, setExpireDate] = useState<Date>(new Date(Date.now() + 3600 * 1000 * 24)) // Add one day in ms
  const [password, setPassword] = useState<string>('')

  const onTextChange = (event: FormEvent<HTMLTextAreaElement>): void => {
    setText(event.currentTarget.value.trim())
  }

  const onPasswordChange = (event: FormEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value.trim())
  }

  const isAnyFieldEmpty = (): boolean => {
    return text === '' || password === '' || expireDate === null
  }

  return (
    <Flex
      as="form"
      direction="column"
      width="100%"
      maxWidth="450px"
      padding={5}
      borderRadius="10px"
      boxShadow="2xl"
      color="teal.500"
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
            placeholder: 'Protect your note',
          }}
          wrapperProps={{ marginTop: 2 }}
        />
      </FormControl>
      <Button type="submit" colorScheme="teal" disabled={isAnyFieldEmpty()} mt={3}>
        Share
      </Button>
    </Flex>
  )
}
export default NoteForm
