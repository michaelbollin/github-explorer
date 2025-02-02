import { render, screen } from '@testing-library/react'
import { ErrorMessage } from '../../../components/ui/error-message'

describe('ErrorMessage', () => {
  it('renders error variant correctly', () => {
    render(
      <ErrorMessage 
        title="Error Title" 
        message="Error message" 
        variant="error" 
      />
    )
    
    expect(screen.getByText('Error Title')).toBeInTheDocument()
    expect(screen.getByText('Error message')).toBeInTheDocument()
    expect(screen.getByText(/return to the homepage/i)).toBeInTheDocument()
  })

  it('renders not-found variant correctly', () => {
    render(
      <ErrorMessage 
        title="Not Found" 
        message="Page not found" 
        variant="not-found" 
      />
    )
    
    expect(screen.getByText('Not Found')).toBeInTheDocument()
    expect(screen.getByText('Page not found')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /return to the homepage/i }))
      .toHaveAttribute('href', '/')
  })
}) 