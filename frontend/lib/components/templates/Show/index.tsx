import getBookingLink from '@/utils/getBookingLink'
import {
  BookButton,
  Content,
  ShortTitle,
  ShowCard,
  ShowContent,
  ShowImage,
  ShowTitle
} from './Show.style'
import { IShow } from '@/types/show'

interface IProps {
  show: IShow
}

const Show = ({ show }: IProps) => {
  const ticketsUrlLength = show?.see_tickets_url_infos.length || 0
  const goToBooking = () => {
    const link = getBookingLink(show?.see_tickets_url_infos)
    if (!link) return
    window.location.href = link
  }

  return (
    <ShowCard onClick={goToBooking} soldOut={ticketsUrlLength === 0}>
      <ShowImage src={show?.image} alt={show?.title} />
      <ShowContent>
        <Content>
          <ShowTitle>{show?.title}</ShowTitle>
          <ShortTitle>{show?.excerpt}</ShortTitle>
        </Content>

        <BookButton soldOut={ticketsUrlLength === 0}>
          {ticketsUrlLength > 0 ? 'Book Now' : 'SOLD OUT'}
        </BookButton>
      </ShowContent>
    </ShowCard>
  )
}

export default Show
