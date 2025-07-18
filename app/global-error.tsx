'use client'

import type { ErrorPageInput } from '@cluesurf/leaf/component/page/ErrorPage'
import { buildMetadata } from '@cluesurf/leaf/utility/metadata'

import GlobalErrorPage from '~/lib/frontend/components/pages/global-error/Page'

export const metadata = buildMetadata({
  site: 'züs',
  title: 'Error',
})

export default function Page(props: ErrorPageInput) {
  return <GlobalErrorPage {...props} />
}
