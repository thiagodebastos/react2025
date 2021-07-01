import { useRef } from 'react'
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
  useToast,
  Button,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { createSite } from '../lib/db'
import { useAuth } from '../lib/auth'

export function AddSiteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useAuth()
  const initialRef = useRef()

  const toast = useToast()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const onCreateSite = ({ site, url }) => {
    try {
      createSite({
        authorId: user.id,
        createdAt: new Date().toISOString(),
        site,
        url,
      })

      toast({
        title: 'Success!',
        description: "We've added your site.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } catch (error) {
      console.error(error)
      toast({
        title: 'Error!',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
    onClose()
  }

  return (
    <>
      <Button onClick={onOpen}>Add Your First Site</Button>

      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader>Add Your First Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={2}>
              <Heading>Add Site</Heading>
              <FormControl isInvalid={errors.site}>
                <FormLabel htmlFor="site">Name</FormLabel>
                <Input
                  placeholder="My Site"
                  name="site"
                  id="site"
                  {...register('site', { required: 'We need a site name!' })}
                />
                <FormErrorMessage>{errors.site?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.url}>
                <FormLabel htmlFor="url">Link</FormLabel>
                <Input
                  placeholder="website.com.au"
                  name="url"
                  id="url"
                  {...register('url', {
                    required: 'We need an url!',
                    minLength: {
                      value: 4,
                      message: 'Minimum length should be 4',
                    },
                  })}
                />
                <FormErrorMessage>{errors.url?.message}</FormErrorMessage>
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button isLoading={isSubmitting} type="submit" mr={3}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
