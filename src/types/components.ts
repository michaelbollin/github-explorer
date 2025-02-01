import type { OrderOption } from './github'
import type { Repository } from './github'

export interface TopBarProps {
  onSearch: (query: string) => void
  onOrderChange: (option: OrderOption) => void
  initialOrder: OrderOption
}

export interface RepositoryTableProps {
  repositories: Repository[]
  total: number
}

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void
} 