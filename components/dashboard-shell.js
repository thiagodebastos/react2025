import React from 'react'
import {
  ChakraProvider,
  Box,
  Icon,
  Link,
  Stack,
  Flex,
  Avatar,
  Breadcrumb,
  Heading,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'
import { useAuth } from '../lib/auth'

export function DashboardShell({ children }) {
  const { user } = useAuth()
  return (
    <Flex flexDirection="column">
      <Flex
        alignItems="stretch"
        justifyContent="space-between"
        backgroundColor="white"
        p={4}
      >
        <Stack
          spacing={4}
          isInline
          alignItems="center"
          justifyContent="space-between"
        >
          <MoonIcon />
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Flex justifyContent="flex-start" alignItems="center">
          <Link mr={4}>Account</Link>
          <Avatar size="sm" src={user.photoUrl} />
        </Flex>
      </Flex>
      <Flex
        backgroundColor="gray.100"
        justifyContent="flex-start"
        p={8}
        minH="calc(100vh - 64px)"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="stretch"
          ml="auto"
          mr="auto"
          maxWidth="800px"
          width="100%"
        >
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink color="gray.500">Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Heading size="xl">Sites</Heading>

          <Box backgroundColor="white" borderRadius={4} p={12} mt={4}>
            <Stack spacing={4} alignItems="center">
              {children}
            </Stack>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
