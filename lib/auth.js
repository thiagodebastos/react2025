/** NOTE: heavily dependent on firebase
 * think about dependency injection
 */

import { createContext, useContext, useEffect, useState } from 'react'
import { firebase } from './firebase'

const authContext = createContext()

export function AuthProvider({ children }) {
  const auth = useAuthProvider()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function formatUser(user) {
  return {
    id: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
  }
}

function useAuthProvider() {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser)
      setLoading(false)
      setUser(user)
      return user
    } else {
      setLoading(false)
      setUser(false)
      return false
    }
  }

  function signInWithGithub() {
    setLoading(true)
    const provider = new firebase.auth.GithubAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = formatUser(result.user)
        handleUser(user)
      })
      .catch((error) => {
        setError(error)
      })
  }

  function signout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        handleUser(false)
      })
      .catch((error) => {
        console.log(error)
        setError(error)
      })
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser)
    return () => unsubscribe()
  }, [])

  return {
    user,
    signInWithGithub,
    signout,
    loading,
    error,
  }
}
