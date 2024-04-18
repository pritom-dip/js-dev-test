'use client'

import Shows from '@/components/templates/Shows'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1em;
  margin: 1em;
`
const Title = styled.h2``

const data = [
  {
    title: 'Come From Away',
    image:
      'http://res.cloudinary.com/solt/image/upload/v1645790496/Wicked_SOLT_1200x600_b13bfm.jpg',
    link: '/book-come-from-away'
  },
  {
    title: 'Mamma Mia!',
    image:
      'http://res.cloudinary.com/solt/image/upload/v1645790496/Wicked_SOLT_1200x600_b13bfm.jpg',
    link: '/book-mamma-mia'
  },
  {
    title: 'The Phantom Of The Opera',
    image:
      'http://res.cloudinary.com/solt/image/upload/v1645790496/Wicked_SOLT_1200x600_b13bfm.jpg',
    link: '/book-phantom-opera',
    soldOut: true
  },
  {
    title: 'The Woman In Black',
    image:
      'http://res.cloudinary.com/solt/image/upload/v1645790496/Wicked_SOLT_1200x600_b13bfm.jpg',
    link: '/book-woman-in-black'
  }
]

export default function Home() {
  return (
    <Wrapper>
      <Title>Today&apos;s Deal</Title>
      <Shows shows={data} />
    </Wrapper>
  )
}
