'use client'
 
import { useEffect } from 'react'
import { ErrorMessage } from '@/components/ui/error-message'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <ErrorMessage
      title="Something went wrong"
      message={error.message}
      variant="error"
    />
  )
}