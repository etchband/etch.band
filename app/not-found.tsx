import { buildMetadata } from '@cluesurf/leaf/utility/metadata'
import Page from '~/lib/frontend/components/pages/not-found/Page'

export const metadata = buildMetadata({
  site: 'züs',
  title: 'Not Found',
})

export default function View() {
  return <Page />
}
