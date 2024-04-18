export interface IShow {
  id: string
  image: string
  title: string
  excerpt: string
  see_tickets_url_infos: IUrlInfos[]
}

export interface IUrlInfos {
  url_type: string
  url: string
  hash: string
}
