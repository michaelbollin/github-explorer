import type { ReactNode } from 'react'

export interface TableProps {
  children: ReactNode
}

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode
  className?: string
} 