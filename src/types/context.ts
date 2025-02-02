import type { Sort } from './github'

export interface GlobalContextType {
  query: string
  page: number
  sort: Sort 
  clientSort?: Sort
  totalCount?: number
  setClientSort: (sort: Sort) => void
  setPage: (page: number) => void
  setQuery: (query: string) => void
  setSort: (sort: Sort) => void
  setTotalCount: (count: number) => void
} 