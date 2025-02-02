import type { Repository, ClientSortField } from '@/types/github'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { Pagination } from '@/components/ui/pagination'
import { SEARCH_CONFIG } from '@/config/constants'
import { useGlobalContext } from '@/contexts/GlobalContext'
import { useClientSort } from '@/hooks/useClientSort'

export function RepositoryTable({ 
  repositories, 
}: { 
  repositories: Repository[]
}) {
  const { page, setPage, totalCount, clientSort } = useGlobalContext()
  const effectiveTotal = Math.min(totalCount || 0, SEARCH_CONFIG.MAX_TOTAL_COUNT)
  const totalPages = Math.ceil(effectiveTotal / SEARCH_CONFIG.MAX_RESULTS)

  const sortedRepositories = useClientSort(repositories, clientSort)

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead sortField="name">Name</TableHead>
            <TableHead sortField="owner">Owner</TableHead>
            <TableHead sortField="stars" className="text-right">Stars</TableHead>
            <TableHead sortField="created">Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedRepositories.map((repo) => (
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