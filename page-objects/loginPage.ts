import { Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    await this.page.goto("/");
  }

  async clickLoginLink(): Promise<void> {
    await this.page.click("text=Login");
  }

  async enterUsername(username: string): Promise<void> {
    await this.page.fill('input[name="login"]', username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.page.fill('input[name="password"]', password);
  }

  async clickLoginButton(): Promise<void> {
    await this.page.click('button[type="submit"]');
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      await this.page.waitForSelector("text=Logout", { timeout: 5000 });
      return true;
    } catch (error) {
      return false;
    }
  }
}
