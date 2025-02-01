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
  sortField,
  sortDirection,
  onSort,
  clientSortField,
  clientSortDirection,
  onClientSort,
  ...props 
}: TableHeadProps) {
  const shouldShowSort = total !== undefined && total <= SEARCH_CONFIG.MAX_RESULTS
  const isCurrentField = clientSortField === sortField

  return (
    <th 
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      {...props}
    >
      <div 
        className="flex items-center gap-1 cursor-pointer" 
        onClick={() => onClientSort?.(sortField!)}
      >
        {children}
        {shouldShowSort && (
          <>
            <ChevronUpIcon 
              className={`w-5 h-5 ${
                isCurrentField && clientSortDirection === 'asc' 
                  ? 'text-black scale-110' 
                  : 'text-gray-200'
              }`}
              aria-label="sort ascending"
            />
            <ChevronDownIcon 
              className={`w-5 h-5 ${
                isCurrentField && clientSortDirection === 'desc' 
                  ? 'text-black scale-110' 
                  : 'text-gray-200'
              }`}
              aria-label="sort descending"
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