import { test, expect } from '@playwright/test';

test('Filter activities by type', async ({ page }) => {
  // Navigate to the activities page
  await page.goto('http://localhost:8080/activites');

  // Click on the filter "Type d'activité"
  await page.getByText("Type d'activité").click();

  // Check the "Visites culturelles" checkbox
  await page.getByLabel('Visites culturelles').check();

  // Assert that there are 4 activity cards visible
  await expect(page.locator('.carte-activites')).toHaveCount(4);
});
