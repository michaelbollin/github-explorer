import type { ReactNode } from 'react'
import type { ClientSortField } from './github'

export interface TableProps {
  children: ReactNode
}

export interface TableHeadProps {
  children: React.ReactNode
  total?: number
  className?: string
  sortField?: ClientSortField
  sortDirection?: 'asc' | 'desc'
  onSort?: (field: ClientSortField) => void
  clientSortField?: ClientSortField
  clientSortDirection?: 'asc' | 'desc'
  onClientSort?: (field: ClientSortField) => void
}

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode
  className?: string
} 