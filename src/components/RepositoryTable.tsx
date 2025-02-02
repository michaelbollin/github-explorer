import type { Repository } from '@/types/github'
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
      <Table aria-label="GitHub repositories">
        <TableHeader>
          <TableRow>
            <TableHead 
              sortField="name"
              aria-sort={clientSort?.field === 'name' ? clientSort.direction : 'none'}
              aria-label="Repository name column"
            >
              Name
            </TableHead>
            <TableHead className="w-[15%]" sortField="owner">Owner</TableHead>
            <TableHead className="w-[20%]" sortField="stars">Stars</TableHead>
            <TableHead className="w-[15%]" sortField="created">Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedRepositories.map((repo, index) => (
            <TableRow key={repo.id} aria-rowindex={index + 1}>
              <TableCell>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                  aria-label={`${repo.name} repository`}
                >
                  {repo.name}
                </a>
              </TableCell>
              <TableCell>
                {repo.owner.login}
              </TableCell>
              <TableCell>
                {repo.stargazers_count.toLocaleString()}
              </TableCell>
              <TableCell>
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