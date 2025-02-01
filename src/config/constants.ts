export const GITHUB_API_URL = 'https://api.github.com'

export const SEARCH_CONFIG = {
  MIN_CHARS: 3,
  DEBOUNCE_DELAY: 300,
  MAX_RESULTS: 50,
  MAX_TOTAL_COUNT: 4000,
} as const

export const QUERY_CONFIG = {
  STALE_TIME: 1000 * 60 * 5, // 5 minutes
  RETRY_COUNT: 1,
} as const

export const API_ENDPOINTS = {
  SEARCH_REPOSITORIES: `${GITHUB_API_URL}/search/repositories`,
} as const 