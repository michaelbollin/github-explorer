export interface PaginationKeyboardProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
  }
  
export interface SearchKeyboardProps {
    onFocus: () => void
  }