import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Stack,
  Heading,
  InputGroup,
  InputLeftAddon,
  Button,
} from '@chakra-ui/react'

export function AddSiteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Add Your First Site</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Your First Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={2}>
              <Heading>Add Site</Heading>
              <FormControl>
                <InputGroup>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="My Site" />
                  <FormErrorMessage>Error message</FormErrorMessage>
                </InputGroup>
                <InputGroup>
                  <FormLabel>Link</FormLabel>
                  <InputLeftAddon>https://</InputLeftAddon>
                  <Input placeholder="my-website.com.au" />
                  <FormErrorMessage>Error message</FormErrorMessage>
                </InputGroup>
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
