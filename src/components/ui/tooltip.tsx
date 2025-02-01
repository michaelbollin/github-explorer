import { useState } from 'react'

export function Tooltip({ children, content }: { children: React.ReactNode; content: string }) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative">
      <div 
        onClick={() => setIsVisible(!isVisible)}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-help"
      >
        {children}
      </div>
      <div 
        className={`
          absolute w-64 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg 
          transition-all duration-200
          left-1/2 -translate-x-1/2 top-full mt-3
          ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        {content}
      </div>
    </div>
  )
} 