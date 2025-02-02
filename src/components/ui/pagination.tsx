import type { PaginationProps } from '@/types/components'
import { usePaginationKeyboard } from '@/hooks/useKeyboardNavigation'
import { Button } from './button'

export function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: PaginationProps) {
  usePaginationKeyboard({ currentPage, totalPages, onPageChange })

  return (
    <nav aria-label="Pagination" role="navigation">
      <div className="flex items-center justify-center gap-2 mt-4">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          aria-label="Go to previous page"
          aria-disabled={currentPage <= 1}
        >
          Previous
        </Button>
        <span className="text-sm" aria-current="page">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Go to next page"
          aria-disabled={currentPage >= totalPages}
        >
          Next
        </Button>
      </div>
    </nav>
  )
} 