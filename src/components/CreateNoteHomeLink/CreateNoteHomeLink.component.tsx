import { Text, TextProps, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

interface Props {
  props?: TextProps
}

const CreateNoteHomeLink = ({ props }: Props): JSX.Element => (
  <Text color="teal.500" {...props}>
    Want to write your own note?{' '}
    <Link as={RouterLink} to="/">
      Click here
    </Link>
  </Text>
)

export default CreateNoteHomeLink
