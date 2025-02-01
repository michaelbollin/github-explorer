export function ChevronUpIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 20 20" 
      fill="currentColor"
      aria-hidden="true"
    >
      <path 
        fillRule="evenodd" 
        d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" 
        clipRule="evenodd" 
      />
    </svg>
  )
}

export function ChevronDownIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 20 20" 
      fill="currentColor"
      aria-hidden="true"
    >
      <path 
        fillRule="evenodd" 
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" 
        clipRule="evenodd" 
      />
    </svg>
  )
} 