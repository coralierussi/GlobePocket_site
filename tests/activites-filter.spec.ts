import { expect, test } from '@playwright/test';
 
test('Filter activities by type', async ({ page }) => {
  await page.goto('http://localhost:8080/activites');
  await page.getByRole('button', { name: 'Type d\'activité Type d\'' }).click();
  await page.locator('label').filter({ hasText: 'Visites culturelles' }).click();
 
 
  // Vérifier que 4 cartes d'activité sont visibles
  await expect(page.getByTestId('activity-card')).toHaveCount(4);
});