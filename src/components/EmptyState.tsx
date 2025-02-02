import { SearchIcon } from '@/components/icons/search-icon'

interface EmptyStateProps {
  type: 'initial' | 'no-results'
  searchTerm?: string
}

export function EmptyState({ type, searchTerm }: EmptyStateProps) {
  if (type === 'initial') {
    return (
      <div className="text-center py-12">
        <h3 className="mt-2 text-sm font-semibold text-gray-900">Let's go!</h3>
        <p className="mt-1 text-sm text-gray-500">Start by searching for GitHub repositories above.<br />You can use <span className="font-medium">⌘K</span> to search for repositories.</p>
      </div>
    )
  }

  return (
    <div className="text-center py-12">
      <h3 className="mt-2 text-sm font-semibold text-gray-900">No repositories found</h3>
      <p className="mt-1 text-sm text-gray-500">
        No results found for "<span className="font-medium">{searchTerm}</span>".
        <br />Try adjusting your search term.
      </p>
    </div>
  )
} 