import { useQuery } from '@tanstack/react-query'
import { searchRepositories } from '@/services/github'
import type { SearchResponse, OrderOption } from '@/types/github'
import { QUERY_CONFIG, SEARCH_CONFIG } from '@/config/constants'

export function useRepositories(query: string, order: OrderOption) {
  return useQuery<SearchResponse>({
    queryKey: ['repositories', query, order],
    queryFn: () => searchRepositories(query, order),
    enabled: query.length >= SEARCH_CONFIG.MIN_CHARS,
    staleTime: QUERY_CONFIG.STALE_TIME,
  })
} 