'use client'

import type { ErrorPageInput } from '@cluesurf/leaf/component/page/ErrorPage'
import { buildMetadata } from '@cluesurf/leaf/utility/metadata'

import ErrorPage from '~/lib/frontend/components/pages/error/Page'

export const metadata = buildMetadata({
  site: 'züs',
  title: 'Error',
})

export default function Page(props: ErrorPageInput) {
  return <ErrorPage {...props} />
}
