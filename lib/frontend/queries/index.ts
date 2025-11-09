import { combineReducers } from '@reduxjs/toolkit'
import { QueryKey } from '~/lib/frontend/services/redux'
import pages, { mappings as pageMappings } from './pages'

const queries = {
  reducer: combineReducers({
    [pages.reducerPath]: pages.reducer,
  }),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(pages.middleware),
}

// Combine all endpoints into a single type
export type Queries = typeof pages

// Combine all endpoints from all APIs
export const endpoints = {
  ...pages.endpoints,
  // Add other APIs here
}

export const mappings: Record<QueryKey, typeof pages> = {
  ...pageMappings,
}

export default queries
