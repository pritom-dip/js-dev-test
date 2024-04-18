'use client'

import { useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClientConfig } from '@/queryClient'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1em;
  margin: 1em;
`
const Title = styled.h2``

const Providers = ({ children }: React.PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig))

  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <Title>Today&apos;s Deal</Title>
        {children}
      </Wrapper>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default Providers
