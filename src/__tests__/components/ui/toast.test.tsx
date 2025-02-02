import { render, screen, act, fireEvent } from '@testing-library/react'
import { Toast } from '@/components/ui/toast'

describe('Toast', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('renders message and close button', () => {
    render(<Toast message="Test message" onClose={() => {}} />)
    
    expect(screen.getByText('Test message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /dismiss/i })).toBeInTheDocument()
  })

  it('calls onClose when dismiss button is clicked', () => {
    const onClose = jest.fn()
    render(<Toast message="Test message" onClose={onClose} />)
    
    fireEvent.click(screen.getByRole('button', { name: /dismiss/i }))
    expect(onClose).toHaveBeenCalled()
  })

  it('auto-dismisses after 5 seconds', () => {
    const onClose = jest.fn()
    render(<Toast message="Test message" onClose={onClose} />)
    
    act(() => {
      jest.advanceTimersByTime(5000)
    })
    
    expect(onClose).toHaveBeenCalled()
  })
}) 