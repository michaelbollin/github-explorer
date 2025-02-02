'use client' // Error boundaries must be Client Components
 
import { ErrorMessage } from '@/components/ui/error-message'

export default function NotFound() {
  return (
    <ErrorMessage
      title="Page not found"
      message="The page you're looking for doesn't exist."
      variant="not-found"
    />
  )
}