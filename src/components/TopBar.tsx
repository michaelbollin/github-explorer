'use client'

import { useState, useEffect } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { SearchInput } from '@/components/ui/search-input'
import { useSearch } from '@/hooks/useSearch'

interface TopBarProps {
  onSearch: (query: string) => void
}

export function TopBar({ onSearch }: TopBarProps) {
  const { search: initialSearch } = useSearch()
  const [searchInput, setSearchInput] = useState(initialSearch)
  const debouncedSearch = useDebounce(searchInput, 300)

  useEffect(() => {
    if (debouncedSearch.length >= 3) {
      onSearch(debouncedSearch)
    }
  }, [debouncedSearch, onSearch])

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex-1">
            <div className="max-w-lg">
              <label htmlFor="search" className="sr-only">
                Search repositories
              </label>
              <SearchInput
                id="search"
                name="search"
                placeholder="Search repositories..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                aria-label="Search GitHub repositories"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 