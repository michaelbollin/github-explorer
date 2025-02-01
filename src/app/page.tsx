'use client';

import { TopBar } from '@/components/TopBar';
import { useSearch } from '@/hooks/useSearch';
import { useRepositories } from '@/hooks/useRepositories';
import { RepositoryTable } from '@/components/RepositoryTable';
import type { OrderOption } from '@/types/github';
import { useClientSort } from '@/hooks/useClientSort';

const DEFAULT_ORDER: OrderOption = {
  label: 'Stars (High to Low)',
  field: 'stars',
  direction: 'desc',
};

export default function Home() {
  const { q, order, setQuery } = useSearch();
  const currentOrder = order || DEFAULT_ORDER;
  const { data, isLoading, error } = useRepositories(q, currentOrder);
  const { sortedItems, sort, handleSort } = useClientSort(data?.items);

  const handleOrderChange = (newOrder: OrderOption) => {
    setQuery(q, newOrder);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <TopBar
        onSearch={setQuery}
        onOrderChange={handleOrderChange}
        initialOrder={currentOrder}
        totalCount={data?.total_count}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading && (
          <div className="flex justify-center py-8">
            <div className="text-gray-500">Loading...</div>
          </div>
        )}
        {error && (
          <div className="flex justify-center py-8">
            <div className="text-red-500">
              Error: {(error as Error).message}
            </div>
          </div>
        )}
        {data?.items && (
          <RepositoryTable
            repositories={sortedItems || []}
            total={data.total_count}
            onClientSort={handleSort}
            clientSortField={sort?.field}
            clientSortDirection={sort?.direction}
            sortField={currentOrder.field}
            sortDirection={currentOrder.direction}
          />
        )}
      </div>
    </main>
  );
}
