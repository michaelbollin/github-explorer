import { useQuery } from '@tanstack/react-query'
import { searchRepositories } from '@/services/github'
import type { SearchResponse, Sort } from '@/types/github'
import { QUERY_CONFIG, SEARCH_CONFIG } from '@/config/constants'

export function useRepositories(query: string, sort: Sort, page: number) {
  return useQuery<SearchResponse>({
    queryKey: ['repositories', query, sort, page],
    queryFn: () => searchRepositories(query, sort, page),
    enabled: query.length >= SEARCH_CONFIG.MIN_CHARS,
    staleTime: QUERY_CONFIG.STALE_TIME,
  })
} 