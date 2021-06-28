import { DashboardShell } from './dashboard-shell'
import { Box, Text, Heading } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { AddSiteModal } from './add-site-modal'
export function EmptyState() {
  return (
    <DashboardShell>
      <Heading as="h2" size="md">
        You haven't added any sites.
      </Heading>
      <Text>Welcome. Let's get started.</Text>
      {/* <Button variant="solid" size="md">
        Add Your First Site
      </Button> */}
      <AddSiteModal />
    </DashboardShell>
  )
}
