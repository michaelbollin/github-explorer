import { renderHook } from '@testing-library/react'
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
  it('returns unsorted items when no sort is provided', () => {
    const { result } = renderHook(() => useClientSort(mockRepositories))
    expect(result.current).toEqual(mockRepositories)
  })

  it('sorts by name descending', () => {
    const { result } = renderHook(() => useClientSort(mockRepositories, {
      field: 'name',
      direction: 'desc',
      label: 'Name'
    }))
    expect(result.current[0].name).toBe('quantum-pizza-generator')
  })

  it('sorts by stars descending', () => {
    const { result } = renderHook(() => useClientSort(mockRepositories, {
      field: 'stars',
      direction: 'desc',
      label: 'Stars'
    }))
    expect(result.current[0].stargazers_count).toBe(20)
  })
}) 