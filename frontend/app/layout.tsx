'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import styled from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1em;
  margin: 1em;
`
const Title = styled.h2``

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Wrapper>
          <Title>Today&apos;s Deal</Title>
          {children}
        </Wrapper>
      </body>
    </html>
  )
}
