import type { TableProps, TableHeadProps, TableCellProps } from '@/types/table'
import { ChevronDownIcon, ChevronUpIcon } from '@/components/icons/sort-icons'
import { SEARCH_CONFIG } from '@/config/constants'

export function Table({ children }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">{children}</table>
    </div>
  )
}

export function TableHeader({ children }: TableProps) {
  return <thead className="bg-gray-50">{children}</thead>
}

export function TableBody({ children }: TableProps) {
  return <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
}

export function TableRow({ children }: TableProps) {
  return <tr className="hover:bg-gray-50">{children}</tr>
}

export function TableHead({ 
  children, 
  className,
  total,
  ...props 
}: { 
  children: React.ReactNode
  total?: number
  className?: string
}) {
  const shouldShowSort = total !== undefined && total <= SEARCH_CONFIG.MAX_RESULTS

  return (
    <th 
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      {...props}
    >
      <div className="flex items-center gap-1">
        {children}
        {shouldShowSort && (
          <>
            <ChevronUpIcon 
              className="w-4 h-4 text-gray-400" 
              aria-label="sort"
            />
            <ChevronDownIcon 
              className="w-4 h-4 text-gray-400" 
              aria-label="sort"
            />
          </>
        )}
      </div>
    </th>
  )
}

export function TableCell({ children, className = '', ...props }: TableCellProps) {
  return (
    <td className={`px-6 py-4 text-sm ${className}`} {...props}>
      {children}
    </td>
  )
} 