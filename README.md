# CI/CD Teaching Demo

A TypeScript project demonstrating CI/CD principles with a simple calculator application. This project is designed to teach students about Continuous Integration and Continuous Deployment pipelines.

## Project Overview

This project includes:
- A simple calculator application with a web UI
- Test-Driven Development (TDD) using Jest
- Docker containerization
- CI/CD pipeline configuration using GitHub Actions

## Project Structure

```
.
├── .github/workflows/   # CI/CD pipeline configuration
├── public/              # Static web assets
├── src/                 # Source code
├── __tests__/           # Test files
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose configuration
├── jest.config.js       # Jest configuration
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Docker (for containerization)

### Installation

```bash
# Install dependencies
npm install

# Run the application in development mode
npm run dev

# Build the application
npm run build

# Start the application
npm start
```

## CI/CD Learning Objectives

This project demonstrates the following CI/CD concepts:

1. **Continuous Integration**
   - Automated testing with Jest
   - Code quality checks
   - Build verification

2. **Continuous Deployment**
   - Docker containerization
   - Automated build and deployment pipeline
   - Environment configuration

3. **Version Control Integration**
   - GitHub Actions workflow
   - Automated processes triggered by code changes

## Using Docker

### Building the Docker Image

```bash
# Using npm script
npm run docker:build

# Or using Docker directly
docker build -t cicd-demo .
```

### Running the Docker Container

```bash
# Using npm script
npm run docker:run

# Or using Docker directly
docker run -p 3000:3000 cicd-demo
```

### Using Docker Compose

```bash
# Start the application
docker-compose up

# Start in detached mode
docker-compose up -d

# Stop the application
docker-compose down
```

## CI/CD Pipeline

The GitHub Actions workflow in `.github/workflows/ci-cd.yml` demonstrates a complete CI/CD pipeline:

1. **Test Stage**: Runs all tests and uploads coverage reports
2. **Build Stage**: Compiles the TypeScript code and prepares the application
3. **Deploy Stage**: Builds and pushes Docker image to Google Cloud Platform, then deploys to Cloud Run

## Deploying to Google Cloud Platform

This project is configured to automatically deploy to Google Cloud Platform's Cloud Run service when changes are pushed to the main branch.

### Prerequisites for GCP Deployment

1. A Google Cloud Platform account with an active project
2. The following APIs enabled in your GCP project:
   - Cloud Run API
   - Artifact Registry API
   - Cloud Build API

3. A service account with the following roles:
   - Cloud Run Admin
   - Storage Admin
   - Artifact Registry Writer

### Setting Up GCP Deployment

1. **Create an Artifact Registry Repository**:
   ```bash
   gcloud artifacts repositories create cicd-demo \
     --repository-format=docker \
     --location=[YOUR_REGION] \
     --description="CICD Demo Docker repository"
   ```

2. **Configure GitHub Secrets**:
   Add the following secrets to your GitHub repository:
   - `GCP_PROJECT_ID`: Your GCP project ID
   - `GCP_SA_KEY`: The entire content of the service account JSON key file
   - `GCP_REGION`: Your preferred GCP region (e.g., `us-central1`)

3. **Deployment Process**:
   - When code is pushed to the main branch, GitHub Actions will:
     - Run tests
     - Build the application
     - Build and push a Docker image to GCP Artifact Registry
     - Deploy the image to Cloud Run

4. **Accessing the Deployed Application**:
   - The application will be available at the URL provided by Cloud Run
   - The URL can be found in the GitHub Actions workflow output

### Benefits of Cloud Run Deployment

- Serverless container execution
- Automatic scaling based on traffic
- Pay only for resources used during request handling
- Built-in HTTPS endpoints
- Easy rollback to previous versions

## Teaching Tips

- Have students make changes to the calculator functionality and observe how tests catch issues
- Demonstrate how the CI pipeline reacts to code changes
- Show how Docker creates consistent environments across development and production
- Discuss the importance of automated testing in deployment pipelines

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
- `npm run dev` - Run the application in development mode
- `npm start` - Run the built application
- `npm run docker:build` - Build the Docker image
- `npm run docker:run` - Run the Docker container

## License

ISC
