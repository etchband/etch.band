'use client'

import Layout from '@cluesurf/leaf/component/Layout'
import type { ErrorPageInput } from '@cluesurf/leaf/component/page/ErrorPage'
import BaseGlobalErrorPage from '@cluesurf/leaf/component/page/GlobalErrorPage'
import Environment from '~/lib/frontend/components/Environment'

export default function GlobalErrorPage({
  error,
  reset,
}: ErrorPageInput) {
  return (
    <Environment>
      <Layout
        left={<Layout.Side color="red" />}
        right={<Layout.Side color="red" />}
      >
        <BaseGlobalErrorPage
          error={error}
          reset={reset}
        />
      </Layout>
    </Environment>
  )
}
