// @ts-check
import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/')
})

test.describe('eliminar galería', async () => {
  test('crear botón', async ({ page }) => {
    await page.getByTestId('open')?.click()
    await page.getByLabel('fotoResearch').fill('cat')
    await page.getByRole('button').click()
    await expect(page.getByText('OTHER THINGS')).toBeVisible()
    setTimeout(() => {
      console.log('first')
    }, 1000)
  })
})
