import { Page } from '@playwright/test';

export class OrangeHRMLoginPage {
  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async getCredentials(): Promise<{ username: string; password: string }> {
    const credsLocator = this.page.locator('div.orangehrm-demo-credentials');
    const usernameText = await credsLocator.locator('p').nth(0).textContent();
    const passwordText = await credsLocator.locator('p').nth(1).textContent();
    const username = usernameText?.split(':')[1].trim() || '';
    const password = passwordText?.split(':')[1].trim() || '';
    return { username, password };
  }

  async enterUsername(username: string): Promise<void> {
    await this.page.fill('input[name="username"]', username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.page.fill('input[name="password"]', password);
  }

  async clickLoginButton(): Promise<void> {
    await this.page.click('button[type="submit"]');
  }

  async isLoggedIn(): Promise<boolean> {
    await this.page.waitForLoadState('networkidle');
    const currentUrl = this.page.url();
    return currentUrl.includes('/dashboard/index');
  }
}
