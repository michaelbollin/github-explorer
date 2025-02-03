import { renderHook } from '@testing-library/react'
import { useClientSort } from '@/hooks/useClientSort'
import { mockRepositories } from '../mocks/repositories'

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
    expect(result.current[0].name).toBe('gamma-repo')
  })

  it('sorts by stars descending', () => {
    const { result } = renderHook(() => useClientSort(mockRepositories, {
      field: 'stars',
      direction: 'desc',
      label: 'Stars'
    }))
    expect(result.current[0].stargazers_count).toBe(0)
  })
}) 