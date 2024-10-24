import { test, expect } from '@playwright/test';

test.describe('WeatherFetcher Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('should display weather details after fetching', async ({ page }) => {
    // Simulate a filled location state after user input
    const input = await page.locator('#query');
    await input.fill('New York');
    await page.keyboard.press('Enter');
    
    // Wait for data fetching to complete
    await page.waitForTimeout(1000); // Adjust according to API response time

    const temperature = await page.locator('text=Details:');
    await expect(temperature).toBeVisible();
  });
});