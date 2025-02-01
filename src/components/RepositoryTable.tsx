import type { Repository } from '@/types/github'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import type { RepositoryTableProps } from '@/types/components'
import { Pagination } from '@/components/ui/pagination'
import { SEARCH_CONFIG } from '@/config/constants'

export function RepositoryTable({ 
  repositories, 
  total, 
  onClientSort, 
  clientSortField,
  clientSortDirection,
  sortField,
  sortDirection,
  currentPage,
  onPageChange
}: RepositoryTableProps) {
  const effectiveTotal = Math.min(total, SEARCH_CONFIG.MAX_TOTAL_COUNT); // total_count or 4000
  const totalPages = Math.ceil(effectiveTotal / SEARCH_CONFIG.MAX_RESULTS);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead 
              total={total} 
              sortField="name"
              sortDirection={sortField === 'name' ? sortDirection : undefined}
              clientSortField={clientSortField}
              clientSortDirection={clientSortDirection}
              onClientSort={onClientSort}
            >
              Name
            </TableHead>
            <TableHead 
              className="hidden md:table-cell" 
              total={total}
              sortField="owner"
              sortDirection={sortField === 'owner' ? sortDirection : undefined}
              clientSortField={clientSortField}
              clientSortDirection={clientSortDirection}
              onClientSort={onClientSort}
            >
              Owner
            </TableHead>
            <TableHead 
              className="text-right md:text-left" 
              total={total}
              sortField="stars"
              clientSortField={clientSortField}
              clientSortDirection={clientSortDirection}
              onClientSort={onClientSort}
            >
              Stars
            </TableHead>
            <TableHead 
              className="hidden md:table-cell" 
              total={total}
              sortField="created"
              clientSortField={clientSortField}
              clientSortDirection={clientSortDirection}
              onClientSort={onClientSort}
            >
              Created
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {repositories.map((repo) => (
            <TableRow key={repo.id}>
              <TableCell>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  {repo.name}
                </a>
                <div className="md:hidden mt-1 text-gray-500 space-y-1">
                  <div>by {repo.owner.login}</div>
                  <div>{new Date(repo.created_at).toLocaleDateString()}</div>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell text-gray-900">
                {repo.owner.login}
              </TableCell>
              <TableCell className="text-right md:text-left text-gray-500 whitespace-nowrap">
                {repo.stargazers_count.toLocaleString()}
              </TableCell>
              <TableCell className="hidden md:table-cell text-gray-500 whitespace-nowrap">
                {new Date(repo.created_at).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {totalPages > 1 && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  )
} 