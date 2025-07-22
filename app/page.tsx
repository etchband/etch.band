import Page from '~/lib/frontend/components/pages/Page'
import { buildMetadata } from '@cluesurf/leaf/utility/metadata'
import { CURRENT_URL } from '~/lib/shared/utilities/url'

export const metadata = buildMetadata({
  site: 'züs',
  title: 'züs',
  // description: '',
  images: {
    url: `${CURRENT_URL}/logo.png`,
    width: 1590,
    height: 938,
    type: 'image/png',
  },
})

export default function View() {
  return <Page />
}
