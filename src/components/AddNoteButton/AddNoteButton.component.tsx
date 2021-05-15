import { Button } from '@chakra-ui/react'
import { Plus } from 'components/Icons'

const AddNoteButton = (): JSX.Element => {
  return (
    <Button
      size="lg"
      position="fixed"
      bottom="10"
      right="10"
      colorScheme="teal"
      borderRadius="50%"
      height="60px"
      width="60px"
      border="2px"
    >
      <Plus props={{ fill: 'white' }} />
    </Button>
  )
}

export default AddNoteButton
