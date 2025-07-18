'use client'

import Layout from '@cluesurf/leaf/component/Layout'
import PrivacyPolicyPage from '@cluesurf/leaf/component/page/PrivacyPolicyPage'
import Environment from '~/lib/frontend/components/Environment'

export default function Page() {
  return (
    <Environment>
      <Layout>
        <PrivacyPolicyPage title="züs" />
      </Layout>
    </Environment>
  )
}
