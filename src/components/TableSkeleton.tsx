import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'

export function TableSkeleton() {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table 
        className="min-w-full divide-y divide-gray-200"
        aria-busy="true" 
        aria-label="Loading repository data..."
      >
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Owner</TableHead>
            <TableHead className="text-right md:text-left">Stars</TableHead>
            <TableHead className="hidden md:table-cell">Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(10)].map((_, i) => (
            <TableRow key={i}>
              <TableCell aria-busy="true">
                <Skeleton className="h-4 w-48" aria-label="Loading name..." />
                <div className="md:hidden mt-1 space-y-1">
                  <Skeleton className="h-3 w-24" aria-label="Loading owner..." />
                  <Skeleton className="h-3 w-32" aria-label="Loading date..." />
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell" aria-busy="true">
                <Skeleton className="h-4 w-24" aria-label="Loading owner..." />
              </TableCell>
              <TableCell className="text-right md:text-left" aria-busy="true">
                <Skeleton className="h-4 w-12 ml-auto md:ml-0" aria-label="Loading stars..." />
              </TableCell>
              <TableCell className="hidden md:table-cell" aria-busy="true">
                <Skeleton className="h-4 w-24" aria-label="Loading date..." />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </table>
    </div>
  )
} 