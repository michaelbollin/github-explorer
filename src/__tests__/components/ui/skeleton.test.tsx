import { render } from '@testing-library/react'
import { Skeleton } from '@/components/ui/skeleton'

describe('Skeleton', () => {
  test('renders skeleton element with accessibility attributes', () => {
    const { container } = render(<Skeleton />)
    const skeleton = container.firstChild as HTMLElement
    
    expect(skeleton).toBeInTheDocument()
    expect(skeleton).toHaveAttribute('role', 'status')
    expect(skeleton).toHaveAttribute('aria-label', 'Loading...')
  })

  test('accepts and renders with custom className', () => {
    const testClass = 'test-skeleton-class'
    const { container } = render(<Skeleton className={testClass} />)
    const skeleton = container.firstChild as HTMLElement
    
    expect(skeleton).toHaveClass(testClass)
  })
}) 