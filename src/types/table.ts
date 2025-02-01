import type { ReactNode } from 'react'

export interface TableProps {
  children: ReactNode
}

export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode
  className?: string
}

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode
  className?: string
} 