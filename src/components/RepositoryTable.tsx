import type { Repository, SortField } from '@/types/github'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { Pagination } from '@/components/ui/pagination'
import { SEARCH_CONFIG } from '@/config/constants'
import { useGlobalContext } from '@/contexts/GlobalContext'

export function RepositoryTable({ 
  repositories, 
  total
}: { 
  repositories: Repository[]
  total: number 
}) {
  const { page, clientSort, setClientSort, setPage } = useGlobalContext()

  const handleClientSort = (field: SortField) => {
    setClientSort({
      field,
      direction: clientSort?.field === field && clientSort.direction === 'desc' ? 'asc' : 'desc',
      label: field
    })
  }

  const effectiveTotal = Math.min(total, SEARCH_CONFIG.MAX_TOTAL_COUNT)
  const totalPages = Math.ceil(effectiveTotal / SEARCH_CONFIG.MAX_RESULTS)

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead 
              total={total} 
              sortField="name"
              sortDirection={clientSort?.field === 'name' ? clientSort.direction : undefined}
              clientSortField={clientSort?.field}
              clientSortDirection={clientSort?.direction}
              onClientSort={handleClientSort}
            >
              Name
            </TableHead>
            <TableHead 
              className="hidden md:table-cell" 
              total={total}
              sortField="owner"
              sortDirection={clientSort?.field === 'owner' ? clientSort.direction : undefined}
              clientSortField={clientSort?.field}
              clientSortDirection={clientSort?.direction}
              onClientSort={handleClientSort}
            >
              Owner
            </TableHead>
            <TableHead 
              className="text-right md:text-left" 
              total={total}
              sortField="stars"
              clientSortField={clientSort?.field}
              clientSortDirection={clientSort?.direction}
              onClientSort={handleClientSort}
            >
              Stars
            </TableHead>
            <TableHead 
              className="hidden md:table-cell" 
              total={total}
              sortField="created"
              clientSortField={clientSort?.field}
              clientSortDirection={clientSort?.direction}
              onClientSort={handleClientSort}
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
          currentPage={page} 
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  )
} 