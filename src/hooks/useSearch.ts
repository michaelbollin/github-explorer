import { useSearchParams, useRouter } from 'next/navigation'
import { useCallback } from 'react'

export function useSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const setSearch = useCallback((query: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('q', query)
    router.push(`/?${params.toString()}`)
  }, [router, searchParams])

  const getSearch = (): string => {
    return searchParams.get('q') || ''
  }

  return {
    search: getSearch(),
    setSearch,
  }
} 