import { useQuery } from '@tanstack/react-query'
import { searchRepositories } from '@/services/github'
import type { SearchResponse, Sort } from '@/types/github'
import { useToast } from '@/contexts/ToastContext'

export function useRepositories(query: string, sort: Sort, page: number) {
  const { showError } = useToast()

  return useQuery<SearchResponse>({
    queryKey: ['repos', query, sort, page],
    queryFn: async () => {
      try {
        return await searchRepositories(query, sort, page)
      } catch (error) {
        showError(error instanceof Error ? error.message : 'An unexpected error occurred')
        throw error
      }
    },
    enabled: Boolean(query)
  })
} 