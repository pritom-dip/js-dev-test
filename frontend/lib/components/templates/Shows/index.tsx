import React from 'react'
import Show from '../Show'
import { Wrapper } from './Shows.style'

const Shows = ({ shows }: any) => {
  return (
    <>
      <Wrapper>
        {shows.length > 0 &&
          shows?.map((show: any) => <Show key={show.id} show={show} />)}
      </Wrapper>
    </>
  )
}

export default Shows
