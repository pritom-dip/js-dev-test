'use client'

import Shows from '@/components/templates/Shows'
import { IShow } from '@/types/show'
import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1em;
  margin: 1em;
`
const Title = styled.h2``

const getAllShows = async () => {
  const response = await fetch('http://localhost:4000/api/v1/shows')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export default function Home() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['shows'],
    queryFn: getAllShows
  })

  if (isLoading) return <h3>Loading......</h3>
  if (error) return <h2>Something went wrong.</h2>

  return (
    <Wrapper>
      <Title>Today&apos;s Deal</Title>
      <Shows shows={data} />
    </Wrapper>
  )
}
