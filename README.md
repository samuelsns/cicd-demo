# TypeScript TDD Project

A simple TypeScript project set up for Test-Driven Development (TDD) using Jest.

## Project Structure

```
.
├── __tests__/           # Test files
├── src/                 # Source code
├── jest.config.js       # Jest configuration
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

### Installation

```bash
npm install
```

## Test-Driven Development Workflow

1. **Write a failing test** - Define the expected behavior
2. **Run the test** - Verify that it fails
3. **Write the implementation** - Make the test pass
4. **Run the test again** - Verify that it passes
5. **Refactor** - Improve the code while keeping tests passing

### Available Scripts

- `npm test` - Run all tests
- `npm run test:watch` - Run tests in watch mode (great for TDD)
- `npm run build` - Build the project
- `npm run dev` - Run TypeScript in watch mode
- `npm start` - Run the built application

## Example

This project includes a simple `Calculator` class with basic arithmetic operations to demonstrate TDD principles.

### Writing a New Feature Using TDD

1. **Write a test first** in `__tests__/your-feature.test.ts`
2. **Run the test** to see it fail: `npm run test:watch`
3. **Implement the feature** in `src/your-feature.ts`
4. **Watch the test pass** automatically in watch mode
5. **Refactor** your code as needed while ensuring tests continue to pass

## License

ISC
