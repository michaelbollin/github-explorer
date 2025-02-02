import { TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
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
            <TableHead className="w-1/2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Repository
            </TableHead>
            <TableHead className="w-[15%] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Stars
            </TableHead>
            <TableHead className="w-[20%] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Language
            </TableHead>
            <TableHead className="w-[15%] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Updated
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(10)].map((_, i) => (
            <TableRow key={i}>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="truncate max-w-md">
                    <Skeleton className="h-4 w-48" aria-label="Loading name..." />
                  </div>
                </div>
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="truncate max-w-md">
                    <Skeleton className="h-4 w-12 ml-auto md:ml-0" aria-label="Loading stars..." />
                  </div>
                </div>
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="truncate max-w-md">
                    <Skeleton className="h-4 w-24" aria-label="Loading language..." />
                  </div>
                </div>
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="truncate max-w-md">
                    <Skeleton className="h-4 w-24" aria-label="Loading date..." />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </table>
    </div>
  )
} 