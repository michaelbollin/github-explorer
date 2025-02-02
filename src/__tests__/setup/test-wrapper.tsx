import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GlobalProvider } from '@/contexts/GlobalContext'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

export const TestWrapper = ({ children }: { children: ReactNode }) => (
  <GlobalProvider defaultSort={{ field: 'stars', direction: 'desc', label: 'Stars' }}>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  </GlobalProvider>
) 