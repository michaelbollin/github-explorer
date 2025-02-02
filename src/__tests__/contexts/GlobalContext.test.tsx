import { render, act } from '@testing-library/react'
import { GlobalProvider, useGlobalContext } from '@/contexts/GlobalContext'
import type { GlobalContextType } from '@/types/context'
import { useRouter, useSearchParams } from 'next/navigation'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn()
}))

function TestComponent({ onContextChange }: { onContextChange: (context: GlobalContextType) => void }) {
  const context = useGlobalContext()
  onContextChange(context)
  return null
}

describe('GlobalContext', () => {
  let mockRouter: { replace: jest.Mock }
  let mockParams: URLSearchParams

  beforeEach(() => {
    mockRouter = { replace: jest.fn() }
    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)
    
    mockParams = new URLSearchParams()
    ;(useSearchParams as jest.Mock).mockReturnValue(mockParams)
  })

  it('resets page when query changes', () => {
    const onContextChange = jest.fn()
    
    render(
      <GlobalProvider defaultSort={{ field: 'stars', direction: 'desc', label: 'Stars' }}>
        <TestComponent onContextChange={onContextChange} />
      </GlobalProvider>
    )

    mockParams.set('page', '3')
    mockParams.set('q', 'react')
    
    act(() => {
      const context = onContextChange.mock.calls[0][0]
      context.setQuery('vue')
    })

    expect(mockRouter.replace).toHaveBeenCalledWith('/?q=vue')
  })

  it('preserves page when using pagination', () => {
    const onContextChange = jest.fn()
    
    render(
      <GlobalProvider defaultSort={{ field: 'stars', direction: 'desc', label: 'Stars' }}>
        <TestComponent onContextChange={onContextChange} />
      </GlobalProvider>
    )

    mockParams.set('q', 'react')
    
    act(() => {
      const context = onContextChange.mock.calls[0][0]
      context.setPage(2)
    })

    expect(mockRouter.replace).toHaveBeenCalledWith('/?q=react&page=2')
  })

  it('resets page when sort changes', () => {
    const onContextChange = jest.fn()
    
    render(
      <GlobalProvider defaultSort={{ field: 'stars', direction: 'desc', label: 'Stars' }}>
        <TestComponent onContextChange={onContextChange} />
      </GlobalProvider>
    )

    mockParams.set('page', '3')
    mockParams.set('sort', 'stars')
    mockParams.set('order', 'desc')
    
    act(() => {
      const context = onContextChange.mock.calls[0][0]
      context.setSort({ field: 'updated', direction: 'asc', label: 'Updated' })
    })

    expect(mockRouter.replace).toHaveBeenCalledWith('/?sort=updated&order=asc')
  })

  it('preserves page when setting same query', () => {
    const onContextChange = jest.fn()
    
    render(
      <GlobalProvider defaultSort={{ field: 'stars', direction: 'desc', label: 'Stars' }}>
        <TestComponent onContextChange={onContextChange} />
      </GlobalProvider>
    )

    mockParams.set('page', '2')
    mockParams.set('q', 'react')
    
    act(() => {
      const context = onContextChange.mock.calls[0][0]
      context.setQuery('react')
    })

    const expectedUrl = new URLSearchParams('page=2&q=react')
    const actualUrl = new URLSearchParams(mockRouter.replace.mock.calls[0][0].substring(2))
    expect(actualUrl.toString()).toBe(expectedUrl.toString())
  })
}) 