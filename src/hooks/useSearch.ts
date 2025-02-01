import { useSearchParams, useRouter } from 'next/navigation'
import { useCallback } from 'react'
import type { OrderOption } from '@/types/github'

export function useSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const setQuery = useCallback((query: string, order?: OrderOption) => {
    const params = new URLSearchParams(searchParams)
    if (query) params.set('q', query)
    if (order) {
      params.set('sort', order.field)
      params.set('order', order.direction)
    }
    router.push(`/?${params.toString()}`)
  }, [router, searchParams])

  const getQuery = (): string => {
    return searchParams.get('q') || ''
  }

  const getOrder = (): OrderOption | undefined => {
    const field = searchParams.get('sort')
    const direction = searchParams.get('order')
    return field && direction ? { field, direction } as OrderOption : undefined
  }

  return {
    q: getQuery(),
    order: getOrder(),
    setQuery,
  }
} 