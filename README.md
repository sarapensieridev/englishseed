# ⚡ Starter Project (Vite + React + TypeScript)

This repository contains the source code for a modern front-end application built with **Vite**, **React**, and **TypeScript**, styled using **MUI (Material UI)** components.

## 🚀 Getting Started

Follow these steps to get a copy of the project up and running on your local machine.

### Prerequisites

You must have **Node.js** installed on your system. This project uses **Yarn** as the package manager.

* **Node.js:** Ensure you have the latest LTS version installed.
* **Yarn:** If you don't have Yarn installed globally, you can install it via npm:
    ```bash
    npm install -g yarn
    ```

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPOSITORY_URL_HERE]
    cd starter
    ```
2.  **Install Dependencies:** Use Yarn to install all project dependencies:
    ```bash
    yarn install
    ```

## ▶️ Available Commands

The following scripts are defined in `package.json` and are used for development, building, and code quality checks.

| Command | Action | Description |
| :--- | :--- | :--- |
| `yarn dev` | **Start Development Server** | Runs the application in development mode using **Vite**. Includes Hot Module Replacement (HMR) for fast updates. |
| `yarn build` | **Build for Production** | Creates a production-ready bundle of the application in the `./dist` directory. This is the code you deploy. |
| `yarn preview` | **Preview Production Build** | Serves the files from the `./dist` folder locally to test the production build before deployment. |
| `yarn lint` | **Run Linting Check** | Executes ESLint to check the `src` files for common errors and style issues (TypeScript and React-specific). |

### Recommended Startup Command

To start working on the project, run:

```bash
yarn dev