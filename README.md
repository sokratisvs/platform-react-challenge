<!--
  Based on: https://github.com/sokratisvs/Best-README-Template
-->

<div align="center">
  <h1>Cat Lovers React App 🐾</h1>
  <p>
    A React 19 + Vite app for cat lovers, powered by <a href="https://thecatapi.com/">TheCatAPI</a>.  
    Browse random cats, explore breeds, and save your favourites.
  </p>
</div>

---

## Table of Contents

- [About the Project](#about-the-project)
  - [Features](#features)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Available Scripts](#available-scripts)
- [Usage](#usage)
  - [View 1 – Random Cats](#view-1--random-cats)
  - [View 2 – Cat Breeds](#view-2--cat-breeds)
  - [View 3 – Favourites](#view-3--favourites)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## About the Project

This project is a small web application for cat lovers built on top of **TheCatAPI**.  
It demonstrates modern React patterns (React 19, React Query, Vite) and client-side routing with URL-shareable modals.

The app provides:

- A **gallery of random cats**
- A **breed explorer** with image galleries per breed
- A **favourites page** where users can manage their favourite cat images

### Features

**View 1 – Random Cats**

- Displays a list of **10 random cat images**
- **“Load more”** button to fetch and append more random cats
- Clicking an image opens a **modal** with:
  - Larger cat image
  - **Breed information** if available
  - A **form/button to mark the image as favourite**
- **Deep linking**: the modal has a unique URL so you can copy-paste and share it; opening that URL shows the same image and its details.

**View 2 – Cat Breeds**

- Displays a **list of cat breeds** (name + basic info).
- Selecting a breed opens a **modal** containing:
  - A list/gallery of images for that breed
  - Each image is a link to the **image detail modal** from View 1 (same URL behavior).

**View 3 – Favourites**

- Displays **all favourite cat images** saved by the user.
- Allows **removing an image from favourites** (e.g. via button, icon, or context menu).
- Shares the same image detail modal behavior as in View 1.

### Built With

- [Vite](https://vitejs.dev/) – build tool & dev server
- [React 19](https://react.dev/) – UI library
- [React Router](https://reactrouter.com/) (or similar) – routing & URL-based modals
- [React Query](https://tanstack.com/query/latest) – data fetching & caching
- [pnpm](https://pnpm.io/) – package manager
- [TypeScript](https://www.typescriptlang.org/) (optional but recommended)
- [TheCatAPI](https://thecatapi.com/) – cat images & breed data

---

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

**Node.js** (LTS recommended)

- **pnpm**

  ```bash
  npm install -g pnpm
  ```

  **Or for Node 18+**

  ```bash

  corepack enable
  ```

- **Local development**

  ```
  # Move into the new project folder
  cd cat-lover-app

  # Install dependencies
  pnpm install

  # Start dev server
  pnpm dev
  ```
