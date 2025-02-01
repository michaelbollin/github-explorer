'use client'

import { TopBar } from '@/components/TopBar'
import { useSearch } from '@/hooks/useSearch'

export default function Home() {
  const { setSearch } = useSearch()

  return (
    <main className="min-h-screen bg-gray-50">
      <TopBar onSearch={setSearch} />
    </main>
  )
}
