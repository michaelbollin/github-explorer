import { useQuery } from '@tanstack/react-query'
import { searchRepositories } from '@/services/github'
import type { SearchResponse, OrderOption } from '@/types/github'
import { QUERY_CONFIG, SEARCH_CONFIG } from '@/config/constants'

export function useRepositories(query: string, order: OrderOption, page: number) {
  return useQuery<SearchResponse>({
    queryKey: ['repositories', query, order, page],
    queryFn: () => searchRepositories(query, order, page),
    enabled: query.length >= SEARCH_CONFIG.MIN_CHARS,
    staleTime: QUERY_CONFIG.STALE_TIME,
  })
} 