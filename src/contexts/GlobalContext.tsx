'use client'

import { createContext, useContext, ReactNode, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import type { Sort, SortField } from '@/types/github'
import { useRouter } from 'next/navigation'
import type { GlobalContextType } from '@/types/context'

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

interface GlobalProviderProps {
  children: ReactNode
  defaultSort: Sort
  defaultQuery?: string
  defaultTotalCount?: number
}

export function GlobalProvider({ 
  children, 
  defaultSort,
}: GlobalProviderProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [clientSort, setClientSort] = useState<Sort>()
  const [totalCount, setTotalCount] = useState<number>()

  const value = {
    query: searchParams.get('q') || '',
    page: Number(searchParams.get('page')) || 1,
    sort: {
      field: (searchParams.get('sort') || defaultSort.field) as SortField,
      direction: (searchParams.get('order') as 'asc' | 'desc') || defaultSort.direction,
      label: defaultSort.label
    },
    clientSort,
    totalCount,
    setClientSort,
    setTotalCount,
    setPage: (page: number) => {
      const params = new URLSearchParams(searchParams)
      if (page > 1) params.set('page', page.toString())
      else params.delete('page')
      router.replace(`/?${params.toString()}`)
    },
    setQuery: (query: string) => {
      const params = new URLSearchParams(searchParams)

      const currentQuery = params.get('q')

      if (currentQuery !== query) {
        params.delete('page')
      }

      if (query) params.set('q', query)
      else params.delete('q')
      router.replace(`/?${params.toString()}`)
    },
    setSort: (sort: Sort) => {
      const params = new URLSearchParams(searchParams)

      const currentSort = params.get('sort')
      const currentOrder = params.get('order')

      if (currentSort !== sort.field || currentOrder !== sort.direction) {
        params.delete('page')
      }
      
      params.set('sort', sort.field)
      params.set('order', sort.direction)
      router.replace(`/?${params.toString()}`)
      setClientSort(undefined)
    },
    clear: () => {
      router.replace('/?')
    }
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalContext must be used within GlobalProvider')
  }
  return context
} 