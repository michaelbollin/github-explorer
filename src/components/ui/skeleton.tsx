export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div 
      role="status"
      aria-label="Loading..."
      className={`animate-pulse bg-gray-200 rounded ${className}`} 
    />
  )
} 