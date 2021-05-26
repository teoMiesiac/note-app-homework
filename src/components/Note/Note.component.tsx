import { Heading, Text, Flex, Spacer } from '@chakra-ui/react'
import { Note as INote } from 'models'

interface Props {
  note: INote
}

const Note = ({ note }: Props): JSX.Element => (
  <>
    <Flex
      direction="column"
      width="100%"
      maxWidth="450px"
      padding={5}
      borderRadius="10px"
      boxShadow="2xl"
      color="teal.500"
    >
      <Flex direction="column" width="100%" wrap="nowrap" alignItems="flex-start">
        <Heading as="h3" color="teal.500" textAlign="left">
          Note content:
        </Heading>
        <Text color="teal.500" width="100%" display="inline-block" padding={2}>
          {note.text}
        </Text>
        <Spacer />
      </Flex>
    </Flex>
  </>
)

export default Note
