import Head from 'next/head'
import { Button } from '@chakra-ui/button'
import { Text, Container } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/layout'
import { useAuth } from '../lib/auth'
import { Spinner } from '@chakra-ui/react'

export default function Home() {
  const auth = useAuth()

  return (
    <>
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Container as="main">
        <Heading>Fast Feedback</Heading>
        {auth.loading && <Spinner />}
        {auth.user && (
          <>
            <Text>{auth.user.name}</Text>
            <Text>{auth.user.email}</Text>
            <Text>{auth.user.provider}</Text>
            <Button onClick={(_e) => auth.signout()}>Sign Out</Button>
          </>
        )}
        {!auth.user && !auth.loading && (
          <Button onClick={(_e) => auth.signInWithGithub()}>
            Sign In with Github
          </Button>
        )}
      </Container>
    </>
  )
}
