<<<<<<< HEAD
# Playwright_TS_Framework
basic framework includes some example modules and scripts to start any automation
=======
# Playwright Framework Starter

This is a setup for a Playwright test automation framework using TypeScript.

## Installation

Run \`npm install\` to install dependencies.

## Adding Tests

- UI tests in the \`tests/ui\` directory.
- API tests in the \`tests/api\` directory.
- End-to-End tests in the \`tests/e2e\` directory.

## Running Tests

Execute \`npm test\` to run your tests with Playwright.

Test Scripts:

"test": "playwright test": Runs your tests using Playwright.
"test:debug": "PWDEBUG=1 playwright test": Runs your tests in debug mode. The PWDEBUG environment variable can activate Playwright's debug features.
Linting and Formatting Scripts:

"lint": "eslint . --ext .ts": Lints your TypeScript files using ESLint.
"lint:fix": "eslint . --ext .ts --fix": Automatically fixes linting errors in your TypeScript files.
"format": "prettier --write .": Formats your code using Prettier.
Compilation Scripts:

"build": "tsc": Compiles your TypeScript code into JavaScript using the TypeScript compiler.
"build:watch": "tsc --watch": Compiles your TypeScript code and watches for any changes, recompiling as needed.
Cleaning Scripts:

"clean": "rm -rf dist/": Deletes the dist directory (or whatever your output directory is) to clean up the compiled JavaScript files.
Pre-commit or Pre-push Scripts:

"precommit": "npm run lint && npm run test": Runs linting and tests before each commit (requires additional setup with tools like Husky).
"prepush": "npm run lint && npm run build && npm run test": Similar to precommit, but includes a build step and is run before pushing to a repository.
>>>>>>> master
