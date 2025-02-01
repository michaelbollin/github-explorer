'use client'

import { useState, useEffect } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { SearchInput } from '@/components/ui/search-input'
import type { OrderOption } from '@/types/github'
import { useSearch } from '@/hooks/useSearch'
import type { TopBarProps } from '@/types/components'

const orderOptions: OrderOption[] = [
  { label: 'Most Popular', field: 'stars', direction: 'desc' },
  { label: 'Least Popular', field: 'stars', direction: 'asc' },
  { label: 'Recently Updated', field: 'updated', direction: 'desc' },
  { label: 'Oldest Updated', field: 'updated', direction: 'asc' },
]

export function TopBar({ onSearch, onOrderChange, initialOrder }: TopBarProps) {
  const { q } = useSearch()
  const [searchInput, setSearchInput] = useState(q)
  const debouncedSearch = useDebounce(searchInput)

  useEffect(() => {
    if (debouncedSearch.length >= 3) {
      onSearch(debouncedSearch)
    }
  }, [debouncedSearch, onSearch])

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 max-w-[60%] md:max-w-lg">
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
              role="searchbox"
            />
          </div>
          <div className="ml-2 md:ml-4 flex items-center">
            <div className="flex items-center">
              <label htmlFor="order" className="mr-2 text-sm text-gray-500 hidden md:inline">
                Show:
              </label>
              <select
                id="order"
                className="block w-32 md:w-48 pl-2 md:pl-3 pr-6 md:pr-10 py-2 text-xs md:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => {
                  const option = orderOptions[e.target.selectedIndex]
                  onOrderChange(option)
                }}
                value={`${initialOrder.field}-${initialOrder.direction}`}
              >
                {orderOptions.map((option) => (
                  <option key={`${option.field}-${option.direction}`} value={`${option.field}-${option.direction}`}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 