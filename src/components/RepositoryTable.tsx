import type { Repository } from '@/types/github'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import type { RepositoryTableProps } from '@/types/components'

export function RepositoryTable({ repositories, total, onSort, sortField, sortDirection, onClientSort, clientSortField, clientSortDirection }: RepositoryTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead 
            total={total} 
            sortField="name"
            sortDirection={sortField === 'name' ? sortDirection : undefined}
            onSort={onSort}
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
            onSort={onSort}
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
  )
} 