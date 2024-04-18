'use client'

import Shows from '@/components/templates/Shows'
import styled from 'styled-components'
import Loader from '@/components/shared/Loader'
import { useShows } from '@/queries/shows'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1em;
  margin: 1em;
`
const Title = styled.h2``

export default function Home() {
  const { isLoading, error, data } = useShows()

  if (isLoading) return <Loader />
  if (error) return <h2>Something went wrong.</h2>

  return (
    <Wrapper>
      <Title>Today&apos;s Deal</Title>
      <Shows shows={data} />
    </Wrapper>
  )
}
