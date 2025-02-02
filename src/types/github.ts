export interface Repository {
  id: number
  name: string
  owner: {
    login: string
  }
  html_url: string
  stargazers_count: number
  created_at: string
  updated: string
}

export interface SearchResponse {
  total_count: number
  items: Repository[]
}


export type ServerSortField = 'stars' | 'updated'
export type SortDirection = 'asc' | 'desc'

export interface ServerSort {
  field: ServerSortField
  direction: SortDirection
  label: string
}

export type ClientSortField = 'name' | 'owner' | 'stars' | 'created'

export interface ClientSort {
  field: ClientSortField
  direction: SortDirection
}

export type SortField = ServerSortField | ClientSortField

export interface Sort {
  field: SortField
  direction: SortDirection
  label: string
}