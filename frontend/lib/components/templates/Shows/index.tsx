import React from 'react'
import Show from '../Show'
import { Wrapper } from './Shows.style'
import { IShow } from '@/types/show'

interface IProps {
  shows: IShow[]
}

const Shows = ({ shows }: IProps) => {
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
