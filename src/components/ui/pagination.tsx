import type { PaginationProps } from '@/types/components'
import { usePaginationKeyboard } from '@/hooks/useKeyboardNavigation'

export function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: PaginationProps) {
  usePaginationKeyboard({ currentPage, totalPages, onPageChange })

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-3 py-1 rounded border disabled:opacity-50"
        aria-label="Previous page"
      >
        Previous
      </button>
      <span className="text-sm">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-3 py-1 rounded border disabled:opacity-50"
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  )
} 