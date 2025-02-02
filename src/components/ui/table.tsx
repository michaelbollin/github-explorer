import type { TableProps, TableCellProps } from '@/types/table'
import { ChevronDownIcon, ChevronUpIcon } from '@/components/icons/sort-icons'
import { useGlobalContext } from '@/contexts/GlobalContext'
import type { ClientSortField } from '@/types/github'
import { SEARCH_CONFIG } from '@/config/constants'

export function Table({ children }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200" role="table">{children}</table>
    </div>
  )
}

export function TableHeader({ children }: TableProps) {
  return <thead className="bg-gray-50">{children}</thead>
}

export function TableBody({ children }: TableProps) {
  return <tbody role="rowgroup" className="bg-white divide-y divide-gray-200">{children}</tbody>
}

export function TableRow({ children }: TableProps) {
  return <tr role="row" className="hover:bg-gray-50">{children}</tr>
}

export function TableHead({ 
  children, 
  className = '',
  sortField,
  ...props 
}: {
  children: React.ReactNode
  className?: string
  sortField?: ClientSortField
}) {
  const { clientSort, setClientSort, totalCount } = useGlobalContext()
  const isCurrentField = clientSort?.field === sortField
  const canSort = totalCount !== undefined && totalCount <= SEARCH_CONFIG.MAX_RESULTS

  const handleSort = (direction: 'asc' | 'desc') => {
    if (!sortField) return
    setClientSort({
      field: sortField,
      direction,
      label: sortField
    })
  }

  return (
    <th 
      className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}
      {...props}
    >
      {sortField && canSort ? (
        <div className="flex items-center gap-1 group">
          <span>{children}</span>
          <div className="flex">
            <button
              onClick={() => handleSort('asc')}
              aria-label="Sort ascending"
              className="line-height-0"
            >
              <ChevronUpIcon 
                className={`w-5 h-5 cursor-pointer ${
                  isCurrentField && clientSort?.direction === 'asc' 
                    ? 'text-gray-900' 
                    : 'text-gray-400 hover:text-gray-500'
                }`}
              />
            </button>
            <button
              onClick={() => handleSort('desc')}
              aria-label="Sort descending"
              className="line-height-0"
            >
              <ChevronDownIcon 
                className={`w-5 h-5 cursor-pointer ${
                  isCurrentField && clientSort?.direction === 'desc' 
                    ? 'text-gray-900' 
                    : 'text-gray-400 hover:text-gray-500'
                }`}
              />
            </button>
          </div>
        </div>
      ) : children}
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