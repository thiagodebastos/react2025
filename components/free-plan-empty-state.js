import { Box, Heading, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { DashboardShell } from './dashboard-shell'
export function FreePlanEmptyState() {
  return (
    <DashboardShell>
      <Heading as="h2" size="md">
        Get feedback on your site instantly.
      </Heading>
      <Text>Start today, then grow with us 🌱</Text>
      <Button variant="solid" size="md">
        Upgrade to Starter
      </Button>
    </DashboardShell>
  )
}
