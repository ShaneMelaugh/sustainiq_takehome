import { test, expect } from '@playwright/test';

test.describe('LocationFetcher Component', () => {
  test.beforeEach(async ({ page }) => {
    // Assuming you're serving the app locally on port 3000
    await page.goto('http://localhost:5173');
  });

  test('should render input field', async ({ page }) => {
    const input = await page.locator('#query');
    await expect(input).toBeVisible();
  });

  test('should accept valid search input', async ({ page }) => {
    const input = await page.locator('#query');
    await input.fill('New York');
    await page.keyboard.press('Enter');
    
    // You can add an expectation to check if a network request is fired or state changes
    await expect(page.locator('text=New York')).toBeVisible();
  });
});
