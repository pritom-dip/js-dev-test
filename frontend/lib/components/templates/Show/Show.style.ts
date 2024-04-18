import styled from 'styled-components'

export const ShowCard = styled.div<{ soldOut: boolean }>`
  border: 1px solid #ccc;
  border-radius: 1em;
  opacity: ${props => (props.soldOut ? 0.3 : 1)};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const ShowContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  margin-top: 1em;
  justify-content: space-between;
  height: 100%;
`

export const ShowImage = styled.img`
  width: 100%;
  height: auto;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: center;
  padding: 0 0.5em;
`

export const ShowTitle = styled.h3``
export const ShortTitle = styled.p``

export const BookButton = styled.button<{ soldOut: boolean }>`
  width: 100%;
  padding: 1em;
  background-color: ${props => (props.soldOut ? 'transparent' : '#ff4500')};
  color: ${props => (props.soldOut ? '#000' : '#fff')};
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  cursor: ${props => (props.soldOut ? 'default' : 'pointer')};
  font-size: 1em;
  border-color: transparent;
`
