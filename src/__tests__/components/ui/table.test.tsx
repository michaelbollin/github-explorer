import { render, screen } from '@testing-library/react'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { TestWrapper } from '@/__tests__/setup/test-utils'

describe('Table Components', () => {
  it('renders table structure correctly', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
      { wrapper: TestWrapper }
    )

    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Cell')).toBeInTheDocument()
  })

  it('renders custom content', () => {
    const content = 'Custom Content'
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>{content}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByText(content)).toBeInTheDocument()
  })
}) 