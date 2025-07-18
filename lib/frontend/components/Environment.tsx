'use client'

import Provider from '@cluesurf/leaf/component/provider'
import {
  Base,
  PageSettingsInitializer,
  QueryResolvers,
} from '@cluesurf/leaf/hook/usePageSettings'
import { useLayoutEffect } from 'react'
import { mappings } from '~/lib/frontend/queries'
import store, { Queries } from '~/lib/frontend/services/redux'
import { FONT, SCRIPT } from '~/lib/shared/constants/fonts'

const settings = { fonts: FONT, scripts: SCRIPT }

export default function Environment({
  children,
  initializers,
  path,
  cached,
  base,
  queryResolvers,
  onInitializePageSettings,
}: {
  children: React.ReactNode
  initializers?: Queries
  cached?: Base
  base?: Base
  path?: string
  queryResolvers?: QueryResolvers
  onInitializePageSettings?: PageSettingsInitializer
}) {
  useLayoutEffect(() => {
    if (initializers) {
      for (const queryKey in initializers) {
        const state = initializers[queryKey]
        const mapping = mappings[queryKey]

        if (state && mapping) {
          store.dispatch(
            mapping.util.upsertQueryData(queryKey, undefined, state),
          )
        }
      }
    }
  }, [initializers])

  return (
    <Provider
      store={store}
      settings={settings}
      base={base}
      cached={cached}
      path={path}
      queryResolvers={queryResolvers}
      onInitializePageSettings={onInitializePageSettings}
    >
      {children}
    </Provider>
  )
}
