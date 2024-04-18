import { IUrlInfos } from '@/types/show'

const getBookingLink = (urls: IUrlInfos[]) => {
  const preferredUrl = urls.find((urlInfo: IUrlInfos) =>
    urlInfo.url.includes('tktsonline.seetickets.com')
  )

  if (preferredUrl) return preferredUrl.url

  const fallbackUrl = urls.find((urlInfo: IUrlInfos) =>
    urlInfo.url.includes('officiallondontheatre.seetickets.com')
  )
  return fallbackUrl ? fallbackUrl.url : null
}

export default getBookingLink
