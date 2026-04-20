# Learning Playwright Fundamentals

A learning project for understanding and mastering Playwright, a modern end-to-end testing framework for web applications.

## Overview

This repository contains example tests and configurations for learning Playwright fundamentals. It demonstrates basic test automation concepts including browser automation, assertions, and test configuration.

## What is Playwright?

Playwright is a testing and automation library that allows you to:
- Automate user interactions with web applications
- Test web applications across multiple browsers (Chromium, Firefox, WebKit)
- Perform visual comparisons and debugging
- Generate test reports and traces

## Project Structure

```
.
├── tests/
│   └── example.spec.ts          # Sample test files demonstrating Playwright basics
├── playwright.config.ts         # Playwright configuration and test settings
├── package.json                 # Project dependencies and metadata
└── README.md                    # This file
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/nksahoo1990/LearningPlaywrightFundamentals.git
cd LearningPlaywrightFundamentals
```

2. Install dependencies:
```bash
npm install
```

3. Install browsers (required for Playwright):
```bash
npx playwright install
```

## Running Tests

Execute all tests:
```bash
npx playwright test
```

Run tests in a specific file:
```bash
npx playwright test tests/example.spec.ts
```

Run tests in debug mode:
```bash
npx playwright test --debug
```

Run tests in headed mode (see browser):
```bash
npx playwright test --headed
```

## Test Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Key Concepts Covered

- **Page Navigation**: Using `page.goto()` to navigate to URLs
- **Element Locators**: Finding elements using various locator strategies
- **Assertions**: Validating page state and content with `expect()`
- **User Interactions**: Simulating clicks, typing, and other user actions
- **Cross-browser Testing**: Running tests across multiple browsers

## Configuration

The `playwright.config.ts` file contains:
- Test directory path
- Parallel test execution settings
- Reporter configuration (HTML reports)
- Browser configurations (Chromium, Firefox, WebKit)
- Trace collection for debugging

## Learning Resources

- [Official Playwright Documentation](https://playwright.dev)
- [Playwright API Reference](https://playwright.dev/docs/api/class-browser)
- [Best Practices](https://playwright.dev/docs/best-practices)

## Contributing

This is a learning project. Feel free to fork, modify, and experiment!

## License

ISC
