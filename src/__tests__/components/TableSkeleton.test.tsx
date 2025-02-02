import { render, screen } from '@testing-library/react';
import { TableSkeleton } from '@/components/TableSkeleton';
import { TestWrapper } from '../setup/test-wrapper';

describe('TableSkeleton', () => {
  it('renders accessible loading table structure', () => {
    render(<TableSkeleton />, { wrapper: TestWrapper });

    const headers = screen.getAllByRole('columnheader');
    const expectedHeaders = ['Repository', 'Stars', 'Language', 'Updated'];

    expect(headers).toHaveLength(expectedHeaders.length);
    headers.forEach((header, index) => {
      expect(header).toHaveTextContent(expectedHeaders[index]);
    });
  });

  it('renders loading state rows', () => {
    render(<TableSkeleton />, { wrapper: TestWrapper });

    const cells = screen.getAllByRole('cell');
    expect(cells.length).toBeGreaterThan(0);
    
      expect(screen.getByRole('table')).toHaveAttribute('aria-busy', 'true');
   
  });
});
