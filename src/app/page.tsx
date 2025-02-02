'use client';

import { TopBar } from '@/components/TopBar';
import { useGlobalContext } from '@/contexts/GlobalContext';
import { useRepositories } from '@/hooks/useRepositories';
import { RepositoryTable } from '@/components/RepositoryTable';
import { TableSkeleton } from '@/components/TableSkeleton'

export default function Home() {
  const { query, sort, page } = useGlobalContext();
  const { data, isLoading, error } = useRepositories(query, sort, page);

  return (
    <main className="min-h-screen bg-gray-50">
      <TopBar totalCount={data?.total_count} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="text-red-500">Error: {(error as Error).message}</div>
        )}
        {isLoading ? (
          <TableSkeleton />
        ) : data?.items && (
          <RepositoryTable
            repositories={data.items}
            total={data.total_count}
          />
        )}
      </div>
    </main>
  );
}
