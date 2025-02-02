import { API_ENDPOINTS, SEARCH_CONFIG } from '@/config/constants';
import type { Sort } from '@/types/github';

export async function searchRepositories(
  query: string,
  sort: Sort,
  page: number,
) {
  try {
    const response = await fetch(
      `${API_ENDPOINTS.SEARCH_REPOSITORIES}?q=${encodeURIComponent(query)}&sort=${sort.field}&order=${sort.direction}&per_page=${SEARCH_CONFIG.MAX_RESULTS}&page=${page}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      },
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to fetch repositories');
    }

    return response.json();
  } catch (error) {
    throw error instanceof Error 
      ? error 
      : new Error('An unexpected error occurred');
  }
}
