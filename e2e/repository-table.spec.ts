import { test as base, expect } from '@playwright/test'
import { mockRepositories } from './mocks/repositories'

const test = base.extend({
  page: async ({ page }, use) => {
    await page.route('**/search/repositories**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          total_count: mockRepositories.length,
          incomplete_results: false,
          items: mockRepositories,
        }),
      })
    })
    await use(page)
  },
})

test.describe('Repository Table', () => {
  test('shows initial empty state', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Start by searching')).toBeVisible()
  })

  test('shows search input', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('searchbox', { name: 'search' })).toBeVisible()
  })

  test('shows search results', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('searchbox', { name: 'search' }).fill('react')
    await page.waitForResponse(response => response.url().includes('?q='))
    await expect(page.getByRole('table')).toBeVisible()
    
    const firstRow = page.getByRole('row').nth(1)
    await expect(firstRow.getByRole('link')).toHaveText('alpha-repo')
  })

  test('client-side sorting works', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('searchbox', { name: 'search' }).fill('react')
    await page.waitForResponse(response => response.url().includes('?q='))
    
    const getFirstRepoName = async () => {
      return page.getByRole('row')
        .nth(1)
        .getByRole('cell')
        .first()
        .getByRole('link')
        .textContent()
    }
    
    const initialName = await getFirstRepoName()
    expect(initialName).toBe('alpha-repo')
    
    await page.getByRole('button').nth(1).click()
    const descendingName = await getFirstRepoName()
    expect(descendingName).toBe('gamma-repo')
    
    await page.getByRole('button').nth(0).click()
    const ascendingName = await getFirstRepoName()
    expect(ascendingName).toBe('alpha-repo')
  })
})