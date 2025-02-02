'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import { Toast } from '@/components/ui/toast'

type ToastContextType = {
  showError: (message: string) => void
}

const ToastContext = createContext<ToastContextType | null>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState<string | null>(null)

  const showError = useCallback((message: string) => {
    setError(message)
  }, [])

  return (
    <ToastContext.Provider value={{ showError }}>
      {children}
      {error && (
        <Toast 
          message={error} 
          onClose={() => setError(null)} 
        />
      )}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
} 