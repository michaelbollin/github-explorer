'use client'

import { useEffect } from 'react'
import { XMarkIcon } from '@/components/icons/x-mark-icon'

type ToastProps = {
  message: string
  onClose: () => void
}

export function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-red-50 border border-red-200 rounded-lg shadow-lg animate-slide-up">
      <div className="flex items-center gap-2">
        <p className="text-sm text-red-800">{message}</p>
        <button 
          onClick={onClose}
          className="text-red-600 hover:text-red-800"
          aria-label="Dismiss"
        >
          <XMarkIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
} 