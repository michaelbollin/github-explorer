interface EmptyStateProps {
  type: 'initial' | 'no-results'
  searchTerm?: string
}

export function EmptyState({ type, searchTerm }: EmptyStateProps) {
  if (type === 'initial') {
    return (
      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-900">
          Start by searching for repositories you&apos;re interested in
        </h2>
      </div>
    )
  }

  return (
    <div className="text-center">
      <h2 className="text-lg font-semibold text-gray-900">
        No repositories found for &ldquo;{searchTerm}&rdquo;
      </h2>
    </div>
  )
} 