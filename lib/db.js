import { firebase } from './firebase'

const db = firebase.firestore()

export function createUser({ uid, data }) {
  return (
    db
      // similar to table in traditional db
      .collection('users')
      .doc(uid)
      .set({ uid, ...data }, { merge: true })
  )
}
