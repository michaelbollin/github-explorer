'use client'

import { useState, useEffect, useRef } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { SearchInput } from '@/components/ui/search-input'
import { SERVER_SORT_OPTIONS } from '@/config/constants'
import { SEARCH_CONFIG } from '@/config/constants'
import { InfoIcon } from '@/components/icons/info-icon'
import { Tooltip } from '@/components/ui/tooltip'
import { useSearchKeyboard } from '@/hooks/useKeyboardNavigation'
import { useGlobalContext } from '@/contexts/GlobalContext'

export function TopBar() {
  const { query, sort, totalCount, setQuery, setSort, clear } = useGlobalContext()
  const [searchInput, setSearchInput] = useState(query)
  const debouncedSearch = useDebounce(searchInput)
  const searchInputRef = useRef<HTMLInputElement>(null)

  console.log(totalCount,"totalCount")

  useEffect(() => {
    if (query !== searchInput) {
      setSearchInput(query)
    }
  }, [query])

  useEffect(() => {
    if (debouncedSearch.length >= 3 && debouncedSearch !== query) {
      setQuery(debouncedSearch)
    } else if (debouncedSearch.length === 0) {
      clear()
    }
  }, [debouncedSearch, query, setQuery, clear])

  useSearchKeyboard({
    onFocus: () => searchInputRef.current?.focus()
  })

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 max-w-[60%] md:max-w-lg relative">
            <label htmlFor="search" className="sr-only">
              Search repositories
            </label>
            <div className="flex items-center w-full">
              <div className="flex-1 min-w-0">
                <SearchInput
                  ref={searchInputRef}
                  id="search"
                  name="search"
                  placeholder="Search repositories... (⌘K)"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  aria-label="Search GitHub repositories"
                  role="searchbox"
                />
              </div>
              {totalCount != undefined && totalCount > SEARCH_CONFIG.MAX_TOTAL_COUNT && (
                <div className="flex-none w-8 flex items-center justify-center">
                  <Tooltip content={`GitHub returns only ${SEARCH_CONFIG.MAX_TOTAL_COUNT} elements, please narrow down your query`}>
                    <InfoIcon className="h-5 w-5 text-gray-400" />
                  </Tooltip>
                </div>
              )}
            </div>
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
                  const option = SERVER_SORT_OPTIONS[e.target.selectedIndex]
                  setSort(option)
                }}
                value={`${sort.field}-${sort.direction}`}
              >
                {SERVER_SORT_OPTIONS.map((option) => (
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