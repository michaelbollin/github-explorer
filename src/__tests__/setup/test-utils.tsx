import { GlobalProvider } from '@/contexts/GlobalContext'
import { DEFAULT_SERVER_SORT } from '@/config/constants'

export function TestWrapper({ children }: { children: React.ReactNode }) {
  return (
    <GlobalProvider defaultSort={DEFAULT_SERVER_SORT}>
      {children}
    </GlobalProvider>
  )
} 