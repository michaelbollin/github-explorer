import type { TableProps, TableHeadProps, TableCellProps } from '@/types/table'

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

export function TableHead({ children, className = '', ...props }: TableHeadProps) {
  return (
    <th
      className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}
      {...props}
    >
      {children}
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