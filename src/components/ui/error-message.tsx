'use client'

import Link from "next/link"

type ErrorMessageProps = {
  title: string
  message: string
  variant?: 'error' | 'not-found'
}

export function ErrorMessage({ 
  title, 
  message,
  variant = 'error' 
}: ErrorMessageProps) {
  const styles = {
    error: {
      container: 'bg-red-50 border-red-200',
      title: 'text-red-800',
      message: 'text-red-600'
    },
    'not-found': {
      container: 'bg-gray-50 border-gray-200',
      title: 'text-gray-800',
      message: 'text-gray-600'
    }
  }[variant]

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-left mb-2">Oh no!</h1>
      <div className={`p-4 rounded-lg border ${styles.container}`}>
        <h2 className={`text-lg font-semibold mb-2 ${styles.title}`}>
          {title}
        </h2>
        <p className={`text-sm mb-4 ${styles.message}`}>
          {message}
        </p>
        <p>Please try again or <Link href="/" className="text-blue-500 hover:text-blue-700 underline">return to the homepage.</Link></p>
      </div>
    </div>
  )
} 