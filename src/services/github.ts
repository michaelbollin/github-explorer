import { API_ENDPOINTS, SEARCH_CONFIG } from '@/config/constants';
import type { Sort } from '@/types/github';

export async function searchRepositories(
  query: string,
  sort: Sort,
  page: number,
) {
  const response = await fetch(
    `${API_ENDPOINTS.SEARCH_REPOSITORIES}?q=${encodeURIComponent(query)}&sort=${sort.field}&order=${sort.direction}&per_page=${SEARCH_CONFIG.MAX_RESULTS}&page=${page}`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }

  return response.json();
}
