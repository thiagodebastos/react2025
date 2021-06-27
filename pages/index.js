import Head from 'next/head'
import { useAuth } from '../lib/auth'
import styles from '../styles/Home.module.css'

export default function Home() {
  const auth = useAuth()

  return (
    <div className={styles.container}>
      <Head>
        <title>Fast Feedback - React 2025!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {auth.loading && <div>Loading...</div>}
        {auth.user && (
          <>
            <div>{auth.user.name}</div>
            <div>{auth.user.email}</div>
            <div>{auth.user.provider}</div>
            <button onClick={(_e) => auth.signout()}>Sign Out</button>
          </>
        )}
        {!auth.user && !auth.loading && (
          <button onClick={(_e) => auth.signInWithGithub()}>
            Sign In with Github
          </button>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
