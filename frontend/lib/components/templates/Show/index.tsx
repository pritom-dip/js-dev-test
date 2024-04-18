import {
  BookButton,
  Content,
  ShortTitle,
  ShowCard,
  ShowContent,
  ShowImage,
  ShowTitle
} from './Show.style'

const Show = ({ show }: any) => {
  return (
    <ShowCard soldOut={false}>
      <ShowImage src={show?.image} alt={show?.title} />
      <ShowContent>
        <Content>
          <ShowTitle>{show?.title}</ShowTitle>
          <ShortTitle>{show?.excerpt}</ShortTitle>
        </Content>

        <BookButton soldOut={false}>Book Now</BookButton>
      </ShowContent>
    </ShowCard>
  )
}

export default Show
