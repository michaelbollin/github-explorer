import type { Sort } from '@/types/github'

export const GITHUB_API_URL = 'https://api.github.com'

export const SEARCH_CONFIG = {
  MIN_CHARS: 3,
  DEBOUNCE_DELAY: 300,
  MAX_RESULTS: 50,
  MAX_TOTAL_COUNT: 4000,
} as const

export const SERVER_SORT_OPTIONS: Sort[] = [
  { label: 'Most Popular', field: 'stars', direction: 'desc' },
  { label: 'Least Popular', field: 'stars', direction: 'asc' },
  { label: 'Recently Updated', field: 'updated', direction: 'desc' },
  { label: 'Oldest Updated', field: 'updated', direction: 'asc' },
]

export const DEFAULT_SERVER_SORT = SERVER_SORT_OPTIONS[0]

export const QUERY_CONFIG = {
  STALE_TIME: 1000 * 60 * 5,
  RETRY_COUNT: 1,
} as const

export const API_ENDPOINTS = {
  SEARCH_REPOSITORIES: `${GITHUB_API_URL}/search/repositories`,
} as const 