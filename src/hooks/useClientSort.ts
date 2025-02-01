import { useState, useMemo } from 'react'
import type { Repository, ClientSort, ClientSortField } from '@/types/github'

export function useClientSort(items: Repository[] | undefined) {
  const [sort, setSort] = useState<ClientSort>();

  const handleSort = (field: ClientSortField) => {
    setSort(prev => ({
      field,
      direction: prev?.field === field && prev.direction === 'desc' ? 'asc' : 'desc'
    }));
  };

  const sortedItems = useMemo(() => {
    if (!items || !sort) return items;

    return [...items].sort((a, b) => {
      const multiplier = sort.direction === 'asc' ? 1 : -1;
      
      switch (sort.field) {
        case 'name':
          return multiplier * a.name.localeCompare(b.name);
        case 'owner':
          return multiplier * a.owner.login.localeCompare(b.owner.login);
        case 'stars':
          return multiplier * (a.stargazers_count - b.stargazers_count);
        case 'created':
          return multiplier * (new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
        default:
          return 0;
      }
    });
  }, [items, sort]);

  return {
    sortedItems,
    sort,
    handleSort
  };
} 