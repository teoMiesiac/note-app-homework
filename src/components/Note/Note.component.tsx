import { Divider, Text, Flex, Spacer, Button } from '@chakra-ui/react'
import { Note as INote } from 'models'
import { Share } from 'components/Icons'

interface Props {
  note: INote
}

const Note = ({ note }: Props): JSX.Element => (
  <>
    <Flex direction="column" alignItems="flex-start" width="100%" padding={1}>
      <Flex direction="row" width="100%" justifyContent="space-between" wrap="nowrap" alignItems="center">
        <Text color="teal" isTruncated width="100%" display="inline-block">
          {note.text}
        </Text>
        <Spacer />
        <Button variant="ghost">
          <Share props={{ fill: 'teal' }} />
        </Button>
      </Flex>
      <Text color="red">Expiration time: {note.expirationTime}</Text>
    </Flex>
    <Divider />
  </>
)

export default Note
