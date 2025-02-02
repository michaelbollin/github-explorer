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
    <div className="flex items-center justify-center gap-2 mt-4">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous page"
      >
        Previous
      </Button>
      <span className="text-sm">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
      >
        Next
      </Button>
    </div>
  )
} 