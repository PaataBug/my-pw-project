import { test, expect } from '@playwright/test';
import { OrangeHRMLoginPage } from '../page-objects/orangehrmLoginPage';

test('should log in successfully using demo credentials', async ({ page }) => {
  const loginPage = new OrangeHRMLoginPage(page);
  await loginPage.goto();
  const { username, password } = await loginPage.getCredentials();
  await loginPage.enterUsername(username);
  await loginPage.enterPassword(password);
  await loginPage.clickLoginButton();
  expect(await loginPage.isLoggedIn()).toBeTruthy();
});
