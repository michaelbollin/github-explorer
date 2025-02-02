import { useEffect } from 'react'

interface PaginationKeyboardProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

interface SearchKeyboardProps {
  onFocus: () => void
}

export function usePaginationKeyboard({ currentPage, totalPages, onPageChange }: PaginationKeyboardProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      } // check if in inpput

      switch (e.key) {
        case 'ArrowLeft':
          if (currentPage > 1) {
            e.preventDefault()
            onPageChange(currentPage - 1)
          }
          break
        case 'ArrowRight':
          if (currentPage < totalPages) {
            e.preventDefault()
            onPageChange(currentPage + 1)
          }
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [currentPage, totalPages, onPageChange])
}

export function useSearchKeyboard({ onFocus }: SearchKeyboardProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        onFocus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onFocus])
} 