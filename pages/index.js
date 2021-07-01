import Head from 'next/head'
import { Button } from '@chakra-ui/button'
import { Stack, Text, Container, Code, Flex } from '@chakra-ui/layout'
import { Link, Spinner } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import { useAuth } from '../lib/auth'
import NextLink from 'next/link'

export default function Home() {
  const auth = useAuth()

  return (
    <Container>
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Stack
        as="main"
        direction="column"
        alignItems="center"
        height="100vh"
        justify="center"
      >
        <ChatIcon w={12} h={12} />
        {auth.loading && <Spinner />}
        {auth.user && (
          <>
            <Text>{auth.user.name}</Text>
            <Code>{auth.user.email}</Code>
            <Text>{auth.user.provider}</Text>
            <NextLink href="/dashboard">
              <Link>--&gt; dashboard</Link>
            </NextLink>
            <Button variant="link" size="sm" onClick={(_e) => auth.signout()}>
              Sign Out
            </Button>
          </>
        )}
        {!auth.user && !auth.loading && (
          <Button mt={4} size="sm" onClick={(_e) => auth.signInWithGithub()}>
            Sign In with Github
          </Button>
        )}
      </Stack>
    </Container>
  )
}
