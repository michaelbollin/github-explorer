'use client';

import { TopBar } from '@/components/TopBar';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useRepositories } from '@/hooks/useRepositories';
import { RepositoryTable } from '@/components/RepositoryTable';
import { TableSkeleton } from '@/components/TableSkeleton'
import { EmptyState } from '@/components/EmptyState'
import { useEffect } from 'react';

export default function Home() {
  const { query, sort, page, setTotalCount } = useGlobalContext();
  const { data, isLoading, error } = useRepositories(query, sort, page);

  useEffect(() => {
    if (data?.total_count) {
      setTotalCount(data.total_count)
    }
  }, [data?.total_count, setTotalCount])

  return (
    <main className="min-h-screen bg-gray-50">
      <TopBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <TableSkeleton />
        ) : !query ? (
          <EmptyState type="initial" />
        ) : data?.items?.length === 0 ? (
          <EmptyState type="no-results" searchTerm={query} />
        ) : data?.items && (
          <RepositoryTable
            repositories={data.items}
          />
        )}
      </div>
    </main>
  );
}
