import { render, screen } from '@testing-library/react'
import { EmptyState } from '@/components/EmptyState'

describe('EmptyState', () => {
  it('renders initial state correctly', () => {
    render(<EmptyState type="initial" />)
    
    expect(screen.getByText(/Start by searching/i)).toBeInTheDocument()
  })

  it('renders no-results state with search term', () => {
    render(<EmptyState type="no-results" searchTerm="react" />)
    
    expect(screen.getByText(/No repositories found for/i)).toBeInTheDocument()
    expect(screen.getByText(/react/i)).toBeInTheDocument()
  })
}) 