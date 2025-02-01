import { API_ENDPOINTS, SEARCH_CONFIG } from '@/config/constants'
import type { SearchResponse, OrderOption } from '@/types/github'

export async function searchRepositories(query: string, order: OrderOption) {
  const response = await fetch(
    `${API_ENDPOINTS.SEARCH_REPOSITORIES}?q=${encodeURIComponent(query)}&sort=${order.field}&order=${order.direction}&per_page=${SEARCH_CONFIG.MAX_RESULTS}`,
    {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch repositories')
  }

  return response.json()
} 