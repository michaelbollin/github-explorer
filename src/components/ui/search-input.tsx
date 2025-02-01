'use client'

import { SearchIcon } from '@/components/icons/search-icon'
import type { SearchInputProps } from '@/types/components'

export function SearchInput({ className = '', ...props }: SearchInputProps) {
  return (
    <div className="relative w-full">
      <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <input
        type="search"
        className={`block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${className}`}
        {...props}
      />
    </div>
  )
} 