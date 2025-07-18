'use client'

import Layout from '@cluesurf/leaf/component/Layout'
import TermsOfServicePage from '@cluesurf/leaf/component/page/TermsOfServicePage'
import Environment from '~/lib/frontend/components/Environment'

export default function Page() {
  return (
    <Environment>
      <Layout>
        <TermsOfServicePage title="züs" />
      </Layout>
    </Environment>
  )
}
