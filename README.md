# agents-backend

NLW - Agents (backend)

This project is the backend for the NLW Agents application, built with Node.js, Fastify, and Drizzle ORM.

## Technologies

- **Node.js:** JavaScript runtime environment.
- **Fastify:** Fast and low overhead web framework.
- **TypeScript:** Typed superset of JavaScript.
- **Drizzle ORM:** TypeScript ORM for SQL databases.
- **PostgreSQL:** Powerful, open source object-relational database system.
- **pgvector:** PostgreSQL extension for vector similarity search.
- **Zod:** TypeScript-first schema declaration and validation library.
- **Docker:** Containerization platform.
- **ESLint:** Pluggable linting utility for JavaScript and JSX.
- **Prettier:** Opinionated code formatter.
- **Husky:** Git hooks manager.
- **Commitizen:** Commit message generator.

## Getting Started

### Prerequisites

- Node.js
- Docker

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/agents-backend.git
    cd agents-backend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root of the project and add the necessary environment variables. You can use the `.env.example` file as a template.

    ```bash
    cp .env.example .env
    ```

4.  **Start the database:**

    ```bash
    npm run docker:start
    ```

5.  **Run database migrations:**

    ```bash
    npm run db:migrate
    ```

6.  **Seed the database:**

    ```bash
    npm run db:seed
    ```

7.  **Run the application in development mode:**

    ```bash
    npm run dev
    ```

## Available Scripts

- `dev`: Starts the application in development mode with hot-reloading.
- `start`: Starts the application in production mode.
- `build`: Compiles the TypeScript code to JavaScript.
- `docker:start`: Starts the PostgreSQL database using Docker Compose.
- `docker:stop`: Stops the PostgreSQL database using Docker Compose.
- `lint`: Lints the codebase using ESLint.
- `commit`: Lints, formats, and stages files before committing with Commitizen.
- `test`: Runs the test suite.
- `test:watch`: Runs the test suite in watch mode.
- `test:coverage`: Generates a test coverage report.

## Database

This project uses PostgreSQL with the `pgvector` extension for vector similarity search. Drizzle ORM is used for database management.

The database schema is defined in the `src/db/schema` directory. Migrations are located in the `src/db/migrations` directory.

## Linting and Formatting

This project uses ESLint for linting and Prettier for code formatting. There is a pre-commit hook configured with Husky that runs ESLint and Prettier before each commit.

## Committing

This project uses Commitizen to standardize commit messages. To commit your changes, run the following command:

```bash
npm run commit
```
