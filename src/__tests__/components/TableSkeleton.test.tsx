import { render, screen, within } from '@testing-library/react'
import { TableSkeleton } from '@/components/TableSkeleton'

describe('TableSkeleton', () => {
  test('renders accessible loading table structure', () => {
    render(<TableSkeleton />)
    
    const table = screen.getByRole('table')
    expect(table).toHaveAttribute('aria-busy', 'true')
    expect(table).toHaveAttribute('aria-label', 'Loading repository data...')
    
    // Verify header structure
    const headers = screen.getAllByRole('columnheader')
    const expectedHeaders = ['Name', 'Owner', 'Stars', 'Created']
    expect(headers).toHaveLength(expectedHeaders.length)
    headers.forEach((header, index) => {
      expect(header).toHaveTextContent(expectedHeaders[index])
    })
  })

  test('renders loading state rows', () => {
    render(<TableSkeleton />)
    
    const rows = screen.getAllByRole('row')
    const contentRows = rows.slice(1) // Exclude header row
    
    contentRows.forEach(row => {
      const cells = within(row).getAllByRole('cell')
      cells.forEach(cell => {
        expect(cell).toHaveAttribute('aria-busy', 'true')
        const skeletons = within(cell).getAllByRole('status')
        expect(skeletons.length).toBeGreaterThan(0)
        skeletons.forEach(skeleton => {
          expect(skeleton).toHaveAttribute('aria-label')
        })
      })
    })
  })
}) 