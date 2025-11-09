import Page from '~/lib/frontend/components/pages/Page'
import { buildMetadata } from '@cluesurf/leaf/utility/metadata'
import { CURRENT_URL } from '~/lib/shared/utilities/url'

export const metadata = buildMetadata({
  site: 'züs',
  title: 'züs',
  // description: '',
  images: {
    url: `${CURRENT_URL ?? ''}/etch_1200x630.png`,
    width: 1200,
    height: 630,
    type: 'image/png',
  },
})

export default function View() {
  return <Page />
}
