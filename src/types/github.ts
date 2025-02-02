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

export type OrderField = 'stars' | 'updated'
export type OrderDirection = 'asc' | 'desc'

export interface OrderOption {
  label: string
  field: OrderField
  direction: OrderDirection
}

export type ClientSortField = 'name' | 'owner' | 'stars' | 'created'

export interface ClientSort {
  field: ClientSortField
  direction: 'asc' | 'desc'
}

export type SortField = 'stars' | 'updated' | 'name' | 'owner' | 'created'
export type SortDirection = 'asc' | 'desc'

export interface Sort {
  field: SortField
  direction: SortDirection
  label: string
} 