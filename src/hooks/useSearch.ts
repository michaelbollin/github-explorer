import { useSearchParams, useRouter } from 'next/navigation'
import { useCallback } from 'react'
import type { Sort } from '@/types/github'

export function useSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const setQuery = useCallback((query: string, order?: Sort, page?: number) => {
    const params = new URLSearchParams(searchParams)
    if (query) params.set('q', query)
    if (order) {
      params.set('sort', order.field)
      params.set('order', order.direction)
    }
    if (page) {
      params.set('page', page.toString())
    } else {
      params.delete('page')
    }
    router.push(`/?${params.toString()}`)
  }, [router, searchParams])

  const getQuery = (): string => {
    return searchParams.get('q') || ''
  }

  const getOrder = (): Sort | undefined => {
    const field = searchParams.get('sort')
    const direction = searchParams.get('order')
    return field && direction ? { field, direction } as Sort : undefined
  }

  const getPage = (): number => {
    return Number(searchParams.get('page')) || 1
  }

  return {
    q: getQuery(),
    order: getOrder(),
    page: getPage(),
    setQuery,
  }
} 