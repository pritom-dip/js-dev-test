import { cache } from 'react'
import { QueryClient } from '@tanstack/react-query'

const STALE_TIME = 5 * 60 * 1000 // 5 minutes

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: STALE_TIME
    }
  }
}

export const getQueryClient = cache(() => new QueryClient(queryClientConfig))
