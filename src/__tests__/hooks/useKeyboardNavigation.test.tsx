import { renderHook } from '@testing-library/react'
import { useSearchKeyboard, usePaginationKeyboard } from '@/hooks/useKeyboardNavigation'
import { fireEvent } from '@testing-library/dom'

describe('useSearchKeyboard', () => {
  test('calls onFocus when Cmd+K is pressed', () => {
    const onFocus = jest.fn()
    renderHook(() => useSearchKeyboard({ onFocus }))

    fireEvent.keyDown(document, { key: 'k', metaKey: true })
    expect(onFocus).toHaveBeenCalled()
  })

  test('calls onFocus when Ctrl+K is pressed', () => {
    const onFocus = jest.fn()
    renderHook(() => useSearchKeyboard({ onFocus }))

    fireEvent.keyDown(document, { key: 'k', ctrlKey: true })
    expect(onFocus).toHaveBeenCalled()
  })

  test('does not call onFocus for other key combinations', () => {
    const onFocus = jest.fn()
    renderHook(() => useSearchKeyboard({ onFocus }))

    fireEvent.keyDown(document, { key: 'k' })
    fireEvent.keyDown(document, { key: 'j', metaKey: true })
    expect(onFocus).not.toHaveBeenCalled()
  })
})

describe('usePaginationKeyboard', () => {
  const mockProps = {
    currentPage: 2,
    totalPages: 3,
    onPageChange: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('navigates to previous page on ArrowLeft', () => {
    renderHook(() => usePaginationKeyboard(mockProps))

    fireEvent.keyDown(document, { key: 'ArrowLeft' })
    expect(mockProps.onPageChange).toHaveBeenCalledWith(1)
  })

  test('navigates to next page on ArrowRight', () => {
    renderHook(() => usePaginationKeyboard(mockProps))

    fireEvent.keyDown(document, { key: 'ArrowRight' })
    expect(mockProps.onPageChange).toHaveBeenCalledWith(3)
  })

  test('does not navigate when on first page and ArrowLeft is pressed', () => {
    renderHook(() => usePaginationKeyboard({ ...mockProps, currentPage: 1 }))

    fireEvent.keyDown(document, { key: 'ArrowLeft' })
    expect(mockProps.onPageChange).not.toHaveBeenCalled()
  })

  test('does not navigate when on last page and ArrowRight is pressed', () => {
    renderHook(() => usePaginationKeyboard({ ...mockProps, currentPage: 3 }))

    fireEvent.keyDown(document, { key: 'ArrowRight' })
    expect(mockProps.onPageChange).not.toHaveBeenCalled()
  })

  test('ignores keyboard events when typing in input', () => {
    renderHook(() => usePaginationKeyboard(mockProps))
    
    const input = document.createElement('input')
    document.body.appendChild(input)
    input.focus()

    fireEvent.keyDown(input, { key: 'ArrowRight' })
    expect(mockProps.onPageChange).not.toHaveBeenCalled()

    document.body.removeChild(input)
  })
}) 