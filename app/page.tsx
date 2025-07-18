import Page from '~/lib/frontend/components/pages/Page'
import { buildMetadata } from '@cluesurf/leaf/utility/metadata'

export const metadata = buildMetadata({
  site: 'züs',
  title: 'züs',
  // description: '',
})

export default function View() {
  return <Page />
}
