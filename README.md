# Buggy Cars Login Automation with Playwright & TypeScript

This project demonstrates an automated test using Playwright for the Buggy Cars login functionality. The test is written in TypeScript and uses the Page Object Model (POM) design pattern to keep the code modular and maintainable.

## Project Structure

my-playwright-ts/ ├── .env ├── package.json ├── playwright.config.ts ├── tsconfig.json ├── page-objects │ └── loginPage.ts └── tests └── login.spec.ts

- **.env:** Contains environment variables (such as login credentials and base URL).
- **package.json:** Contains project dependencies and scripts.
- **playwright.config.ts:** Playwright configuration file (loads environment variables and sets base URL).
- **tsconfig.json:** TypeScript configuration file.
- **page-objects/loginPage.ts:** Contains the Page Object Model for the login page.
- **tests/login.spec.ts:** Contains the test script that automates the login process.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) (which includes npm)
- Git

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/YourUsername/my-playwright-ts.git
   cd my-playwright-ts
   
2. **Install Playwright Browsers:**
    ```bash
    npx playwright install


3. **Set Up Environment Variables:**
    ```dotenv
    APP_USERNAME=testp
    APP_PASSWORD=Happytesting1!
    BASE_URL=https://buggy.justtestit.org

## How to Run the Script

1. **Open Playwright UI** 
    ```bash
    npx playwright test --ui


2. **Run Tests Headlessly (Optional):**
    ```bash
   npx playwright test
