import { render, screen } from '@testing-library/react'
import { RepositoryTable } from '@/components/RepositoryTable'
import { mockRepositories } from '../mocks/repositories'
import { TestWrapper } from '../setup/test-wrapper'

describe('RepositoryTable', () => {
  it('renders repository data correctly', () => {
    render(
      <RepositoryTable repositories={mockRepositories} />,
      { wrapper: TestWrapper }
    )

    // Check column headers
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Owner')).toBeInTheDocument()
    expect(screen.getByText('Stars')).toBeInTheDocument()
    expect(screen.getByText('Created')).toBeInTheDocument()

    // Check first repository link
    const firstRepo = mockRepositories[0]
    const repoLink = screen.getByRole('link', { name: firstRepo.name })
    expect(repoLink).toHaveAttribute('href', firstRepo.html_url)
    expect(repoLink).toHaveAttribute('target', '_blank')
  })
}) 