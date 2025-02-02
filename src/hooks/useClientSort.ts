import { useMemo } from 'react'
import type { Repository, Sort } from '@/types/github'

export function useClientSort(repositories: Repository[], sort?: Sort) {
  return useMemo(() => {
    if (!sort) return repositories;

    return [...repositories].sort((a, b) => {
      const direction = sort.direction === 'asc' ? 1 : -1;
      
      switch (sort.field) {
        case 'name':
          return direction * a.name.localeCompare(b.name);
        case 'owner':
          return direction * a.owner.login.localeCompare(b.owner.login);
        case 'stars':
          return direction * (a.stargazers_count - b.stargazers_count);
        case 'created':
          return direction * (new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
        default:
          return 0;
      }
    });
  }, [repositories, sort]);
} 