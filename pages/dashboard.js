import { Spinner } from '@chakra-ui/spinner'
import { EmptyState } from '../components/empty-state'
import { useAuth } from '../lib/auth'

export default function Dashboard() {
  const auth = useAuth()

  if (!auth.user) {
    return <Spinner />
  }
  return <EmptyState />
}
