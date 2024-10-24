import { test, expect } from '@playwright/test';

test.describe('WeatherDashboard Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('should render LocationFetcher and WeatherFetcher components', async ({ page }) => {
    const locationFetcher = await page.locator('form');
    await expect(locationFetcher).toBeVisible();

    const weatherSection = await page.locator('text=No weather data available');
    await expect(weatherSection).toBeVisible();
  });
  
  test('should fetch and display weather data after location is set', async ({ page }) => {
    const input = await page.locator('#query');
    await input.fill('New York');
    await page.keyboard.press('Enter');
    
    // Simulate waiting for API call to complete
    await page.waitForTimeout(1000); // Adjust as needed for your setup
    
    const weather = await page.locator('text=Details:');
    await expect(weather).toBeVisible();
  });
});