import { renderHook, act } from '@testing-library/react'
import { useClientSort } from '@/hooks/useClientSort'

const mockRepositories = [
  { 
    id: 1, 
    name: 'epic-banana-project', 
    owner: { login: 'michael' }, 
    stargazers_count: 10, 
    created_at: '2023-01-02',
    html_url: 'https://github.com/michael/epic-banana-project',
    updated: '2023-01-02'
  },
  { 
    id: 2, 
    name: 'dancing-goopher', 
    owner: { login: 'ernest' }, 
    stargazers_count: 20, 
    created_at: '2023-01-01',
    html_url: 'https://github.com/ernest/dancing-goopher',
    updated: '2023-01-01'
  },
  { 
    id: 3, 
    name: 'quantum-pizza-generator', 
    owner: { login: 'mateusz' }, 
    stargazers_count: 15, 
    created_at: '2023-01-03',
    html_url: 'https://github.com/mateusz/quantum-pizza-generator',
    updated: '2023-01-03'
  }
]

describe('useClientSort', () => {
  it('returns unsorted items when no sort is applied', () => {
    const { result } = renderHook(() => useClientSort(mockRepositories))
    expect(result.current.sortedItems).toEqual(mockRepositories)
  })

  it('sorts by name', () => {
    const { result } = renderHook(() => useClientSort(mockRepositories))

    act(() => {
      result.current.handleSort('name')
    })

    expect(result.current.sortedItems?.[0].name).toBe('quantum-pizza-generator')
    expect(result.current.sort).toEqual({ field: 'name', direction: 'desc' })

    act(() => {
      result.current.handleSort('name')
    })

    expect(result.current.sortedItems?.[0].name).toBe('dancing-goopher')
    expect(result.current.sort).toEqual({ field: 'name', direction: 'asc' })
  })

  it('sorts by stars', () => {
    const { result } = renderHook(() => useClientSort(mockRepositories))

    act(() => {
      result.current.handleSort('stars')
    })

    expect(result.current.sortedItems?.[0].stargazers_count).toBe(20)
    expect(result.current.sort).toEqual({ field: 'stars', direction: 'desc' })
  })

  it('toggles sort direction when clicking same field', () => {
    const { result } = renderHook(() => useClientSort(mockRepositories))

    act(() => {
      result.current.handleSort('owner')
    })
    expect(result.current.sort?.direction).toBe('desc')

    act(() => {
      result.current.handleSort('owner')
    })
    expect(result.current.sort?.direction).toBe('asc')
  })

  it('resets direction when changing sort field', () => {
    const { result } = renderHook(() => useClientSort(mockRepositories))

    act(() => {
      result.current.handleSort('name')
      result.current.handleSort('name') // toggle to asc
      result.current.handleSort('stars') // new field
    })

    expect(result.current.sort).toEqual({ field: 'stars', direction: 'desc' })
  })
}) 