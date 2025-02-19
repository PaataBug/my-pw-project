import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/loginPage";

test("should successfully log in with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.clickLoginLink();
  await loginPage.enterUsername(process.env.APP_USERNAME || "testp");
  await loginPage.enterPassword(process.env.APP_PASSWORD || "Happytesting1!");
  await loginPage.clickLoginButton();
  expect(await loginPage.isLoggedIn()).toBeTruthy();
});
