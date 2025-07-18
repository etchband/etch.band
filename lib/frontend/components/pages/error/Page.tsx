import Layout from '@cluesurf/leaf/component/Layout'
import BaseErrorPage, {
  ErrorPageInput,
} from '@cluesurf/leaf/component/page/ErrorPage'
import Environment from '~/lib/frontend/components/Environment'

export default function ErrorPage({ error, reset }: ErrorPageInput) {
  return (
    <Environment>
      <Layout
        left={<Layout.Side color="red" />}
        right={<Layout.Side color="red" />}
      >
        <BaseErrorPage
          error={error}
          reset={reset}
        />
      </Layout>
    </Environment>
  )
}
