import type { OrderOption } from './github'
import type { Repository } from './github'
import type { ClientSortField } from './github'

export interface TopBarProps {
  onSearch: (query: string) => void
  onOrderChange: (option: OrderOption) => void
  initialOrder: OrderOption
  totalCount?: number
}

export interface RepositoryTableProps {
  repositories: Repository[]
  total: number
  sortField?: string
  sortDirection?: 'asc' | 'desc'
  onSort?: (field: string) => void
  clientSortField?: ClientSortField
  clientSortDirection?: 'asc' | 'desc'
  onClientSort?: (field: ClientSortField) => void
  currentPage: number
  onPageChange: (page: number) => void
}

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
} 