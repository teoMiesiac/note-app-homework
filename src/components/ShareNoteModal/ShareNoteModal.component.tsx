import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from '@chakra-ui/react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Copy } from 'components/Icons'

interface Props {
  isOpen: boolean
  onClose: () => void
  url: string
}

const ShareNoteModal = ({ isOpen, onClose, url }: Props): JSX.Element => {
  const toast = useToast()

  const onClick = (): void => {
    toast({
      title: 'URL copied to clipboard',
      duration: 2000,
      status: 'success',
    })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent color="teal.500">
        <ModalHeader>Share Note</ModalHeader>
        <ModalBody>
          <InputGroup>
            <Input value={url} size="md" isReadOnly focusBorderColor="teal.500" border="2px"></Input>
            <InputRightElement width="4.5rem">
              <CopyToClipboard text={url} onCopy={onClick}>
                <Button colorScheme="teal" size="sm" variant="ghost">
                  <Copy />
                </Button>
              </CopyToClipboard>
            </InputRightElement>
          </InputGroup>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  )
}

export default ShareNoteModal
