import type { TableProps, TableHeadProps, TableCellProps } from '@/types/table'
import { ChevronDownIcon, ChevronUpIcon } from '@/components/icons/sort-icons'
import { useGlobalContext } from '@/contexts/GlobalContext'
import type { ClientSortField } from '@/types/github'
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

  return (
    <th 
      className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}
      {...props}
    >
      {sortField && canSort ? (
        <div 
          className="flex items-center gap-1 cursor-pointer hover:text-gray-700 group" 
          onClick={() => setClientSort({
            field: sortField,
            direction: isCurrentField && clientSort?.direction === 'desc' ? 'asc' : 'desc',
            label: sortField
          })}
        >
          {children}
          <ChevronUpIcon 
            className={`w-5 h-5 ${
              isCurrentField && clientSort?.direction === 'asc' 
                ? 'text-gray-900' 
                : 'text-gray-400 group-hover:text-gray-500'
            }`}
          />
          <ChevronDownIcon 
            className={`w-5 h-5 ${
              isCurrentField && clientSort?.direction === 'desc' 
                ? 'text-gray-900' 
                : 'text-gray-400 group-hover:text-gray-500'
            }`}
          />
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