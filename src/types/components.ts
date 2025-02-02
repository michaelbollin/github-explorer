import type { Sort, Repository } from './github'

export interface TopBarProps {
  onSearch: (query: string) => void
  onOrderChange: (order: Sort) => void
  initialOrder: Sort
  totalCount?: number
}

export interface RepositoryTableProps {
  repositories: Repository[]
  total: number
}

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
} 