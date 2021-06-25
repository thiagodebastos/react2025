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

function useAuthProvider() {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  function signin() {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user
        setUser(user)
        return user
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
        setUser(false)
      })
      .catch((error) => {
        console.log(error)
        setError(error)
      })
  }

  useEffect(() => {
    setUser(user)
  })

  return {
    user,
    signin,
    signout,
    error,
  }
}
