import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_QUERY_PATH } from '~/lib/shared/utilities/host'

const queries = createApi({
  reducerPath: 'pages', // The key in the Redux store
  baseQuery: fetchBaseQuery({ baseUrl: BASE_QUERY_PATH }),
  endpoints: builder => ({}),
})

export const mappings = {
  getPage: queries,
  updateDraft: queries,
  createLanguageDraft: queries,
  publishLanguageDraft: queries,
  unpublishLanguagePage: queries,
  deletePage: queries,
  undeletePage: queries,
}

export default queries
