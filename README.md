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


## Explanation of the Test Flow
Page Object Model (POM):
The login actions are encapsulated in page-objects/loginPage.ts. 

## This includes methods for:
1. Navigating to the home page (using the BASE_URL defined in the configuration)
2. Clicking the "Login" link
3. Entering the username and password (retrieved from environment variables)
4. Clicking the "Login" button
5. Verifying that the "Logout" element is visible, indicating a successful login

   
## Test Script:
The test in tests/login.spec.ts creates an instance of the LoginPage class and calls its methods to perform the following steps:

1. Visit the homepage.
2. Click the login link to navigate to the login page.
3. Enter valid credentials.
4. Click the login button.
5. Wait for the "Logout" element to appear to confirm that the login was successful.
