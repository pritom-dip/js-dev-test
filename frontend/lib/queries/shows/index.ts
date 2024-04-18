import getAllShows from '@/services/shows'
import { useQuery } from '@tanstack/react-query'

export const getShowsKey = () => ['shows']

export const useShows = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: getShowsKey(),
    queryFn: getAllShows
  })
  return { isLoading, error, data }
}
